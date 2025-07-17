// Sidebar da área do usuário - Mecânica Spagnol

'use client';

import { cn } from '@/lib/utils';
import { User, Package, MapPin, Shield, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/minha-conta',
    icon: Home,
    exact: true,
  },
  {
    title: 'Meus Dados',
    href: '/minha-conta/perfil',
    icon: User,
  },
  {
    title: 'Meus Pedidos',
    href: '/meus-pedidos',
    icon: Package,
  },
  {
    title: 'Endereços',
    href: '/minha-conta/enderecos',
    icon: MapPin,
  },
  {
    title: 'Segurança',
    href: '/minha-conta/seguranca',
    icon: Shield,
  },
];

interface AccountSidebarProps {
  className?: string;
}

export function AccountSidebar({ className }: AccountSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={cn('space-y-1', className)}>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href, item.exact);

        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant={active ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                active && 'bg-secondary font-medium'
              )}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}