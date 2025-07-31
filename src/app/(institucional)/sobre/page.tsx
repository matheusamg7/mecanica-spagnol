'use client';

import { useEffect, useState, useRef } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Users, Target, Award, Wrench, Clock, Shield, Truck } from 'lucide-react';

const timelineData = [
  {
    year: '1970',
    title: 'As origens do legado',
    description: 'Com a dissolução da antiga sociedade, nasce o embrião da Mecânica Agrícola Spagnol. Fundada por João Spagnol, a oficina deu seus primeiros passos em outubro daquele ano.',
    image: '/images/imagens-historia/1970.jpeg',
  },
  {
    year: '1976',
    title: 'Estrutura e crescimento',
    description: 'A empresa amplia sua atuação, estrutura física e carteira de clientes. A marca Spagnol começa a se destacar pelo atendimento técnico e confiável.',
    image: '/images/imagens-historia/1976.jpeg',
  },
  {
    year: '1983',
    title: 'Fundação oficial da empresa',
    description: 'É fundada oficialmente a Mecânica Agrícola Spagnol LTDA. João Spagnol lidera o time ao lado de Mauro Spagnol, João Carlos Spagnol e Enilde Spagnol.',
    image: '/images/imagens-historia/1983.jpeg',
  },
  {
    year: '1999',
    title: 'Continuidade familiar e inovação',
    description: 'A nova geração assume: Tiago e Mauren Spagnol preservam o legado e modernizam a operação, mantendo a excelência como prioridade.',
    image: '/images/imagens-historia/1999.jpeg',
  },
  {
    year: '2023',
    title: 'Referência na região',
    description: 'Com mais de 50 anos de história, a Mecânica Spagnol é reconhecida como referência regional em mecânica pesada e manutenção de linha agrícola.',
    image: '/images/imagens-historia/2023.jpeg',
  },
];

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
    description: 'Mais de 50 anos de tradição no mercado de mecânica pesada',
  },
];

const services = [
  {
    icon: Wrench,
    title: 'Mecânica Pesada',
    description: 'Especialistas em manutenção e reparo de caminhões, ônibus e máquinas agrícolas',
  },
  {
    icon: Truck,
    title: 'Peças Genuínas',
    description: 'Estoque completo de peças originais para linha pesada e agrícola',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description: 'Diagnóstico rápido e orçamento transparente para sua tranquilidade',
  },
  {
    icon: Shield,
    title: 'Garantia de Qualidade',
    description: 'Todas as peças e serviços com garantia e procedência comprovada',
  },
];

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={ref}>+{count}</span>;
};

export default function SobrePage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="container mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[350px] sm:min-h-[500px] flex items-end">
          <Image
            src="/images/images-mec/banner-mecanica-fundo.jpeg"
            alt="Mecânica Spagnol"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-background rounded-t-xl p-3 sm:p-4 max-w-md mx-auto"
            >
              <h1 className="text-lg sm:text-xl font-bold text-[#0455A2] text-center">
                Conheça melhor a Mecânica Spagnol
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20 items-center mb-20">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A <span className="text-[#0455A2] font-semibold">Mecânica Spagnol</span> é uma empresa familiar que há mais de cinco décadas se dedica 
                  ao segmento de mecânica pesada e peças agrícolas. Nossa trajetória é marcada pela 
                  excelência no atendimento, qualidade dos produtos e o compromisso com cada cliente 
                  que confia em nosso trabalho.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Especialistas em manutenção e reparo de caminhões, ônibus e máquinas agrícolas, 
                  oferecemos um estoque completo de peças originais para linha pesada e agrícola. 
                  Com diagnóstico rápido e orçamento transparente, garantimos todas as peças e 
                  serviços com procedência comprovada.
                </p>
              </motion.div>

              {/* Numbers Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid gap-8 justify-self-end w-full"
              >
                <Card className="bg-[#0455A2] text-white p-6 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-3xl font-bold mb-2">
                      <CountUp end={50} duration={2000} /> anos
                    </h3>
                    <p className="text-white/90">de experiência no mercado</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#0455A2] text-white p-6 text-center">
                  <CardContent className="p-0">
                    <h3 className="text-3xl font-bold mb-2">
                      <CountUp end={35} duration={2000} /> mil
                    </h3>
                    <p className="text-white/90">peças em nosso estoque</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid gap-12 md:grid-cols-3 mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0455A2]"></div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#0455A2] mb-4">Missão</h3>
                  <p className="text-muted-foreground">
                    Fornecer soluções completas em mecânica pesada e peças agrícolas, 
                    com excelência no atendimento e preços competitivos, contribuindo 
                    para o sucesso de nossos clientes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0455A2]"></div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#0455A2] mb-4">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser reconhecida como a empresa líder em mecânica pesada e peças 
                    agrícolas na região, expandindo nossa atuação com a mesma qualidade 
                    e compromisso que nos trouxeram até aqui.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0455A2]"></div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#0455A2] mb-4">Valores</h3>
                  <p className="text-muted-foreground">
                    Honestidade, transparência, qualidade, compromisso com prazos, 
                    respeito aos clientes e colaboradores, e responsabilidade 
                    socioambiental.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossa História</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de cinco décadas construindo uma história de sucesso e confiança
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 items-center mb-20 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="bg-[#0455A2] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold">{item.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={item.image}
                        alt={`Mecânica Spagnol - ${item.year}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Connector Line - only between items */}
                {index < timelineData.length - 1 && (
                  <div className={`absolute top-32 ${index % 2 === 0 ? 'left-16' : 'right-16'} hidden md:block`}>
                    <div className="w-0.5 h-40 bg-[#0455A2]/20"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}