// Funções de autenticação Server-side - Mecânica Spagnol
// ================================================================
// IMPORTANTE: Estas funções usam o SERVER CLIENT e devem ser 
// chamadas apenas do lado do servidor (Server Components, middleware)
// ================================================================

import { createClient } from '@/lib/supabase/server';
import { Profile } from '@/types/database';

console.log('🖥️ [auth-server] Módulo de autenticação server-side inicializado');

// Função para obter sessão atual (server-side)
export async function getSession() {
  console.log('🔍 [auth-server] getSession iniciado');
  try {
    const supabase = await createClient();
    const { data: { session }, error } = await supabase.auth.getSession();
    
    console.log('🔍 [auth-server] Session resultado:', { 
      hasSession: !!session, 
      error: error?.message 
    });

    if (error) {
      console.error('💥 [auth-server] Erro ao obter sessão:', error);
      return null;
    }

    return session;
  } catch (error) {
    console.error('💥 [auth-server] Exception ao obter sessão:', error);
    return null;
  }
}

// Função para obter usuário atual (server-side)
export async function getUser() {
  console.log('👤 [auth-server] getUser iniciado');
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    
    console.log('👤 [auth-server] User resultado:', { 
      hasUser: !!user, 
      error: error?.message 
    });

    if (error) {
      console.error('💥 [auth-server] Erro ao obter usuário:', error);
      return null;
    }

    return user;
  } catch (error) {
    console.error('💥 [auth-server] Exception ao obter usuário:', error);
    return null;
  }
}

// Função para buscar profile (server-side)
export async function getProfile(userId: string): Promise<Profile | null> {
  console.log('📄 [auth-server] getProfile iniciado para user:', userId);
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    console.log('📄 [auth-server] Query profiles resultado:', { data, error });

    if (error) {
      console.error('💥 [auth-server] Erro ao buscar profile:', error);
      return null;
    }

    console.log('✅ [auth-server] Profile retornado:', data);
    return data;
  } catch (error) {
    console.error('💥 [auth-server] Exception ao buscar profile:', error);
    return null;
  }
}

// Função para verificar se é admin (server-side)
export async function checkIsAdmin(userId: string): Promise<boolean> {
  console.log('🔐 [auth-server] checkIsAdmin iniciado para user:', userId);
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();

    console.log('🔐 [auth-server] Query role resultado:', { data, error });

    if (error || !data) {
      console.log('❌ [auth-server] Não é admin - erro ou sem dados');
      return false;
    }

    const isAdmin = data.role === 'admin';
    console.log('🔐 [auth-server] Status admin:', isAdmin);
    return isAdmin;
  } catch (error) {
    console.error('💥 [auth-server] Exception ao verificar admin:', error);
    return false;
  }
}