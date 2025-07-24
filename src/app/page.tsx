import Link from 'next/link';
import { ArrowRight, Truck, Wrench, Clock, Shield, ShoppingBag, MessageCircle, Phone } from 'lucide-react';
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
            backgroundSize: '100%',
            backgroundPosition: 'right center',
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
                Especialistas em linha diesel leve e pesada, e linha agrícola, com décadas de confiança e expertise.
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
      <section className="mb-16 -mt-6">
        <div className="bg-[#0252A7] py-12 relative overflow-hidden">
          {/* Marca d'água */}
          <div className="absolute top-0 right-1/4 flex items-center justify-center pointer-events-none h-full">
            <img 
              src="/images/peblogo.png" 
              alt="" 
              className="w-96 h-96 opacity-[0.12]"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Ampla variedade de peças, agora também <span className="text-white">online!</span>
              </h2>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-4"></div>
              <p className="text-lg text-white/90">
                Navegue por categorias e compre direto pelo nosso e-commerce:
              </p>
            </div>
            <Button 
              size="lg" 
              asChild
              style={{ backgroundColor: '#FFFFFF', color: '#0252A7' }}
              className="hover:opacity-90 transition-opacity"
            >
              <Link href="/loja">
                Ver todos os produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/categoria/caminhonetes-a-diesel" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-44">
              <img
                src="/images/caminhonetes-a-diesel.jpg"
                alt="Caminhonetes a Diesel"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-base">Caminhonetes a Diesel</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-4 py-2 rounded-md font-medium text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>

          <Link href="/categoria/caminhoes-a-diesel" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-44">
              <img
                src="/images/caminhoes-a-diesel.jpg"
                alt="Caminhões a Diesel"
                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-base">Caminhões a Diesel</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-4 py-2 rounded-md font-medium text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>

          <Link href="/categoria/onibus" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-44">
              <img
                src="/images/onibus.jpg"
                alt="Ônibus"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-base">Ônibus</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-4 py-2 rounded-md font-medium text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>

          <Link href="/categoria/linha-agricola" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-44">
              <img
                src="/images/linha-agricola.png"
                alt="Linha Agrícola"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-base">Linha Agrícola</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-4 py-2 rounded-md font-medium text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>
        </div>
          </div>
        </div>
      </section>


      {/* Peças Raras */}
      <section className="container mx-auto px-4 mb-16 -mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#151515]">
            Peças raras que só se encontram aqui.
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Seleção especial para restauradores, colecionadores e apaixonados por clássicos.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {/* Produto 1 - Bloco Motor Mercedes 1113 */}
            <div className="flex-none w-64">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group/card">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop"
                    alt="Bloco Motor Mercedes 1113"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="font-semibold text-base mb-1">Bloco Motor Mercedes 1113</h3>
                  <p className="text-sm text-gray-500 mb-2">Cód: MB-1113-BL</p>
                  <p className="text-xl font-bold text-[#0252A7] mb-3 mt-auto">R$ 8.900,00</p>
                  <Button 
                    className="w-full bg-[#0252A7] hover:bg-[#0252A7]/90 text-white cursor-pointer mb-2"
                    size="sm"
                  >
                    Comprar agora
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    size="sm"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Bloco Motor Mercedes 1113 (Cód: MB-1113-BL)" target="_blank" rel="noopener noreferrer">
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 2 - Cabeçote FNM D-11000 */}
            <div className="flex-none w-64">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group/card">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop"
                    alt="Cabeçote FNM D-11000"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="font-semibold text-base mb-1">Cabeçote FNM D-11000</h3>
                  <p className="text-sm text-gray-500 mb-2">Cód: FNM-D11-CB</p>
                  <p className="text-xl font-bold text-[#0252A7] mb-3 mt-auto">R$ 6.500,00</p>
                  <Button 
                    className="w-full bg-[#0252A7] hover:bg-[#0252A7]/90 text-white cursor-pointer mb-2"
                    size="sm"
                  >
                    Comprar agora
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    size="sm"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Cabeçote FNM D-11000 (Cód: FNM-D11-CB)" target="_blank" rel="noopener noreferrer">
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 3 - Câmbio Scania L111 */}
            <div className="flex-none w-64">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group/card">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop"
                    alt="Câmbio Scania L111"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="font-semibold text-base mb-1">Câmbio Scania L111 Original</h3>
                  <p className="text-sm text-gray-500 mb-2">Cód: SC-L111-CB</p>
                  <p className="text-xl font-bold text-[#0252A7] mb-3 mt-auto">R$ 12.800,00</p>
                  <Button 
                    className="w-full bg-[#0252A7] hover:bg-[#0252A7]/90 text-white cursor-pointer mb-2"
                    size="sm"
                  >
                    Comprar agora
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    size="sm"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Câmbio Scania L111 Original (Cód: SC-L111-CB)" target="_blank" rel="noopener noreferrer">
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 4 - Radiador Chevrolet C60 */}
            <div className="flex-none w-64">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group/card">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop"
                    alt="Radiador Chevrolet C60"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="font-semibold text-base mb-1">Radiador Chevrolet C60</h3>
                  <p className="text-sm text-gray-500 mb-2">Cód: CHV-C60-RD</p>
                  <p className="text-xl font-bold text-[#0252A7] mb-3 mt-auto">R$ 2.450,00</p>
                  <Button 
                    className="w-full bg-[#0252A7] hover:bg-[#0252A7]/90 text-white cursor-pointer mb-2"
                    size="sm"
                  >
                    Comprar agora
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    size="sm"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Radiador Chevrolet C60 (Cód: CHV-C60-RD)" target="_blank" rel="noopener noreferrer">
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 5 - Carburador Ford F350 */}
            <div className="flex-none w-64">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group/card">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=400&h=400&fit=crop"
                    alt="Carburador Ford F350"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="font-semibold text-base mb-1">Carburador Ford F350 71</h3>
                  <p className="text-sm text-gray-500 mb-2">Cód: FRD-F350-CB</p>
                  <p className="text-xl font-bold text-[#0252A7] mb-3 mt-auto">R$ 1.850,00</p>
                  <Button 
                    className="w-full bg-[#0252A7] hover:bg-[#0252A7]/90 text-white cursor-pointer mb-2"
                    size="sm"
                  >
                    Comprar agora
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    size="sm"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Carburador Ford F350 71 (Cód: FRD-F350-CB)" target="_blank" rel="noopener noreferrer">
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
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

    </div>
  );
}