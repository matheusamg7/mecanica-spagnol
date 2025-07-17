// Cliente Supabase para uso no servidor (Server-side) - 2025 Best Practices
// ================================================================
// Este cliente deve ser usado APENAS em:
// - Server Components
// - Server Actions
// - Route Handlers (API routes)
// - getServerSideProps
// ================================================================

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

export async function createClient() {
  console.log('🖥️ [server] Criando server client...');
  const cookieStore = await cookies();

  const client = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookies = cookieStore.getAll();
          console.log('🍪 [server] Obtendo cookies:', cookies.length);
          return cookies;
        },
        setAll(cookiesToSet) {
          try {
            console.log('🍪 [server] Definindo cookies:', cookiesToSet.length);
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            console.log('⚠️ [server] Erro ao definir cookies (Server Component context):', error);
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );

  console.log('✅ [server] Server client criado');
  return client;
}

// Função helper para criar cliente com service role (admin)
export async function createAdminClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component context
          }
        },
      },
    }
  );
}
