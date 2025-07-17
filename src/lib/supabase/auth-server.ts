// Funções de autenticação Server-side - Mecânica Spagnol
// ================================================================
// IMPORTANTE: Estas funções usam o SERVER CLIENT e devem ser 
// chamadas apenas do lado do servidor (Server Components, middleware)
// ================================================================

import { createClient } from '@/lib/supabase/server';
import { Profile } from '@/types/database';

// Função para obter sessão atual (server-side)
// AVISO: Esta função deve ser usada apenas para verificações não críticas
// Para autenticação, sempre use getUser() que é mais seguro
export async function getSession() {
  try {
    const supabase = await createClient();
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      return null;
    }

    return session;
  } catch (error) {
    return null;
  }
}

// Função para obter usuário atual (server-side)
export async function getUser() {
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
}

// Função para buscar profile (server-side)
export async function getProfile(userId: string): Promise<Profile | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      return null;
    }

    return data;
  } catch (error) {
    return null;
  }
}

// Função para verificar se é admin (server-side)
export async function checkIsAdmin(userId: string): Promise<boolean> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();

    if (error || !data) {
      return false;
    }

    const isAdmin = data.role === 'admin';
    return isAdmin;
  } catch (error) {
    return false;
  }
}