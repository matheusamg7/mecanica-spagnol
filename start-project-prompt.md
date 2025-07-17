# 📋 Resumo do Projeto Configurado

## Decisões Técnicas:
- Stack: Next.js 15.4.1
- Tipo: E-commerce + Institucional (Mecânica Spagnol)
- Banco: Supabase
- Estrutura: Com src/
- Roteamento: Dinâmico
- Estilização: Tailwind CSS + shadcn/ui
- Auth: Supabase Auth
- Features: Carrinho de compras, checkout/pagamento, painel admin (CRUD produtos, gestão pedidos/pagamentos), sistema de 4 categorias
- Navegação: Home, Sobre/Quem Somos, Contato, Loja, ícone carrinho, ícone minha conta
- Idioma: Português BR apenas
- Pagamento: Ainda não definido (preparar estrutura modular)
- Imagens: Supabase Storage para produtos (com componente Dropzone) + local/public para assets
- Estado: Zustand
- Validação: Zod + React Hook Form
- Deploy: Vercel
- Extras: Nenhum

---

# 🎯 PROMPT PARA CLAUDE CODE - INSTRUÇÕES COMPLETAS

## ⚠️ IMPORTANTE: PROCESSO EM 3 FASES

### FASE 1: PLAN MODE
Use o Plan Mode do Claude Code para criar uma documentação técnica COMPLETA do projeto antes de implementar qualquer código.

### FASE 2: IMPLEMENTAÇÃO
Implemente o projeto seguindo exatamente a documentação criada.

### FASE 3: REVISÃO
Revise TODO o código criado, especialmente scripts de banco de dados, verificando segurança e otimizações.

---

# Projeto: Mecânica Spagnol - E-commerce + Site Institucional

Crie um projeto e-commerce completo com páginas institucionais seguindo RIGOROSAMENTE estas especificações:

## 🛠️ Stack Técnica Completa

| Categoria | Tecnologia | Versão | Finalidade |
|-----------|------------|--------|------------|
| Framework | Next.js | 15.4.1 | App Router, RSC, Turbopack |
| Database | Supabase | Latest | PostgreSQL + Auth + Storage |
| Styling | Tailwind CSS + shadcn/ui | Latest | UI moderna e componentes |
| Auth | Supabase Auth | Latest | Autenticação integrada |
| State | Zustand | 5.0.6 | Estado global (carrinho, user) |
| Forms | Zod + React Hook Form | Latest | Validação type-safe |
| Deploy | Vercel | - | Hosting otimizado para Next.js |

## 📁 Estrutura de Pastas

Implemente a seguinte estrutura com src/:

```
mecanica-spagnol/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   ├── cadastro/
│   │   │   └── layout.tsx
│   │   ├── (shop)/
│   │   │   ├── loja/
│   │   │   │   └── page.tsx
│   │   │   ├── produtos/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── categoria/
│   │   │   │   └── [categoria]/
│   │   │   │       └── page.tsx
│   │   │   ├── carrinho/
│   │   │   └── checkout/
│   │   ├── (institucional)/
│   │   │   ├── sobre/
│   │   │   └── contato/
│   │   ├── (admin)/
│   │   │   ├── admin/
│   │   │   │   ├── produtos/
│   │   │   │   ├── pedidos/
│   │   │   │   └── dashboard/
│   │   │   └── layout.tsx (protegido)
│   │   ├── (user)/
│   │   │   ├── minha-conta/
│   │   │   ├── meus-pedidos/
│   │   │   └── layout.tsx (protegido)
│   │   ├── api/
│   │   │   ├── produtos/
│   │   │   ├── pedidos/
│   │   │   └── webhook/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── shop/
│   │   │   ├── product-card.tsx
│   │   │   ├── cart-drawer.tsx
│   │   │   └── category-filter.tsx
│   │   ├── admin/
│   │   │   ├── product-form.tsx
│   │   │   └── orders-table.tsx
│   │   └── dropzone/ (Supabase UI)
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── middleware.ts
│   │   ├── utils.ts
│   │   └── validations/
│   │       ├── product.ts
│   │       └── order.ts
│   ├── hooks/
│   │   ├── use-supabase-upload.ts
│   │   └── use-cart.ts
│   ├── store/
│   │   ├── cart-store.ts
│   │   └── user-store.ts
│   ├── types/
│   │   ├── database.ts
│   │   └── product.ts
│   └── middleware.ts
├── public/
│   ├── images/
│   └── logo.svg
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
└── package.json
```

