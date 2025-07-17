// Dashboard Admin - Mecânica Spagnol

'use client';

import { useAuthContext } from '@/contexts/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminDashboardPage() {
  const { user } = useAuthContext();

  const stats = [
    {
      title: 'Total de Pedidos',
      value: '0',
      description: 'Este mês',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Clientes',
      value: '0',
      description: 'Cadastrados',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Receita',
      value: 'R$ 0,00',
      description: 'Este mês',
      icon: DollarSign,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Crescimento',
      value: '0%',
      description: 'Comparado ao mês anterior',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard Administrativo</h1>
        <p className="text-muted-foreground">
          Bem-vindo(a), {user?.profile?.full_name || 'Administrador'}!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Gerencie seu e-commerce</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <a 
                href="/admin/produtos" 
                className="block p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Gerenciar Produtos
              </a>
              <a 
                href="/admin/pedidos" 
                className="block p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Ver Pedidos
              </a>
              <a 
                href="/admin/clientes" 
                className="block p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Gerenciar Clientes
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pedidos Recentes</CardTitle>
            <CardDescription>Últimos pedidos recebidos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center py-8">
              Nenhum pedido ainda
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}