// Layout para área do usuário - Mecânica Spagnol

'use client';

import { AuthGuard } from '@/components/auth/auth-guard';
import { AccountSidebar } from '@/components/user/account-sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Mobile */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Minha Conta</h1>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="py-4">
                  <h2 className="text-lg font-semibold mb-4">Menu</h2>
                  <AccountSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Layout Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Minha Conta</h2>
                <AccountSidebar />
              </div>
            </aside>

            {/* Conteúdo Principal */}
            <main className="lg:col-span-3">
              {children}
            </main>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}