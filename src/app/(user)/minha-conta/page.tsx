// Página Minha Conta - Mecânica Spagnol

'use client';

import { useAuthContext } from '@/contexts/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Package, MapPin, Shield } from 'lucide-react';
import Link from 'next/link';

export default function MinhaContaPage() {
  const { user } = useAuthContext();

  const menuItems = [
    {
      title: 'Meus Dados',
      description: 'Gerencie suas informações pessoais',
      icon: User,
      href: '/minha-conta/perfil',
    },
    {
      title: 'Meus Pedidos',
      description: 'Acompanhe seus pedidos',
      icon: Package,
      href: '/meus-pedidos',
    },
    {
      title: 'Endereços',
      description: 'Gerencie seus endereços de entrega',
      icon: MapPin,
      href: '/minha-conta/enderecos',
    },
    {
      title: 'Segurança',
      description: 'Altere sua senha e configurações de segurança',
      icon: Shield,
      href: '/minha-conta/seguranca',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Minha Conta</h1>
        <p className="text-muted-foreground mb-8">
          Bem-vindo(a), {user?.profile?.full_name || user?.email}!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}