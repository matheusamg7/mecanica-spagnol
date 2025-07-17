// Hook de autenticação - Mecânica Spagnol

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { 
  signIn as authSignIn, 
  signUp as authSignUp, 
  signOut as authSignOut,
  resetPassword as authResetPassword,
  updatePassword as authUpdatePassword,
  updateProfile as authUpdateProfile,
  getCurrentUser,
  onAuthStateChange,
  AuthUser,
  checkIsAdmin
} from '@/lib/supabase/auth';

interface UseAuthReturn {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, fullName: string, phone?: string, cpf?: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<boolean>;
  updatePassword: (newPassword: string) => Promise<boolean>;
  updateProfile: (data: { full_name?: string; phone?: string; cpf?: string }) => Promise<boolean>;
  clearError: () => void;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // Carregar usuário inicial
  useEffect(() => {
    loadUser();

    // Escutar mudanças de autenticação
    const { data: authListener } = onAuthStateChange(async (event, session) => {
      console.log('🎧 [useAuth] Auth state change:', { event, session: !!session });
      
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        console.log('🔑 [useAuth] Login ou token refresh detectado, carregando user...');
        await loadUser();
      } else if (event === 'SIGNED_OUT') {
        console.log('🚪 [useAuth] Logout detectado, limpando state...');
        setUser(null);
        setIsAdmin(false);
      } else {
        console.log('📡 [useAuth] Evento auth não tratado:', event);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // Função para carregar usuário
  const loadUser = async () => {
    console.log('🔄 [useAuth] loadUser iniciado');
    try {
      setLoading(true);
      console.log('⏳ [useAuth] Loading state ativado');
      
      const currentUser = await getCurrentUser();
      console.log('👤 [useAuth] getCurrentUser resultado:', currentUser);
      
      if (currentUser) {
        setUser(currentUser);
        console.log('✅ [useAuth] User setado:', { id: currentUser.id, email: currentUser.email });
        
        // Verificar se é admin
        console.log('🔐 [useAuth] Verificando status admin...');
        const adminStatus = await checkIsAdmin(currentUser.id);
        console.log('🔐 [useAuth] Status admin:', adminStatus);
        setIsAdmin(adminStatus);
      } else {
        console.log('❌ [useAuth] Nenhum usuário encontrado, limpando state');
        setUser(null);
        setIsAdmin(false);
      }
    } catch (error) {
      console.error('💥 [useAuth] Erro ao carregar usuário:', error);
      setError('Erro ao carregar dados do usuário');
    } finally {
      setLoading(false);
      console.log('✅ [useAuth] Loading state desativado');
    }
  };

  // Função de login
  const signIn = useCallback(async (email: string, password: string): Promise<boolean> => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await authSignIn(email, password);
      
      if (!response.success) {
        setError(response.error || 'Erro ao fazer login');
        return false;
      }

      await loadUser();
      router.refresh();
      return true;
    } catch {
      setError('Erro inesperado ao fazer login');
      return false;
    } finally {
      setLoading(false);
    }
  }, [router]);

  // Função de cadastro
  const signUp = useCallback(async (
    email: string, 
    password: string, 
    fullName: string, 
    phone?: string,
    cpf?: string
  ): Promise<boolean> => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await authSignUp(email, password, fullName, phone, cpf);
      
      if (!response.success) {
        setError(response.error || 'Erro ao criar conta');
        return false;
      }

      // Fazer login automático após cadastro
      const loginResponse = await authSignIn(email, password);
      if (loginResponse.success) {
        await loadUser();
        router.refresh();
      }

      return true;
    } catch {
      setError('Erro inesperado ao criar conta');
      return false;
    } finally {
      setLoading(false);
    }
  }, [router]);

  // Função de logout
  const signOut = useCallback(async () => {
    try {
      setLoading(true);
      await authSignOut();
      setUser(null);
      setIsAdmin(false);
      router.push('/');
      router.refresh();
    } catch {
      setError('Erro ao fazer logout');
    } finally {
      setLoading(false);
    }
  }, [router]);

  // Função de recuperação de senha
  const resetPassword = useCallback(async (email: string): Promise<boolean> => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await authResetPassword(email);
      
      if (!response.success) {
        setError(response.error || 'Erro ao enviar email de recuperação');
        return false;
      }

      return true;
    } catch {
      setError('Erro inesperado ao enviar email');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Função de atualização de senha
  const updatePassword = useCallback(async (newPassword: string): Promise<boolean> => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await authUpdatePassword(newPassword);
      
      if (!response.success) {
        setError(response.error || 'Erro ao atualizar senha');
        return false;
      }

      return true;
    } catch {
      setError('Erro inesperado ao atualizar senha');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Função de atualização de perfil
  const updateProfile = useCallback(async (data: {
    full_name?: string;
    phone?: string;
    cpf?: string;
  }): Promise<boolean> => {
    try {
      setError(null);
      setLoading(true);
      
      if (!user) {
        setError('Usuário não autenticado');
        return false;
      }

      const response = await authUpdateProfile(user.id, data);
      
      if (!response.success) {
        setError(response.error || 'Erro ao atualizar perfil');
        return false;
      }

      // Recarregar dados do usuário
      await loadUser();
      return true;
    } catch {
      setError('Erro inesperado ao atualizar perfil');
      return false;
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Função para limpar erro
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    loading,
    error,
    isAdmin,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    clearError,
  };
}