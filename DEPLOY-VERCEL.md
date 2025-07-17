# 🚀 Deploy no Vercel - Mecânica Spagnol

## 📋 Variáveis de Ambiente Necessárias

Para fazer o deploy no Vercel, você precisa configurar as seguintes variáveis de ambiente:

### 🔑 Supabase (Obrigatórias)

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Valor: URL do seu projeto Supabase
   - Exemplo: `https://xxxxxxxxxxx.supabase.co`
   - Onde encontrar: [Supabase Dashboard](https://supabase.com/dashboard) > Seu Projeto > Settings > API

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Valor: Chave pública/anônima do Supabase
   - Exemplo: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - Onde encontrar: [Supabase Dashboard](https://supabase.com/dashboard) > Seu Projeto > Settings > API

3. **SUPABASE_SERVICE_ROLE_KEY**
   - Valor: Chave de service role (privada)
   - Exemplo: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - Onde encontrar: [Supabase Dashboard](https://supabase.com/dashboard) > Seu Projeto > Settings > API
   - ⚠️ **IMPORTANTE**: Esta chave é SECRETA, nunca a exponha

4. **NEXT_PUBLIC_SITE_URL**
   - Valor: URL do seu site no Vercel
   - Exemplo: `https://mecanica-spagnol.vercel.app`
   - Ou seu domínio personalizado: `https://mecanicaspagnol.com.br`

---

## 🛠️ Como Configurar no Vercel

### Método 1: Via Dashboard Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Selecione seu projeto "mecanica-spagnol"
3. Vá em **Settings** > **Environment Variables**
4. Adicione cada variável:

```bash
# Clique em "Add New" para cada uma:

Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://xxxxxxxxxxx.supabase.co

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY  
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Name: NEXT_PUBLIC_SITE_URL
Value: https://seu-projeto.vercel.app
```

5. **Environment**: Selecione `Production`, `Preview` e `Development`
6. Clique em **Save**

### Método 2: Via Vercel CLI

```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# No diretório do projeto, adicionar as variáveis
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_SITE_URL

# Fazer novo deploy
vercel --prod
```

---

## 🔍 Como Obter as Chaves do Supabase

### Passo a Passo:

1. **Acesse o Supabase Dashboard**
   - Vá para [supabase.com/dashboard](https://supabase.com/dashboard)
   - Faça login na sua conta

2. **Selecione seu projeto**
   - Clique no projeto "mecanica-spagnol" (ou o nome que você deu)

3. **Vá para Settings > API**
   - No menu lateral, clique em **Settings**
   - Depois clique em **API**

4. **Copie as chaves**
   - **Project URL**: Copie para `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key**: Copie para `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key**: Copie para `SUPABASE_SERVICE_ROLE_KEY`

### Screenshot das configurações:
```
Project Settings > API

Configuration
┌─────────────────────────────────────────┐
│ Project URL                             │
│ https://xxxxxxxxxxx.supabase.co         │ ← NEXT_PUBLIC_SUPABASE_URL
└─────────────────────────────────────────┘

Project API keys
┌─────────────────────────────────────────┐
│ anon public                             │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... │ ← NEXT_PUBLIC_SUPABASE_ANON_KEY
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ service_role secret                     │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... │ ← SUPABASE_SERVICE_ROLE_KEY
└─────────────────────────────────────────┘
```

---

## ⚙️ Configurações Adicionais no Supabase

### 1. Configurar Authentication

No Supabase Dashboard > Authentication > Settings:

**Site URL**: `https://seu-projeto.vercel.app`

**Redirect URLs**: 
- `https://seu-projeto.vercel.app/auth/callback`
- `https://seu-projeto.vercel.app/**` (para desenvolvimento local também)

### 2. Executar Migrações SQL

No Supabase Dashboard > SQL Editor:

1. Execute o arquivo `supabase/migrations/001_initial_schema.sql`
2. Verifique se todas as tabelas foram criadas
3. Teste se o RLS está funcionando

---

## 🧪 Testar Deploy

Após configurar as variáveis:

1. **Redeploy o projeto**:
   ```bash
   # Via dashboard: Settings > Deployments > Redeploy
   # Ou via CLI:
   vercel --prod
   ```

2. **Teste as funcionalidades**:
   - Acesse `https://seu-projeto.vercel.app/login`
   - Tente fazer um cadastro
   - Verifique se o email de confirmação é enviado
   - Teste o login

3. **Monitorar logs**:
   - Vercel Dashboard > Functions > Logs
   - Procure por erros relacionados ao Supabase

---

## 🚨 Problemas Comuns

### Erro: "Your project's URL and API key are required"
- **Causa**: Variáveis de ambiente não configuradas
- **Solução**: Verificar se todas as 4 variáveis estão definidas no Vercel

### Erro: "Invalid API key"
- **Causa**: Chave do Supabase incorreta
- **Solução**: Recopiar as chaves do Dashboard do Supabase

### Erro: "Failed to fetch"
- **Causa**: URL do Supabase incorreta ou problema de CORS
- **Solução**: Verificar URL e configurar redirect URLs no Supabase

### Build falha na coleta de dados
- **Causa**: Tentativa de conectar ao Supabase durante build
- **Solução**: Todas as variáveis devem estar definidas

---

## ✅ Checklist Final

- [ ] 4 variáveis de ambiente configuradas no Vercel
- [ ] Migrações SQL executadas no Supabase
- [ ] Site URL configurada no Supabase Auth
- [ ] Redirect URLs configuradas no Supabase
- [ ] Deploy realizado com sucesso
- [ ] Teste de cadastro funcionando
- [ ] Teste de login funcionando
- [ ] Emails sendo enviados

---

## 📞 Próximos Passos

Após o deploy funcionando:

1. **Configurar domínio personalizado** (opcional)
2. **Configurar SMTP customizado** no Supabase para emails profissionais
3. **Monitorar performance** e logs
4. **Backup do banco de dados**

---

**Atualizado em**: 17/01/2025