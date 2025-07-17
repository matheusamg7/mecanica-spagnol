// Cliente Supabase para uso no browser (Client-side) - 2025 Best Practices
// ================================================================
// Este cliente deve ser usado APENAS em:
// - Client Components (com 'use client')
// - Event handlers
// - useEffect hooks
// - Outras operações client-side
// ================================================================

import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/types/supabase';

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Export cliente singleton para uso direto
export const supabase = createClient();
