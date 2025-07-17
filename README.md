# 🚛 Mecânica Spagnol - E-commerce de Peças para Veículos Pesados

Sistema completo de e-commerce desenvolvido com Next.js 15.4.1, Supabase e Tailwind CSS para venda de peças automotivas especializadas em veículos pesados.

## 📋 Características

- 🛒 **E-commerce Completo**: Sistema de carrinho, checkout e gestão de pedidos
- 🔐 **Autenticação Segura**: Login/cadastro com Supabase Auth
- 👨‍💼 **Painel Administrativo**: CRUD de produtos, gestão de pedidos e dashboard
- 📱 **Totalmente Responsivo**: Interface adaptada para todos os dispositivos
- 🚀 **Performance Otimizada**: Next.js App Router com ISR e SSG
- 🎨 **UI Moderna**: Tailwind CSS + shadcn/ui
- 🔒 **Segurança**: RLS (Row Level Security) em todas as tabelas

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15.4.1 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Estilização**: Tailwind CSS + shadcn/ui
- **Estado Global**: Zustand 5.0.6
- **Validação**: Zod + React Hook Form
- **Autenticação**: Supabase Auth
- **Upload de Imagens**: Supabase Storage + Dropzone
- **Deploy**: Vercel

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- Conta no [Supabase](https://supabase.com)
- Git

### 1. Clone o repositório

```bash
git clone [url-do-repositorio]
cd mecanica-spagnol
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Supabase

1. Crie um novo projeto no [Supabase](https://supabase.com)
2. Anote as credenciais:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY` 
   - `SUPABASE_SERVICE_ROLE_KEY`

### 4. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_service_key_aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Execute as migrações do banco

1. Acesse o SQL Editor no painel do Supabase
2. Execute o conteúdo do arquivo `supabase/migrations/001_initial_schema.sql`
3. Configure o Storage Bucket seguindo as instruções em `supabase/README.md`

### 6. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── (auth)/            # Páginas de autenticação
│   ├── (shop)/            # Páginas do e-commerce
│   ├── (institucional)/   # Páginas institucionais
│   ├── (admin)/           # Painel administrativo
│   └── (user)/            # Área do cliente
├── components/            # Componentes React
│   ├── layout/           # Header, Footer, etc
│   ├── shop/             # Componentes da loja
│   ├── admin/            # Componentes admin
│   └── ui/               # shadcn/ui components
├── lib/                   # Utilitários e configurações
│   ├── supabase/         # Clients do Supabase
│   ├── config/           # Configurações do site
│   └── validations/      # Schemas Zod
├── types/                # TypeScript types
└── store/                # Zustand stores
```

## 🔑 Funcionalidades Principais

### Para Clientes
- ✅ Navegação por categorias de produtos
- ✅ Busca e filtros avançados
- ✅ Carrinho de compras persistente
- ✅ Checkout com cálculo de frete
- ✅ Área do cliente com histórico de pedidos
- ✅ Sistema de autenticação completo

### Para Administradores
- ✅ Dashboard com métricas
- ✅ CRUD completo de produtos
- ✅ Upload de múltiplas imagens
- ✅ Gestão de pedidos
- ✅ Atualização de status
- ✅ Relatórios básicos

## 🗂️ Categorias de Produtos

1. **Caminhonetes a Diesel**: Peças e acessórios para caminhonetes
2. **Caminhões Pesados**: Componentes para caminhões de grande porte
3. **Ônibus Rodoviários e Urbanos**: Peças para transporte coletivo
4. **Máquinas Agrícolas e Tratores**: Componentes para equipamentos agrícolas

## 🔒 Segurança

- **RLS (Row Level Security)** ativado em todas as tabelas
- **Políticas de acesso** diferenciadas por role (customer/admin)
- **Validação de dados** com Zod em todos os formulários
- **Sanitização** automática de inputs
- **Middleware de proteção** de rotas

## 📱 Páginas Disponíveis

### Públicas
- `/` - Home
- `/sobre` - Sobre a empresa
- `/contato` - Formulário de contato
- `/loja` - Lista de produtos
- `/produtos/[slug]` - Detalhes do produto
- `/categoria/[categoria]` - Produtos por categoria

### Autenticadas
- `/login` - Login
- `/cadastro` - Criar conta
- `/minha-conta` - Dados pessoais
- `/meus-pedidos` - Histórico de pedidos
- `/carrinho` - Carrinho de compras
- `/checkout` - Finalizar compra

### Administrativas
- `/admin/dashboard` - Painel principal
- `/admin/produtos` - Gestão de produtos
- `/admin/pedidos` - Gestão de pedidos

## 🚀 Deploy

### Deploy na Vercel

1. Faça push do código para o GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático a cada push

### Variáveis de Produção

Adicione no painel da Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL` (domínio de produção)

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run start      # Executar build
npm run lint       # Verificar código
npm run type-check # Verificar tipos
```

### Convenções de Código

- **TypeScript** com strict mode
- **Componentes** funcionais com hooks
- **Nomenclatura**: PascalCase (componentes), camelCase (funções)
- **Commits** em português BR

## 🐛 Troubleshooting

### Erro de conexão com Supabase
- Verifique as variáveis de ambiente
- Confirme se o projeto está ativo no Supabase

### Erro ao executar migrações
- Verifique se está usando o SQL Editor correto
- Confirme que o RLS está ativado

### Upload de imagens não funciona
- Verifique se o bucket "products" foi criado
- Confirme as políticas de acesso do Storage

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@mecanicaspagnol.com.br
- WhatsApp: (00) 90000-0000

## 📄 Licença

Este projeto é propriedade privada da Mecânica Spagnol. Todos os direitos reservados.

---

Desenvolvido com ❤️ para Mecânica Spagnol