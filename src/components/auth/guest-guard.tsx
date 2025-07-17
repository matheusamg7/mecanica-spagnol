// Guard para visitantes (não autenticados) - Mecânica Spagnol

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/auth-context';
import { AuthLoading } from './auth-loading';

interface GuestGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function GuestGuard({ children, redirectTo = '/' }: GuestGuardProps) {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // Se usuário está autenticado, redirecionar
    if (!loading && user) {
      router.push(redirectTo);
    }
  }, [user, loading, router, redirectTo]);

  // Mostrar loading enquanto verifica
  if (loading) {
    return <AuthLoading />;
  }

  // Se há usuário, não renderizar nada (vai redirecionar)
  if (user) {
    return <AuthLoading />;
  }

  // Não há usuário (visitante), renderizar children
  return <>{children}</>;
}