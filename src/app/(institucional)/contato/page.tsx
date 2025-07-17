'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/lib/config/site';
import { contactSchema, ContactFormData } from '@/types/forms';

// export const metadata: Metadata = {
//   title: 'Contato',
//   description: 'Entre em contato com a Mecânica Spagnol. Estamos prontos para atender você.',
// };

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    content: siteConfig.company.phone,
    description: 'Segunda a Sexta: 8h às 18h',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: siteConfig.company.whatsapp,
    description: 'Atendimento rápido',
    link: siteConfig.social.whatsapp,
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: siteConfig.company.email,
    description: 'Resposta em até 24h',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: `${siteConfig.company.address.street}, ${siteConfig.company.address.number}`,
    description: `${siteConfig.company.address.neighborhood} - ${siteConfig.company.address.city}/${siteConfig.company.address.state}`,
  },
];

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    
    // TODO: Implementar envio real do formulário
    console.log('Dados do formulário:', data);
    
    // Por enquanto, apenas simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Mensagem enviada com sucesso!', {
      description: 'Entraremos em contato em breve.',
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Entre em Contato
        </h1>
        <p className="text-xl text-muted-foreground">
          Estamos aqui para ajudar você a encontrar as peças certas para seu veículo
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Formulário de Contato */}
        <Card>
          <CardHeader>
            <CardTitle>Envie sua mensagem</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo e entraremos em contato o mais breve possível
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone (opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Sobre o que você quer falar?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Digite sua mensagem aqui..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Informações de Contato */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Horário de Funcionamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Horário de Funcionamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Segunda a Sexta:</dt>
                  <dd className="font-medium">{siteConfig.company.hours.weekdays}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Sábado:</dt>
                  <dd className="font-medium">{siteConfig.company.hours.saturday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Domingo:</dt>
                  <dd className="font-medium">{siteConfig.company.hours.sunday}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mapa */}
      <Card className="mt-8 max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Nossa Localização</CardTitle>
          <CardDescription>
            Visite nossa loja física e conheça nosso showroom
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">
              {/* TODO: Adicionar mapa real do Google Maps ou similar */}
              Mapa em breve
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}