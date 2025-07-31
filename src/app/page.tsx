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
    <div className="flex flex-col gap-8 sm:gap-16">
      {/* Hero Banner Section */}
      <section className="container mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        <div 
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[350px] sm:min-h-[500px] flex items-end sm:items-end bg-white sm:bg-transparent"
          style={{
            backgroundImage: 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Background image for desktop only */}
          <div 
            className="hidden sm:block absolute inset-0 -z-10"
            style={{
              backgroundImage: 'url(/images/Scania-R450-Plus-1200x640.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Overlay escuro para melhor legibilidade do texto - desktop only */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative pb-12 sm:pb-20 pt-8 sm:pt-12 px-6 sm:px-8 md:px-16 w-full z-10">
            <div className="flex flex-col items-start text-left gap-4 sm:gap-6 max-w-4xl">
              <h1 className="text-3xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-[#151515] sm:text-white">
                Desde 1970 no mercado de mecânica pesada.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 sm:text-gray-200 max-w-2xl">
                Especialistas em linha diesel leve e pesada, e linha agrícola, com décadas de confiança e expertise.
              </p>
              <Button 
                size="lg" 
                asChild
                style={{ backgroundColor: '#0252A7', color: '#FFFFFF' }}
                className="hover:opacity-90 transition-opacity text-base sm:text-lg px-8 py-6"
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
          <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 sm:gap-8">
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
                className="hover:opacity-90 transition-opacity self-start lg:self-auto hidden lg:inline-flex"
              >
                <Link href="/loja">
                  Ver todos os produtos
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
              </Button>
            </div>
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
                <h3 className="font-semibold text-sm sm:text-lg">Caminhonetes a Diesel</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-[#0252A7] text-sm sm:text-base font-bold">Ver produtos</span>
                </div>
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
                <h3 className="font-semibold text-sm sm:text-lg">Caminhões a Diesel</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-[#0252A7] text-sm sm:text-base font-bold">Ver produtos</span>
                </div>
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
                <h3 className="font-semibold text-sm sm:text-lg">Ônibus</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-[#0252A7] text-sm sm:text-base font-bold">Ver produtos</span>
                </div>
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
                <h3 className="font-semibold text-sm sm:text-lg">Linha Agrícola</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-[#0252A7] text-sm sm:text-base font-bold">Ver produtos</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
          
          {/* Botão mobile - abaixo dos cards */}
          <div className="flex justify-center mt-6 lg:hidden">
            <Button 
              size="default" 
              asChild
              style={{ backgroundColor: '#FFFFFF', color: '#0252A7' }}
              className="hover:opacity-90 transition-opacity"
            >
              <Link href="/loja">
                Ver produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
          <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Seleção especial para restauradores, colecionadores e apaixonados por clássicos.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-3 sm:px-0 sm:justify-center">
            {/* Produto 1 - Bloco Motor Mercedes 1113 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-[#121212] relative overflow-hidden flex items-center justify-center">
                  {/* Logo timbrada de fundo */}
                  <img 
                    src="/images/peblogo.png" 
                    alt="" 
                    className="w-32 h-32 opacity-10"
                  />
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  {/* <img
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop"
                    alt="Bloco Motor Mercedes 1113"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  /> */}
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
                    <a href="https://wa.me/555433441455?text=Olá! Tenho interesse na peça: Bloco Motor Mercedes 1113 (Cód: MB-1113-BL)" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <svg className="h-4 sm:h-5 w-4 sm:w-5 mr-1 sm:mr-2 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
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
                <div className="aspect-[4/3] bg-[#121212] relative overflow-hidden flex items-center justify-center">
                  {/* Logo timbrada de fundo */}
                  <img 
                    src="/images/peblogo.png" 
                    alt="" 
                    className="w-32 h-32 opacity-10"
                  />
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  {/* <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop"
                    alt="Cabeçote FNM D-11000"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  /> */}
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
                      <svg className="h-5 w-5 mr-2 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 3 - Câmbio Scania L111 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-[#121212] relative overflow-hidden flex items-center justify-center">
                  {/* Logo timbrada de fundo */}
                  <img 
                    src="/images/peblogo.png" 
                    alt="" 
                    className="w-32 h-32 opacity-10"
                  />
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  {/* <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop"
                    alt="Câmbio Scania L111"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  /> */}
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
                      <svg className="h-5 w-5 mr-2 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 4 - Radiador Chevrolet C60 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-[#121212] relative overflow-hidden flex items-center justify-center">
                  {/* Logo timbrada de fundo */}
                  <img 
                    src="/images/peblogo.png" 
                    alt="" 
                    className="w-32 h-32 opacity-10"
                  />
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  {/* <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop"
                    alt="Radiador Chevrolet C60"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  /> */}
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
                      <svg className="h-5 w-5 mr-2 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Comprar via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Produto 5 - Carburador Ford F350 */}
            <div className="flex-none w-56 sm:w-64">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden h-full group/card shadow-md shadow-gray-300/50">
                <div className="aspect-[4/3] bg-[#121212] relative overflow-hidden flex items-center justify-center">
                  {/* Logo timbrada de fundo */}
                  <img 
                    src="/images/peblogo.png" 
                    alt="" 
                    className="w-32 h-32 opacity-10"
                  />
                  <div className="absolute top-0 right-0 z-10">
                    <div className="relative">
                      <div className="bg-[#EF1923] text-white px-4 py-1 text-xs font-medium" 
                           style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'}}>
                        Peça Rara
                      </div>
                    </div>
                  </div>
                  {/* <img
                    src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=400&h=400&fit=crop"
                    alt="Carburador Ford F350"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                  /> */}
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
                      <svg className="h-5 w-5 mr-2 fill-white" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
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
                  De caminhonetes, veículos agrícolas a pesados rodoviários, oferecemos serviços especializados com estrutura, peças e equipe técnica capacitada.
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
                    <span className="text-white">Sistemas de freio, motor e câmbio;</span>
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

      {/* Blog Section */}
      <section className="bg-[#0a0a0a] py-12 sm:py-16 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#EF1923]/10 to-[#EF1923]/20" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Blog Spagnol
            </h2>
            <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-3"></div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Dicas, curiosidades e informações importantes sobre manutenção e cuidados com seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Post 1 */}
            <article className="bg-[#242424] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-32 sm:h-36 overflow-hidden">
                <img src="/images/img-blog/cheklist-blog1.jpg" alt="Manutenção de máquinas agrícolas" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>15 de Janeiro, 2025</span>
                  <span>•</span>
                  <span>Manutenção</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2">
                  A importância da manutenção preventiva em máquinas agrícolas
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
                  Descubra como a manutenção regular pode aumentar a vida útil do seu equipamento e evitar paradas inesperadas durante a safra.
                </p>
                <div>
                  <Link 
                    href="/blog/checklist-manutencao-preventiva" 
                    className="text-white hover:text-gray-200 text-sm font-medium inline-flex items-center gap-1 group"
                  >
                    Ler mais 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-[#242424] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-32 sm:h-36 overflow-hidden">
                <img src="/images/img-blog/freio-blog2.png" alt="Sistema de freios" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>10 de Janeiro, 2025</span>
                  <span>•</span>
                  <span>Dicas</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2">
                  5 sinais de que seu caminhão precisa de revisão no sistema de freios
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
                  Aprenda a identificar os principais sinais de desgaste no sistema de freios e garanta sua segurança nas estradas.
                </p>
                <div>
                  <Link 
                    href="/blog/sistema-freios-guia-completo" 
                    className="text-white hover:text-gray-200 text-sm font-medium inline-flex items-center gap-1 group"
                  >
                    Ler mais 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-[#242424] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-32 sm:h-36 overflow-hidden">
                <img src="/images/img-blog/motordiesel-blog3.jpg" alt="Motor diesel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>5 de Janeiro, 2025</span>
                  <span>•</span>
                  <span>Tecnologia</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2">
                  Novas tecnologias em motores diesel: economia e performance
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
                  Conheça as últimas inovações em motores diesel que estão revolucionando o mercado de veículos pesados.
                </p>
                <div>
                  <Link 
                    href="/blog/tecnologia-motores-diesel" 
                    className="text-white hover:text-gray-200 text-sm font-medium inline-flex items-center gap-1 group"
                  >
                    Ler mais 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              style={{ backgroundColor: '#EF1923', color: '#FFFFFF' }}
              className="hover:opacity-90 transition-opacity"
            >
              <Link href="/blog">
                Ver todos os artigos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA e Mapa Section */}
      <section className="container mx-auto px-3 sm:px-4 mt-8 sm:mt-16 mb-8 sm:mb-16">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* CTA Card */}
          <div className="relative rounded-lg overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(/images/estoque.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-black/90 z-10" />
            <div className="relative z-20 p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center h-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Encontre o que precisa com quem entende do assunto
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-lg">
              Peças, serviços e atendimento técnico num só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              <Button 
                size="default" 
                asChild 
                style={{ backgroundColor: '#FFFFFF', color: '#0252A7' }}
                className="hover:opacity-90 transition-opacity"
              >
                <Link href="/loja">
                  Ver todos os produtos
                </Link>
              </Button>
              <Button 
                size="default" 
                asChild
                style={{ backgroundColor: '#0252A7', color: '#FFFFFF' }}
                className="hover:opacity-90 transition-opacity" 
              >
                <a href="https://wa.me/555433441455?text=Olá! Gostaria de falar com a oficina." target="_blank" rel="noopener noreferrer">
                  Falar com a Oficina
                </a>
              </Button>
            </div>
            </div>
          </div>
          
          {/* Mapa Card */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8095832451455!2d-52.01697068491931!3d-28.605674282423974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd3e7b0e6e7a85%3A0x9e5f5f1c5d8b2a3b!2sAv.%20Dom%20Pedro%20II%2C%20120%20-%20Centro%2C%20Tapejara%20-%20RS%2C%2099950-000!5e0!3m2!1spt-BR!2sbr!4v1625151234567"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}