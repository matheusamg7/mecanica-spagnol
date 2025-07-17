# 📋 PRÓXIMOS PASSOS - MECÂNICA SPAGNOL

## ✅ Status Atual do Projeto

### Concluído ✓
- **Setup Completo**: Next.js 15.4.1 + TypeScript + Tailwind CSS + shadcn/ui
- **Banco de Dados**: Schema SQL com RLS completo no Supabase
- **Configuração**: Variáveis de ambiente já configuradas com credenciais do Supabase
- **Layout Base**: Header e Footer responsivos implementados
- **Páginas Institucionais**: Home, Sobre e Contato funcionando
- **Tipos TypeScript**: Interfaces completas para todas as entidades
- **Middleware**: Proteção de rotas configurada
- **Sistema de Autenticação**: Login, cadastro, proteção de rotas, área do usuário
- **Lint**: Todos os erros corrigidos ✓

### Observações Importantes
- ✅ **Supabase já configurado**: As credenciais já estão no `.env.local`
- ⚠️ **Banco ainda não migrado**: Precisa executar o SQL no painel do Supabase
- ⚠️ **Storage não configurado**: Precisa criar bucket "products" no Supabase

---

## 🗄️ CONFIGURAÇÃO DO BANCO DE DADOS (URGENTE)

### 1. Executar Migrações

