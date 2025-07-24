import Link from 'next/link';
import { ArrowRight, Truck, Wrench, Clock, Shield, ShoppingBag, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Categorias principais
const categories = [
  {
    id: 1,
    name: 'Caminhonetes a Diesel',
    description: 'Peças e acessórios para caminhonetes movidas a diesel',
    href: '/categoria/caminhonetes-a-diesel',
    icon: '🚛',
  },
  {
    id: 2,
    name: 'Caminhões Pesados',
    description: 'Componentes para caminhões de grande porte',
    href: '/categoria/caminhoes-pesados',
    icon: '🚚',
  },
  {
    id: 3,
    name: 'Ônibus Rodoviários e Urbanos',
    description: 'Peças para ônibus de transporte coletivo',
    href: '/categoria/onibus-rodoviarios-urbanos',
    icon: '🚌',
  },
  {
    id: 4,
    name: 'Máquinas Agrícolas e Tratores',
    description: 'Componentes para equipamentos agrícolas',
    href: '/categoria/maquinas-agricolas-tratores',
    icon: '🚜',
  },
];

// Diferenciais da empresa
const features = [
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Enviamos para todo o Brasil com agilidade e segurança',
  },
  {
    icon: Wrench,
    title: 'Peças de Qualidade',
    description: 'Trabalhamos apenas com produtos originais e de procedência',
  },
  {
    icon: Clock,
    title: 'Atendimento Especializado',
    description: 'Nossa equipe técnica está pronta para ajudar você',
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Todas as peças com garantia do fabricante',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Banner Section */}
      <section className="container mx-auto px-4 pt-6">
        <div 
          className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-end"
          style={{
            backgroundImage: 'url(/images/Scania-R450-Plus-1200x640.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="relative pb-20 pt-12 px-8 md:px-16 w-full z-10">
            <div className="flex flex-col items-start text-left gap-6 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Desde 1970 no mercado de mecânica pesada.
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Especialistas em caminhões, ônibus, tratores e caminhonetes, com décadas de confiança.
              </p>
              <Button 
                size="lg" 
                asChild
                style={{ backgroundColor: '#0252A7', color: '#FFFFFF' }}
                className="hover:opacity-90 transition-opacity"
              >
                <Link href="/sobre">
                  Conheça a Spagnol
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens/Diferenciais */}
      <section className="-mt-6 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Envio Rápido */}
            <div className="text-center relative">
              <Truck className="h-10 w-10 text-gray-600 mx-auto mb-3" />
              <p className="text-base font-medium text-gray-700">Envio rápido</p>
              <p className="text-sm text-gray-500">Para todo Brasil</p>
              {/* Divisória direita - mobile e desktop */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent md:block hidden"></div>
            </div>

            {/* Compra Online */}
            <div className="text-center relative">
              <ShoppingBag className="h-10 w-10 text-gray-600 mx-auto mb-3" />
              <p className="text-base font-medium text-gray-700">Compre pelo site</p>
              <p className="text-sm text-gray-500">E receba em casa</p>
              {/* Divisória direita - apenas desktop */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
            </div>

            {/* Qualidade e Garantia */}
            <div className="text-center relative">
              <Shield className="h-10 w-10 text-gray-600 mx-auto mb-3" />
              <p className="text-base font-medium text-gray-700">Qualidade e garantia</p>
              <p className="text-sm text-gray-500">Produtos certificados</p>
              {/* Divisória direita - apenas desktop */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
            </div>

            {/* Atendimento Especializado */}
            <div className="text-center">
              <MessageCircle className="h-10 w-10 text-gray-600 mx-auto mb-3" />
              <p className="text-base font-medium text-gray-700">Atendimento especializado</p>
              <p className="text-sm text-gray-500">Equipe especializada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Categorias</h2>
          <p className="text-lg text-muted-foreground">
            Encontre peças específicas para seu veículo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <Link href={category.href}>
                <CardHeader>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Ver produtos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher a Mecânica Spagnol?</h2>
            <p className="text-lg text-muted-foreground">
              Compromisso com qualidade e satisfação do cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de ajuda para encontrar a peça certa?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">
                Falar com Especialista
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Produtos em Destaque</h2>
          <p className="text-lg text-muted-foreground">
            Confira nossas ofertas especiais
          </p>
        </div>

        {/* TODO: Adicionar produtos em destaque quando implementar sistema de produtos */}
        <div className="bg-muted/50 rounded-lg p-12 text-center">
          <p className="text-muted-foreground">
            Em breve produtos em destaque estarão disponíveis aqui
          </p>
          <Button className="mt-4" asChild>
            <Link href="/loja">
              Ver todos os produtos
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}