// Guard de administrador - Mecânica Spagnol

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/auth-context';
import { checkIsAdmin } from '@/lib/auth/permissions';
import { AuthLoading } from './auth-loading';
import { toast } from 'sonner';

interface AdminGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function AdminGuard({ children, redirectTo = '/' }: AdminGuardProps) {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      // Se não há usuário, redirecionar para login
      if (!user) {
        router.push('/login?redirect=/admin');
        return;
      }

      // Se usuário não é admin, redirecionar para home
      if (!checkIsAdmin(user)) {
        toast.error('Acesso negado. Área restrita a administradores.');
        router.push(redirectTo);
      }
    }
  }, [user, loading, router, redirectTo]);

  // Mostrar loading enquanto verifica
  if (loading) {
    return <AuthLoading />;
  }

  // Se não há usuário ou não é admin, não renderizar nada (vai redirecionar)
  if (!user || !checkIsAdmin(user)) {
    return <AuthLoading />;
  }

  // Usuário é admin, renderizar children
  return <>{children}</>;
}