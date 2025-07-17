// Layout para área administrativa - Mecânica Spagnol

import { AdminGuard } from '@/components/auth/admin-guard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Admin - Mecânica Spagnol',
    default: 'Painel Administrativo',
  },
  description: 'Área administrativa - Mecânica Spagnol',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50">
        {/* Futuramente adicionar sidebar e header admin aqui */}
        {children}
      </div>
    </AdminGuard>
  );
}