- Organize por features/domínios
- Use route groups do App Router
- Separe páginas públicas, autenticadas e admin
- Implemente rotas dinâmicas para produtos e categorias

## 🧭 Navegação e Layout

### Header Principal deve conter:
- Logo Mecânica Spagnol (à esquerda)
- Links: Home | Sobre/Quem Somos | Contato | Loja
- Ícone de carrinho com contador (badge)
- Ícone de minha conta (dropdown com Login/Cadastro ou Dashboard/Sair)
- Mobile: Menu hamburguer com drawer/sheet responsivo
- Indicadores visuais para página ativa
- Barra de busca integrada (opcional)

### Footer deve incluir:
- Informações da empresa
- Endereço e telefone
- Horário de funcionamento
- Links para categorias principais
- Redes sociais
- Copyright Mecânica Spagnol

## 🗄️ Banco de Dados - INSTRUÇÕES CRÍTICAS

### Requisitos do Schema:
1. **Crie um script SQL COMPLETO** para Supabase incluindo:
   
   ```sql
   -- Tabelas principais necessárias:
   
   -- profiles (extensão de auth.users)
   -- products (produtos)
   -- categories (4 categorias fixas)
   -- cart_items (itens do carrinho)
   -- orders (pedidos)
   -- order_items (itens dos pedidos)
   -- payment_intents (preparar para integração futura)
   
   -- ENUM types:
   -- order_status: pending, processing, shipped, delivered, cancelled
   -- user_role: customer, admin
   
   -- Categorias fixas:
   -- 1. Caminhonetes a diesel
   -- 2. Caminhões pesados
   -- 3. Ônibus rodoviários e urbanos
   -- 4. Máquinas agrícolas e tratores
   ```

2. **Segurança - FUNDAMENTAL**:
   - Implemente Row Level Security (RLS) em TODAS as tabelas
   - Crie policies diferenciadas para:
     * Usuários públicos (apenas leitura de produtos públicos)
     * Usuários autenticados (CRUD próprios dados, carrinho, pedidos)
     * Administradores (acesso total com verificação de role='admin')
   - Use o princípio do menor privilégio
   - Implemente verificações de auth.uid() nas policies
   - Proteja dados sensíveis com policies restritivas

3. **Para Supabase específicamente**:
   - Use auth.users para integração com autenticação
   - Crie trigger para auto-criar profile quando usuário se registra
   - Configure bucket "products" no Storage para imagens
   - Implemente políticas no Storage (admin upload, public read)

4. **Processo de criação**:
   - Primeiro, crie o schema completo com todas as tabelas
   - Depois, REVISE verificando:
     * Todas as tabelas têm RLS ativado?
     * Todas as policies estão corretas e seguras?
     * Índices estão otimizados para queries comuns?
     * Não há brechas de segurança?
   - Corrija qualquer problema encontrado

## 📋 Funcionalidades Detalhadas

### Sistema de Categorias
- 4 categorias fixas no banco:
  1. Caminhonetes a diesel
  2. Caminhões pesados
  3. Ônibus rodoviários e urbanos
  4. Máquinas agrícolas e tratores
- Filtro por categoria na página da loja
- URLs amigáveis: `/categoria/caminhonetes-a-diesel`

### Carrinho de Compras
- Gerenciado com Zustand
- Persistir no localStorage
- Drawer lateral ao clicar no ícone
- Atualização em tempo real
- Cálculo de frete (preparar estrutura)
- Aplicação de cupons (preparar estrutura)

