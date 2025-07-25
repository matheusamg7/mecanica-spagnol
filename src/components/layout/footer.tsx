import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101010] text-white">
      <div>
        {/* Top accent */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#0252A7] to-transparent"></div>
        
        <div className="container mx-auto px-4 pt-16 pb-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Company Info - Spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Image
                  src="/images/logo-spagnol.png"
                  alt="Spagnol Mecânica Agrícola"
                  width={200}
                  height={70}
                  className="h-16 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Há mais de 50 anos no mercado, somos referência em mecânica pesada, 
                peças e serviços para linha diesel leve e pesada.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-2">
                <a 
                  href={siteConfig.social.facebook} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0252A7] hover:border-[#0252A7] transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href={siteConfig.social.instagram} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0252A7] hover:border-[#0252A7] transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href={siteConfig.social.whatsapp} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Acesso Rápido</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/sobre" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Categorias</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/categoria/caminhonetes-a-diesel" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm">
                    Caminhonetes
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/caminhoes-a-diesel" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm">
                    Caminhões
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/onibus" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm">
                    Ônibus
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/linha-agricola" className="text-gray-400 hover:text-[#0252A7] transition-colors text-sm">
                    Linha Agrícola
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Hours - Spans 4 columns */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Entre em Contato</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#0252A7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0252A7]/20 transition-colors">
                    <MapPin className="h-4 w-4 text-[#0252A7]" />
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-300">Av. Dom Pedro II, 120 - Centro</p>
                    <p className="text-gray-400">Tapejara/RS - CEP: 99950-000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#0252A7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0252A7]/20 transition-colors">
                    <Phone className="h-4 w-4 text-[#0252A7]" />
                  </div>
                  <a href="tel:+555433441455" className="text-gray-300 hover:text-[#0252A7] transition-colors text-sm">
                    (54) 3344-1455
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#0252A7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0252A7]/20 transition-colors">
                    <Mail className="h-4 w-4 text-[#0252A7]" />
                  </div>
                  <a href="mailto:contato@spagnol.com.br" className="text-gray-300 hover:text-[#0252A7] transition-colors text-sm">
                    contato@spagnol.com.br
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#0252A7]" />
                  <h5 className="font-medium text-sm">Horário de Atendimento</h5>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Segunda a Sexta</span>
                    <span className="text-gray-300">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sábado</span>
                    <span className="text-gray-300">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Domingo</span>
                    <span className="text-gray-300">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm">
                  © {currentYear} Spagnol Mecânica Agrícola Ltda. Todos os direitos reservados.
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  CNPJ: 89.319.065/0001-08
                </p>
              </div>
              
              {/* Amage Credit */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-xs">Desenvolvido por</span>
                <a 
                  href="https://amage.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/images-mec/amage-white.svg"
                    alt="Amage"
                    width={70}
                    height={25}
                    className="h-5 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}