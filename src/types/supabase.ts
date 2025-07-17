// Tipos gerados do Supabase - Mecânica Spagnol
// TODO: Gerar tipos automaticamente usando Supabase CLI

import { Tables } from './database';

export type Database = {
  public: {
    Tables: Tables;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      user_role: 'customer' | 'admin';
      order_status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
      payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
    };
  };
};