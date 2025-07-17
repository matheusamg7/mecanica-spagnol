// Layout para páginas de autenticação - Mecânica Spagnol

import { redirect } from 'next/navigation';
import { getSession } from '@/lib/supabase/auth-server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Mecânica Spagnol',
    default: 'Autenticação',
  },
  description: 'Faça login ou crie sua conta na Mecânica Spagnol',
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('🔐 [AuthLayout] Verificando auth state...');
  
  // Verificar se usuário já está logado
  const session = await getSession();
  
  console.log('🔐 [AuthLayout] Session check:', { hasSession: !!session });
  
  // Se já estiver logado, redirecionar para home
  if (session) {
    console.log('🔄 [AuthLayout] Redirecionando usuário logado para home');
    redirect('/');
  }

  console.log('✅ [AuthLayout] Permitindo acesso a auth pages');
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {children}
      </div>
    </div>
  );
}