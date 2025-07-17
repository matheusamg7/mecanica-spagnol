import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Users, Target, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história e os valores da Mecânica Spagnol, especializada em peças para veículos pesados há mais de 20 anos.',
};

const values = [
  {
    icon: CheckCircle2,
    title: 'Qualidade',
    description: 'Trabalhamos apenas com peças originais e de primeira linha',
  },
  {
    icon: Users,
    title: 'Atendimento',
    description: 'Equipe técnica especializada para melhor atender nossos clientes',
  },
  {
    icon: Target,
    title: 'Compromisso',
    description: 'Entrega rápida e pontual em todo o território nacional',
  },
  {
    icon: Award,
    title: 'Experiência',
    description: 'Mais de 20 anos de tradição no mercado de peças automotivas',
  },
];

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sobre a Mecânica Spagnol
        </h1>
        <p className="text-xl text-muted-foreground">
          Tradição, qualidade e compromisso com nossos clientes desde 2000
        </p>
      </div>

      {/* História */}
      <section className="max-w-4xl mx-auto mb-16">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Mecânica Spagnol nasceu em 2000, fruto do sonho empreendedor da família Spagnol, 
                que já atuava no ramo de mecânica pesada há mais de uma década. Com a experiência 
                adquirida ao longo dos anos, identificamos a necessidade de oferecer não apenas 
                serviços mecânicos, mas também peças de qualidade para nossos clientes.
              </p>
              <p>
                Iniciamos nossas atividades em uma pequena oficina no centro da cidade, focados 
                em atender caminhoneiros e empresas de transporte. Com dedicação, honestidade e 
                muito trabalho, conquistamos a confiança de nossos clientes e expandimos nossos 
                negócios.
              </p>
              <p>
                Hoje, somos referência em peças para veículos pesados em toda a região, atendendo 
                caminhonetes a diesel, caminhões pesados, ônibus rodoviários e urbanos, além de 
                máquinas agrícolas e tratores. Nossa loja conta com um amplo estoque de peças 
                originais e de primeira linha, garantindo qualidade e segurança para nossos clientes.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="max-w-4xl mx-auto mb-16 grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Missão</h3>
            <p className="text-muted-foreground">
              Fornecer peças automotivas de qualidade superior, com atendimento especializado 
              e preços justos, contribuindo para a segurança e eficiência dos veículos de 
              nossos clientes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Visão</h3>
            <p className="text-muted-foreground">
              Ser reconhecida como a melhor empresa de peças para veículos pesados do Brasil, 
              expandindo nossa atuação nacional e mantendo a excelência no atendimento.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Valores</h3>
            <p className="text-muted-foreground">
              Honestidade, transparência, qualidade, compromisso com prazos, respeito aos 
              clientes e colaboradores, e responsabilidade social e ambiental.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Nossos Valores em Detalhes */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que nos move todos os dias
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estrutura */}
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Nossa Estrutura</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Loja Física</h3>
                <p className="text-muted-foreground mb-4">
                  Amplo showroom com mais de 500m² dedicados à exposição e estoque de peças, 
                  facilitando a visualização e escolha dos produtos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Equipe Especializada</h3>
                <p className="text-muted-foreground mb-4">
                  Contamos com mais de 20 colaboradores treinados, incluindo mecânicos e 
                  especialistas técnicos prontos para orientar na escolha das peças.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Estoque Completo</h3>
                <p className="text-muted-foreground mb-4">
                  Mais de 10.000 itens em estoque, garantindo disponibilidade imediata das 
                  principais peças para veículos pesados.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Logística Eficiente</h3>
                <p className="text-muted-foreground mb-4">
                  Sistema de entrega próprio e parcerias com as principais transportadoras, 
                  garantindo agilidade na entrega em todo o Brasil.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}