// Funções de autenticação - Mecânica Spagnol

import { createBrowserClient } from '@supabase/ssr';
import { Profile } from '@/types/database';

// Criar cliente Supabase para auth
const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Tipos de retorno das funções
export interface AuthResponse {
  success: boolean;
  error?: string;
  data?: unknown;
}

export interface AuthUser {
  id: string;
  email: string;
  profile?: Profile;
}

// Função de login
export async function signIn(email: string, password: string): Promise<AuthResponse> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message === 'Invalid login credentials' 
          ? 'Email ou senha inválidos' 
          : 'Erro ao fazer login. Tente novamente.',
      };
    }

    return {
      success: true,
      data: data.user,
    };
  } catch (error) {
    console.error('Erro no login:', error);
    return {
      success: false,
      error: 'Erro inesperado. Tente novamente.',
    };
  }
}

// Função de cadastro
export async function signUp(
  email: string,
  password: string,
  fullName: string,
  phone?: string
): Promise<AuthResponse> {
  try {
    // Criar usuário
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone: phone,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      if (error.message.includes('already registered')) {
        return {
          success: false,
          error: 'Este email já está cadastrado.',
        };
      }
      return {
        success: false,
        error: 'Erro ao criar conta. Tente novamente.',
      };
    }

    // Atualizar profile com dados adicionais
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          phone: phone,
        })
        .eq('id', data.user.id);

      if (profileError) {
        console.error('Erro ao atualizar profile:', profileError);
      }
    }

    return {
      success: true,
      data: data.user,
    };
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return {
      success: false,
      error: 'Erro inesperado. Tente novamente.',
    };
  }
}

// Função de logout
export async function signOut(): Promise<AuthResponse> {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        error: 'Erro ao fazer logout.',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Erro no logout:', error);
    return {
      success: false,
      error: 'Erro inesperado ao fazer logout.',
    };
  }
}

// Função de recuperação de senha
export async function resetPassword(email: string): Promise<AuthResponse> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
    });

    if (error) {
      return {
        success: false,
        error: 'Erro ao enviar email de recuperação.',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Erro na recuperação de senha:', error);
    return {
      success: false,
      error: 'Erro inesperado. Tente novamente.',
    };
  }
}

// Função de atualização de senha
export async function updatePassword(newPassword: string): Promise<AuthResponse> {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return {
        success: false,
        error: 'Erro ao atualizar senha.',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Erro ao atualizar senha:', error);
    return {
      success: false,
      error: 'Erro inesperado. Tente novamente.',
    };
  }
}

// Função para atualizar profile
export async function updateProfile(
  userId: string,
  data: {
    full_name?: string;
    phone?: string;
    cpf?: string;
  }
): Promise<AuthResponse> {
  try {
    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', userId);

    if (error) {
      return {
        success: false,
        error: 'Erro ao atualizar perfil.',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Erro ao atualizar profile:', error);
    return {
      success: false,
      error: 'Erro inesperado. Tente novamente.',
    };
  }
}

// Função para buscar profile do usuário
export async function getProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Erro ao buscar profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar profile:', error);
    return null;
  }
}

// Função para verificar se é admin
export async function checkIsAdmin(userId: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();

    if (error || !data) {
      return false;
    }

    return data.role === 'admin';
  } catch (error) {
    console.error('Erro ao verificar admin:', error);
    return false;
  }
}

// Função para obter sessão atual
export async function getSession() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Erro ao obter sessão:', error);
      return null;
    }

    return session;
  } catch (error) {
    console.error('Erro ao obter sessão:', error);
    return null;
  }
}

// Função para obter usuário atual com profile
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    const profile = await getProfile(user.id);

    return {
      id: user.id,
      email: user.email!,
      profile: profile || undefined,
    };
  } catch (error) {
    console.error('Erro ao obter usuário atual:', error);
    return null;
  }
}

// Listener de mudanças de autenticação
export function onAuthStateChange(callback: (event: string, session: unknown) => void) {
  return supabase.auth.onAuthStateChange(callback);
}