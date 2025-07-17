// Configurações do site - Mecânica Spagnol

export const siteConfig = {
  name: 'Mecânica Spagnol',
  description: 'Peças e acessórios para caminhões, ônibus e máquinas agrícolas',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  // Informações da empresa
  company: {
    name: 'Mecânica Spagnol',
    cnpj: '00.000.000/0001-00',
    phone: '(00) 0000-0000',
    whatsapp: '(00) 90000-0000',
    email: 'contato@mecanicaspagnol.com.br',
    address: {
      street: 'Rua Exemplo',
      number: '123',
      neighborhood: 'Centro',
      city: 'Cidade',
      state: 'SP',
      cep: '00000-000',
    },
    hours: {
      weekdays: '08:00 às 18:00',
      saturday: '08:00 às 12:00',
      sunday: 'Fechado',
    },
  },
  
  // Redes sociais
  social: {
    facebook: 'https://facebook.com/mecanicaspagnol',
    instagram: 'https://instagram.com/mecanicaspagnol',
    whatsapp: 'https://wa.me/5500000000000',
  },
  
  // SEO padrão
  seo: {
    title: 'Mecânica Spagnol - Peças para Caminhões e Ônibus',
    titleTemplate: '%s | Mecânica Spagnol',
    description: 'Especializada em peças e acessórios para caminhonetes a diesel, caminhões pesados, ônibus e máquinas agrícolas.',
    keywords: ['mecânica', 'peças', 'caminhão', 'ônibus', 'diesel', 'máquinas agrícolas'],
  },
};