// Layout para páginas de autenticação - Mecânica Spagnol

import { redirect } from 'next/navigation';
import { getUser } from '@/lib/supabase/auth-server';
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
  // Verificar se usuário já está logado usando getUser() para validação mais confiável
  const user = await getUser();
  
  // Se já estiver logado, redirecionar para home
  if (user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {children}
      </div>
    </div>
  );
}