### Checkout/Pagamento
- Formulário com React Hook Form + Zod
- Estrutura modular para integração futura
- Campos: dados pessoais, endereço, método de pagamento
- Resumo do pedido
- Confirmação por email

### Painel Administrativo
- Dashboard com métricas principais
- CRUD completo de produtos:
  * Upload de múltiplas imagens com Dropzone
  * Campos: nome, descrição, preço, categoria, estoque, SKU
  * Preview em tempo real
- Gestão de pedidos:
  * Lista com filtros (status, data, cliente)
  * Detalhes do pedido
  * Atualização de status
  * Histórico de pagamentos
- Relatórios básicos

### Upload de Imagens
- Usar componente Dropzone do Supabase UI:
  ```bash
  npx shadcn@latest add https://supabase.com/ui/r/dropzone-nextjs.json
  ```
- Configurar hook useSupabaseUpload
- Bucket "products" no Supabase Storage
- Otimização automática de imagens
- Preview antes de salvar

## 🎨 Padrões e Convenções

### Código:
- TypeScript com strict mode SEMPRE
- Componentes funcionais com hooks
- Naming: PascalCase (componentes), camelCase (funções), UPPER_SNAKE (constantes)
- Tratamento de erros em TODAS as funções assíncronas
- Loading states com Suspense boundaries
- Error boundaries para falhas graceful
- Comentários em português BR

### Estilização com Tailwind + shadcn/ui:
- Mobile-first responsive design
- Tema personalizado para Mecânica Spagnol
- Cores corporativas (definir com cliente)
- Componentes acessíveis (ARIA labels)
- Animações suaves com Framer Motion (opcional)

## 🔒 Segurança Obrigatória

1. **Validação de Dados**:
   - Use Zod em TODOS os inputs
   - Schemas compartilhados entre cliente e servidor
   - Sanitize dados antes de salvar
   - Previna SQL injection e XSS

2. **Autenticação/Autorização**:
   - Supabase Auth com email/senha
   - Magic links como opção
   - Middleware de proteção de rotas
   - Verificação de roles (customer/admin)
   - Session management automático

3. **APIs**:
   - Rate limiting em todas as rotas públicas
   - Validação de origem das requisições
   - Logs de segurança
   - Webhook seguro para pagamentos

4. **Variáveis de Ambiente**:
   ```env
   # .env.local
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   NEXT_PUBLIC_SITE_URL=
   ```

## 🚀 Comandos de Setup

[VERIFICADOS EM: 17 de julho de 2025]

```bash
# 1. Criar projeto base
npx create-next-app@latest mecanica-spagnol \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd mecanica-spagnol

# 2. Instalar dependências core
npm install @supabase/supabase-js @supabase/ssr
npm install zustand
npm install react-hook-form @hookform/resolvers zod
npm install lucide-react
npm install class-variance-authority clsx tailwind-merge

# 3. Configurar shadcn/ui
npx shadcn@latest init -y

# 4. Adicionar componentes shadcn necessários
npx shadcn@latest add button card dialog form input label 
npx shadcn@latest add select separator sheet table tabs
npx shadcn@latest add dropdown-menu navigation-menu badge
npx shadcn@latest add alert toast skeleton

# 5. Adicionar Dropzone do Supabase UI
npx shadcn@latest add https://supabase.com/ui/r/dropzone-nextjs.json

# 6. Setup do Supabase
# - Criar projeto em supabase.com
# - Copiar URL e ANON_KEY para .env.local
# - Rodar migration inicial no SQL Editor

# 7. Variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas keys do Supabase

# 8. Iniciar desenvolvimento
npm run dev
```

## 📊 Critérios de Aceitação

