// Guard de autenticação - Mecânica Spagnol

'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthContext } from '@/contexts/auth-context';
import { AuthLoading } from './auth-loading';

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function AuthGuard({ children, redirectTo = '/login' }: AuthGuardProps) {
  const { user, loading } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      // Preservar a URL atual para redirect após login
      const redirectUrl = `${redirectTo}?redirect=${encodeURIComponent(pathname)}`;
      router.push(redirectUrl);
    }
  }, [user, loading, router, pathname, redirectTo]);

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return <AuthLoading />;
  }

  // Se não há usuário, não renderizar nada (vai redirecionar)
  if (!user) {
    return <AuthLoading />;
  }

  // Usuário autenticado, renderizar children
  return <>{children}</>;
}