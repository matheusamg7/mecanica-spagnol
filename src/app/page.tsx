import Link from 'next/link';
import { ArrowRight, Truck, Wrench, Clock, Shield, ShoppingBag, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollVelocity } from '@/components/ui/scroll-velocity';
import { Carousel3D } from '@/components/ui/carousel-3d';
import Image from 'next/image';

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

// Imagens dos serviços mecânicos
const serviceImages = [
  { title: 'Serviço 1', path: '/images/images-mec/WhatsApp Image 2025-07-21 at 08.23.57 (1).jpeg' },
  { title: 'Serviço 2', path: '/images/images-mec/WhatsApp Image 2025-07-21 at 08.23.57 (2).jpeg' },
  { title: 'Serviço 3', path: '/images/images-mec/WhatsApp Image 2025-07-21 at 08.23.57 (3).jpeg' },
  { title: 'Serviço 4', path: '/images/images-mec/WhatsApp Image 2025-07-21 at 08.23.57.jpeg' },
  { title: 'Serviço 5', path: '/images/images-mec/WhatsApp Image 2025-07-24 at 11.39.58.jpeg' },
  { title: 'Serviço 6', path: '/images/images-mec/WhatsApp Image 2025-07-24 at 11.40.02.jpeg' },
  { title: 'Serviço 7', path: '/images/images-mec/WhatsApp Image 2025-07-24 at 11.40.08.jpeg' },
  { title: 'Serviço 8', path: '/images/images-mec/WhatsApp Image 2025-07-24 at 11.40.12.jpeg' },
  { title: 'Serviço 9', path: '/images/images-mec/WhatsApp Image 2025-07-24 at 11.40.21.jpeg' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16 pb-8 sm:pb-16">
      {/* Hero Banner Section */}
      <section className="container mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        <div 
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[350px] sm:min-h-[500px] flex items-end"
          style={{
            backgroundImage: 'url(/images/Scania-R450-Plus-1200x640.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative pb-12 sm:pb-20 pt-8 sm:pt-12 px-6 sm:px-8 md:px-16 w-full z-10">
            <div className="flex flex-col items-start text-left gap-4 sm:gap-6 max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Desde 1970 no mercado de mecânica pesada.
              </h1>
              <p className="text-base sm:text-xl text-gray-200 max-w-2xl">
                Especialistas em linha diesel leve e pesada, e linha agrícola, com décadas de confiança e expertise.
              </p>
              <Button 
                size="default" 
                asChild
                style={{ backgroundColor: '#0252A7', color: '#FFFFFF' }}
                className="hover:opacity-90 transition-opacity text-sm sm:text-base"
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
      <section className="-mt-8 sm:-mt-6 pb-4">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative">
            {/* Envio Rápido */}
            <div className="text-center relative">
              <Truck className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base font-medium text-gray-700">Envio rápido</p>
              <p className="text-xs sm:text-sm text-gray-500">Para todo Brasil</p>
              {/* Divisória direita - mobile e desktop */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 sm:h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Compra Online */}
            <div className="text-center relative">
              <ShoppingBag className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base font-medium text-gray-700">Compre pelo site</p>
              <p className="text-xs sm:text-sm text-gray-500">E receba em casa</p>
              {/* Divisória direita - apenas desktop */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 sm:h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
            </div>

            {/* Qualidade e Garantia */}
            <div className="text-center relative">
              <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base font-medium text-gray-700">Qualidade e garantia</p>
              <p className="text-xs sm:text-sm text-gray-500">Produtos certificados</p>
              {/* Divisória direita - apenas desktop */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 sm:h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
            </div>

            {/* Atendimento Especializado */}
            <div className="text-center">
              <MessageCircle className="h-8 sm:h-10 w-8 sm:w-10 text-gray-600 mx-auto mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base font-medium text-gray-700">Atendimento especializado</p>
              <p className="text-xs sm:text-sm text-gray-500">Equipe especializada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mb-8 sm:mb-16 -mt-8 sm:-mt-6">
        <div className="bg-[#0252A7] py-8 sm:py-12 relative overflow-hidden">
          {/* Marca d'água */}
          <div className="absolute top-0 right-0 sm:right-1/4 flex items-center justify-center pointer-events-none h-full">
            <img 
              src="/images/peblogo.png" 
              alt="" 
              className="w-48 sm:w-96 h-48 sm:h-96 opacity-[0.08] sm:opacity-[0.12]"
            />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white whitespace-nowrap">
                Ampla variedade de peças, agora também <span className="text-white">online!</span>
              </h2>
              <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-3 sm:mb-4"></div>
              <p className="text-base sm:text-lg text-white/90">
                Navegue por categorias e compre direto pelo nosso e-commerce:
              </p>
            </div>
            <Button 
              size="default" 
              asChild
              style={{ backgroundColor: '#FFFFFF', color: '#0252A7' }}
              className="hover:opacity-90 transition-opacity self-start lg:self-auto"
            >
              <Link href="/loja">
                <span className="hidden sm:inline">Ver todos os produtos</span>
                <span className="sm:hidden">Ver produtos</span>
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          <Link href="/categoria/caminhonetes-a-diesel" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-32 sm:h-44">
              <img
                src="/images/caminhonetes-a-diesel.jpg"
                alt="Caminhonetes a Diesel"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-2 sm:px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-xs sm:text-base">Caminhonetes a Diesel</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md font-medium text-xs sm:text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>

          <Link href="/categoria/caminhoes-a-diesel" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-32 sm:h-44">
              <img
                src="/images/caminhoes-a-diesel.jpg"
                alt="Caminhões a Diesel"
                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-2 sm:px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-xs sm:text-base">Caminhões a Diesel</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md font-medium text-xs sm:text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>

          <Link href="/categoria/onibus" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-32 sm:h-44">
              <img
                src="/images/onibus.jpg"
                alt="Ônibus"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-2 sm:px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-xs sm:text-base">Ônibus</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md font-medium text-xs sm:text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>

          <Link href="/categoria/linha-agricola" className="group">
            <div className="relative overflow-hidden rounded-lg transition-all h-32 sm:h-44">
              <img
                src="/images/linha-agricola.png"
                alt="Linha Agrícola"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0252A7] from-20% to-transparent to-50%" />
              <div className="absolute bottom-0 left-0 right-0 py-1 px-2 sm:px-3 text-white z-10 text-center">
                <h3 className="font-semibold text-xs sm:text-base">Linha Agrícola</h3>
              </div>
              <div className="absolute inset-x-0 top-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-[#EF1923] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md font-medium text-xs sm:text-sm">Ver produtos</span>
              </div>
            </div>
          </Link>
        </div>
          </div>
        </div>
      </section>


      {/* Peças Raras */}
      <section className="container mx-auto px-3 sm:px-4 mb-8 sm:mb-16 -mt-12 sm:-mt-8">
        <div className="mb-6 sm:mb-10 text-center">
          <div className="relative inline-block">
            {/* Detalhes decorativos minimalistas - apenas superiores */}
            <div className="absolute -top-3 sm:-top-4 -left-8 sm:-left-10 w-12 sm:w-16 h-8 sm:h-10 pointer-events-none hidden sm:block">
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-l from-transparent to-[#EF1923] rounded-r-sm"></div>
              <div className="absolute top-0 left-0 h-full w-[1.5px] bg-gradient-to-b from-[#EF1923] to-transparent rounded-b-sm"></div>
            </div>
            <div className="absolute -top-3 sm:-top-4 -right-8 sm:-right-10 w-12 sm:w-16 h-8 sm:h-10 pointer-events-none hidden sm:block">
              <div className="absolute top-0 right-0 w-full h-[1.5px] bg-gradient-to-r from-transparent to-[#EF1923] rounded-l-sm"></div>
              <div className="absolute top-0 right-0 h-full w-[1.5px] bg-gradient-to-b from-[#EF1923] to-transparent rounded-b-sm"></div>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold text-[#151515] px-4 sm:px-20 py-2 sm:py-3">
              Peças raras que só se encontram aqui.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 px-4">
            Seleção especial para restauradores, colecionadores e apaixonados por clássicos.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-3 sm:px-0 sm:justify-center">
            {/* Produto 1 - Bloco Motor Mercedes 1113 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
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
                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-16rem)]">
                  <h3 className="font-semibold text-sm sm:text-base mb-1">Bloco Motor Mercedes 1113</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">Cód: MB-1113-BL</p>
                  <p className="text-lg sm:text-xl font-bold text-[#0252A7] mb-3 mt-auto">R$ 8.900,00</p>
                  <Button 
                    className="w-full bg-[#0252A7] hover:bg-[#0252A7]/90 text-white cursor-pointer mb-2 text-xs sm:text-sm"
                    size="sm"
                  >
                    Comprar agora
                  </Button>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer text-xs sm:text-sm"
                    size="sm"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Bloco Motor Mercedes 1113 (Cód: MB-1113-BL)" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-3 sm:h-4 w-3 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Comprar via WhatsApp</span>
                      <span className="sm:hidden">WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 2 - Cabeçote FNM D-11000 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
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
                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-16rem)]">
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
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 3 - Câmbio Scania L111 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
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
                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-16rem)]">
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
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 4 - Radiador Chevrolet C60 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
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
                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-16rem)]">
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
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 5 - Carburador Ford F350 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
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
                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-16rem)]">
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
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Mecânicos Section */}
      <section className="container mx-auto px-3 sm:px-4 mb-8 sm:mb-16 -mt-12 sm:-mt-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0252A7]">
          {/* Logo timbrada */}
          <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
            <img 
              src="/images/peblogo.png" 
              alt="" 
              className="w-64 sm:w-[500px] h-64 sm:h-[500px] opacity-10 ml-10 sm:ml-20"
            />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2">
            {/* Conteúdo à esquerda */}
            <div className="px-6 sm:px-8 md:px-12 py-12 sm:py-16 flex items-center">
              <div className="w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Uma oficina completa<br />
                  para qualquer desafio.
                </h2>
                <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-4"></div>
                <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
                  De veículos leves a pesados, agrícolas ou rodoviários, oferecemos serviços especializados com estrutura, peças e equipe técnica capacitada.
                </p>
                
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-[#EF1923] font-medium text-sm">|</span>
                    <span className="text-white">Caminhonetes, caminhões e ônibus;</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#EF1923] font-medium text-sm">|</span>
                    <span className="text-white">Máquinas agrícolas e tratores;</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#EF1923] font-medium text-sm">|</span>
                    <span className="text-white">Sistemas de freio, câmbio, motor;</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#EF1923] font-medium text-sm">|</span>
                    <span className="text-white">Revisões e manutenção preventiva;</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#EF1923] font-medium text-sm">|</span>
                    <span className="text-white">Peças com garantia e procedência;</span>
                  </li>
                </ul>
                
                <div className="flex items-center gap-6">
                  <Button 
                    size="sm" 
                    className="bg-white text-[#0252A7] hover:bg-gray-100 inline-flex items-center gap-2 text-sm px-4 py-2 w-auto"
                    asChild
                  >
                    <a href="https://wa.me/555433441455?text=Olá! Gostaria de falar com a oficina." target="_blank" rel="noopener noreferrer">
                      Fale com a Oficina
                    </a>
                  </Button>
                  
                  <Link 
                    href="/sobre" 
                    className="text-white/80 hover:text-white text-sm underline underline-offset-4 transition-colors"
                  >
                    Conheça a história da Mecânica Spagnol
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Foto do escritório à direita */}
            <div className="relative h-full min-h-[400px] md:min-h-[500px]">
              <Image
                src="/images/images-mec/foto escritorio.jpeg"
                alt="Escritório Mecânica Spagnol"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-3 sm:px-4">
        <div className="bg-primary rounded-lg p-6 sm:p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Precisa de ajuda para encontrar a peça certa?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="default" variant="secondary" asChild className="w-full sm:w-auto">
              <Link href="/contato">
                Falar com Especialista
              </Link>
            </Button>
            <Button size="default" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto" asChild>
              <a href="https://wa.me/555433441455" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}