O projeto está completo quando:
- [ ] Todas as funcionalidades listadas funcionam corretamente
- [ ] Navegação implementada conforme especificado
- [ ] Schema do banco está seguro com RLS implementado
- [ ] Autenticação Supabase funciona (login, cadastro, logout)
- [ ] Carrinho persiste e sincroniza com Zustand
- [ ] Admin pode fazer CRUD de produtos com upload de imagens
- [ ] Sistema de pedidos funciona end-to-end
- [ ] Não há erros de TypeScript
- [ ] Performance > 90 no Lighthouse
- [ ] Totalmente responsivo (mobile, tablet, desktop)
- [ ] Acessível (WCAG AA)
- [ ] SEO otimizado com meta tags dinâmicas
- [ ] README.md completo com instruções

## 🔄 Processo de Implementação Detalhado

1. **Plan Mode (60-90 min)**:
   - Documente TODA a arquitetura
   - Defina interfaces TypeScript para todas as entidades
   - Planeje componentes reutilizáveis
   - Mapeie todas as rotas e fluxos
   - Crie diagramas de fluxo se necessário

2. **Setup Inicial (30-45 min)**:
   - Configure projeto Next.js 15.4.1
   - Instale todas as dependências
   - Configure Tailwind + shadcn/ui
   - Setup Supabase clients
   - Configure linters e formatters

3. **Banco de Dados (90-120 min)**:
   - Crie schema completo com todas as tabelas
   - Implemente RLS e policies de segurança
   - Teste cada policy individualmente
   - Configure Storage bucket
   - Popule categorias e dados de exemplo

4. **Autenticação (45-60 min)**:
   - Configure Supabase Auth
   - Implemente páginas de login/cadastro
   - Configure middleware de proteção
   - Teste fluxos de autenticação
   - Implemente recuperação de senha

5. **Layout Base (60-90 min)**:
   - Implemente Header com navegação completa
   - Crie Footer informativo
   - Configure layouts do App Router
   - Implemente responsividade mobile
   - Adicione indicadores de página ativa

6. **Páginas Institucionais (45-60 min)**:
   - Home com hero e destaques
   - Sobre com história da empresa
   - Contato com formulário e mapa
   - Otimize para SEO

7. **Sistema de Produtos (3-4 horas)**:
   - Lista de produtos com filtros
   - Página individual do produto
   - Sistema de categorias
   - Busca de produtos
   - Paginação ou scroll infinito

8. **Carrinho e Checkout (2-3 horas)**:
   - Implementar store Zustand
   - Drawer do carrinho
   - Página de checkout
   - Validação de formulários
   - Estrutura para pagamento

9. **Painel Admin (3-4 horas)**:
   - Dashboard com métricas
   - CRUD de produtos com Dropzone
   - Gestão de pedidos
   - Filtros e buscas
   - Exportação de dados (opcional)

10. **Área do Cliente (1-2 horas)**:
    - Minha conta (dados pessoais)
    - Histórico de pedidos
    - Acompanhar pedido
    - Favoritos (opcional)

11. **Testes e Otimização (2-3 horas)**:
    - Teste todos os fluxos críticos
    - Otimize imagens e bundle
    - Verifique SEO e meta tags
    - Teste em múltiplos dispositivos
    - Lighthouse audit

12. **Documentação (45-60 min)**:
    - README.md completo
    - Documentação de APIs
    - Guia de setup local
    - Instruções de deploy

13. **Preparação para Deploy (30-45 min)**:
    - Configure para Vercel
    - Variáveis de ambiente de produção
    - Otimizações finais
    - Último review de segurança

## VALIDAÇÕES FINAIS:

1. **Schema do banco**: DEVE ter RLS em todas as tabelas
2. **Segurança**: Validação em TODOS os pontos de entrada
3. **Performance**: Lazy loading, otimização de imagens
4. **UX**: Feedback visual em todas as ações
5. **Acessibilidade**: Navegação por teclado, screen readers

## OBSERVAÇÕES IMPORTANTES:

- Mantenha o código em português BR (comentários, mensagens)
- Use console.log durante desenvolvimento, remova para produção
- Implemente tratamento de erros amigável ao usuário
- Considere adicionar PWA no futuro
- Prepare estrutura para analytics (GA4)

## SALVAR LOG:
Este documento serve como especificação completa do projeto Mecânica Spagnol.