1. Acesse seu projeto no [Supabase Dashboard](https://supabase.com/dashboard)
2. Vá para **SQL Editor**
3. Execute o arquivo `supabase/migrations/001_initial_schema.sql`
4. Verifique se todas as tabelas foram criadas com sucesso

### 2. Configurar Storage

1. No painel do Supabase, vá para **Storage**
2. Clique em **New bucket**
3. Configure:
   - Nome: `products`
   - Public bucket: ✅ SIM
4. Execute o arquivo `supabase/migrations/002_storage_setup.sql` no SQL Editor

### 3. Criar Usuário Admin (Opcional)

```sql
-- Após criar um usuário normal via interface, execute:
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'seu-email@exemplo.com';
```

---

## 📊 FASE 5: IMPLEMENTAR PRODUTOS E CARRINHO

### 5.1 Sistema de Produtos (2 horas)

#### Páginas:
- `/produtos` - Lista de produtos com filtros
- `/produtos/[slug]` - Detalhes do produto
- `/categoria/[categoria]` - Produtos por categoria

#### Componentes principais:
```typescript
// src/components/shop/product-card.tsx
- Card com imagem, nome, preço
- Botão adicionar ao carrinho
- Badge de desconto se houver

// src/components/shop/product-grid.tsx
- Grid responsivo de produtos
- Skeleton loading
- Mensagem quando vazio

// src/components/shop/product-filters.tsx
- Filtro por categoria
- Range de preço
- Ordenação
- Busca

// src/components/shop/product-gallery.tsx
- Galeria de imagens do produto
- Zoom on hover
- Thumbnails navegáveis
```

#### APIs necessárias:
```typescript
// src/app/api/produtos/route.ts
GET /api/produtos
- Query params: category, search, min_price, max_price, sort
- Paginação com limit/offset
- Retornar apenas produtos ativos

// src/app/api/produtos/[id]/route.ts
GET /api/produtos/[id]
- Retornar produto com categoria
- Incrementar visualizações (opcional)
```

### 4.3 Sistema de Carrinho (2-3 horas)

#### Store Zustand:
```typescript
// src/store/cart-store.ts
interface CartStore {
  items: CartItem[]
  isOpen: boolean
  
  // Actions
  addItem(product, quantity)
  updateQuantity(productId, quantity)
  removeItem(productId)
  clearCart()
  syncCart() // sincronizar com banco se logado
  
  // Computed
  getTotalItems()
  getSubtotal()
  getShipping() // calcular frete
  getTotal()
}
```

#### Componentes:
```typescript
// src/components/cart/cart-drawer.tsx
- Sheet lateral com itens
- Atualização de quantidade
- Remoção de itens
- Resumo e total
- Botão checkout

// src/components/cart/cart-icon.tsx
- Ícone com badge contador
- Animação ao adicionar

// src/app/(shop)/carrinho/page.tsx
- Página completa do carrinho
- Cálculo de frete
- Cupom de desconto (preparar)
```

### 5.2 Sistema de Carrinho (2 horas)

#### Store Zustand:
```typescript
// src/store/cart-store.ts
interface CartStore {
  items: CartItem[]
  isOpen: boolean
  
  // Actions
  addItem(product, quantity)
  updateQuantity(productId, quantity)
  removeItem(productId)
  clearCart()
  syncCart() // sincronizar com banco se logado
  
  // Computed
  getTotalItems()
  getSubtotal()
  getShipping() // calcular frete
  getTotal()
}
```

#### Componentes:
```typescript
// src/components/cart/cart-drawer.tsx
- Sheet lateral com itens
- Atualização de quantidade
- Remoção de itens
- Resumo e total
- Botão checkout

// src/components/cart/cart-icon.tsx
- Ícone com badge contador
- Animação ao adicionar

// src/app/carrinho/page.tsx
- Página completa do carrinho
- Cálculo de frete
- Cupom de desconto (preparar)
```

### 5.3 Sistema de Checkout (2 horas)

#### Páginas:
```typescript
// src/app/checkout/page.tsx
- Formulário multi-etapa
- Verificar autenticação
- Criar pedido no banco
```

#### Etapas do checkout:
1. **Identificação**
   - Se não logado: login ou continuar como convidado
   - Se logado: mostrar dados

2. **Endereço de entrega**
   - Formulário de endereço
   - Busca CEP (ViaCEP API)
   - Salvar endereço para próximas compras

3. **Método de pagamento**
   - Estrutura modular para futuras integrações
   - Por enquanto: "Pagamento na entrega"

4. **Revisão e confirmação**
   - Resumo completo do pedido
   - Aceite de termos
   - Botão finalizar

#### Componentes:
```typescript
// src/components/checkout/checkout-steps.tsx
- Indicador visual das etapas
- Navegação entre etapas

// src/components/checkout/address-form.tsx
- Form com validação Zod
- Integração ViaCEP
- Auto-complete de endereço

// src/components/checkout/order-summary.tsx
- Lista de produtos
- Valores detalhados
- Total final
```

---

## 👨‍💼 FASE 6: PAINEL ADMINISTRATIVO

### 6.1 Dashboard (2 horas)

```typescript
// src/app/(admin)/admin/dashboard/page.tsx
- Cards com métricas principais:
  - Total de vendas (mês)
  - Pedidos pendentes
  - Produtos em falta
  - Novos clientes
- Gráfico de vendas (opcional)
- Últimos pedidos
```

### 6.2 Gestão de Produtos (3-4 horas)

#### Páginas:
```typescript
// src/app/(admin)/admin/produtos/page.tsx
- Tabela com todos os produtos
- Busca e filtros
- Ações: editar, excluir, ativar/desativar

// src/app/(admin)/admin/produtos/novo/page.tsx
- Formulário de criação
- Upload de múltiplas imagens
- Preview em tempo real

// src/app/(admin)/admin/produtos/[id]/editar/page.tsx
- Formulário de edição
- Gerenciar imagens existentes
```

#### Componentes:
```typescript
// src/components/admin/product-form.tsx
- Form reutilizável para criar/editar
- Validação com Zod
- Upload com Dropzone
- Rich text editor para descrição

// src/components/admin/product-table.tsx
- DataTable com paginação
- Ordenação por colunas
- Ações inline
```

### 6.3 Gestão de Pedidos (2-3 horas)

```typescript
// src/app/(admin)/admin/pedidos/page.tsx
- Lista de todos os pedidos
- Filtros por status, data
- Busca por número/cliente

// src/app/(admin)/admin/pedidos/[id]/page.tsx
- Detalhes completos do pedido
- Timeline de status
- Atualizar status
- Adicionar código de rastreio
- Imprimir pedido
```

---

## 👤 ÁREA DO CLIENTE

### Páginas necessárias:

```typescript
// src/app/(user)/minha-conta/page.tsx
- Dados pessoais
- Alterar senha
- Endereços salvos

// src/app/(user)/meus-pedidos/page.tsx
- Histórico de pedidos
- Status e rastreamento
- Recomprar
```

---

## 🚀 INTEGRAÇÕES FUTURAS

### 1. Sistema de Pagamento
Preparar estrutura modular para:
- **Stripe**: Internacional
- **Mercado Pago**: Nacional
- **PagSeguro**: Alternativa

### 2. Cálculo de Frete
- **Correios API**
- **Frenet**: Múltiplas transportadoras
- Tabela fixa por região

### 3. E-mail Transacional
- **Resend**: Moderno e simples
- **SendGrid**: Robusto
- Templates para:
  - Confirmação de pedido
  - Atualização de status
  - Recuperação de senha

### 4. SEO e Analytics
- **Google Analytics 4**
- **Meta tags dinâmicas**
- **Sitemap.xml**
- **robots.txt**

---

## 🐛 MELHORIAS E OTIMIZAÇÕES

### Performance
- [ ] Implementar `loading.tsx` em todas as rotas
- [ ] Adicionar `error.tsx` para tratamento de erros
- [ ] Otimizar imagens com `next/image`
- [ ] Implementar ISR nas páginas de produtos

### UX/UI
- [ ] Adicionar animações com Framer Motion
- [ ] Implementar busca em tempo real
- [ ] Adicionar filtros avançados
- [ ] Modo escuro (opcional)

### Segurança
- [ ] Rate limiting nas APIs
- [ ] Validação dupla (cliente + servidor)
- [ ] Sanitização de inputs
- [ ] CORS configurado

---

## 📝 CHECKLIST DE IMPLEMENTAÇÃO

### Fase 5: Produtos e Carrinho
- [ ] Sistema de produtos funcionando
- [ ] Carrinho persistente com Zustand
- [ ] Checkout multi-etapa
- [ ] E-mails de confirmação

### Fase 6: Admin
- [ ] Dashboard com métricas
- [ ] Gestão completa de produtos
- [ ] Gestão de pedidos
- [ ] Upload de imagens funcionando

### Fase 7: Finalização
- [ ] Todos os testes passando
- [ ] Performance otimizada
- [ ] Deploy na Vercel
- [ ] Domínio configurado
- [ ] SSL ativo

---

## 🎯 PRIORIDADES IMEDIATAS

1. **Executar migrações no Supabase** ⚠️
2. **Configurar bucket de Storage** ⚠️
3. **Criar alguns produtos de teste**
4. **Implementar listagem de produtos** (Fase 5.1)
5. **Implementar sistema de carrinho** (Fase 5.2)
6. **Implementar checkout** (Fase 5.3)

---

## 💡 DICAS DE DESENVOLVIMENTO

### Comandos úteis:
```bash
# Desenvolvimento
npm run dev

# Verificar tipos
npx tsc --noEmit

# Lint
npm run lint

# Build local
npm run build
```

### Testar no Supabase:
```sql
-- Ver todas as tabelas
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- Verificar RLS
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- Testar policies
SET ROLE anon;
SELECT * FROM products; -- deve funcionar

SET ROLE authenticated;
-- fazer testes como usuário logado
```

### Estrutura de branches sugerida:
```
main
├── develop
│   ├── feature/auth
│   ├── feature/products
│   ├── feature/cart
│   ├── feature/checkout
│   └── feature/admin
```

---

## 📞 SUPORTE E REFERÊNCIAS

- **Supabase Docs**: https://supabase.com/docs
- **Next.js 15 Docs**: https://nextjs.org/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com
- **Zustand**: https://github.com/pmndrs/zustand

---

Boa sorte com a implementação! 🚀