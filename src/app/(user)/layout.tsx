// Layout para área do usuário - Mecânica Spagnol

import { AuthGuard } from '@/components/auth/auth-guard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Minha Conta - Mecânica Spagnol',
    default: 'Minha Conta',
  },
  description: 'Área do cliente - Mecânica Spagnol',
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      {children}
    </AuthGuard>
  );
}