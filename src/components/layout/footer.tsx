import Link from 'next/link';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { footerNav } from '@/lib/config/navigation';
import { siteConfig } from '@/lib/config/site';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {siteConfig.description}
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Endereço:</strong><br />
                {siteConfig.company.address.street}, {siteConfig.company.address.number}<br />
                {siteConfig.company.address.neighborhood} - {siteConfig.company.address.city}/{siteConfig.company.address.state}<br />
                CEP: {siteConfig.company.address.cep}
              </p>
              
              <p>
                <strong>Telefone:</strong> {siteConfig.company.phone}
              </p>
              
              <p>
                <strong>WhatsApp:</strong> {siteConfig.company.whatsapp}
              </p>
              
              <p>
                <strong>Email:</strong> {siteConfig.company.email}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hours */}
        <div className="mt-8 p-4 bg-background rounded-lg">
          <h4 className="font-semibold mb-2">Horário de Funcionamento</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Segunda a Sexta: {siteConfig.company.hours.weekdays}</p>
            <p>Sábado: {siteConfig.company.hours.saturday}</p>
            <p>Domingo: {siteConfig.company.hours.sunday}</p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            CNPJ: {siteConfig.company.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}