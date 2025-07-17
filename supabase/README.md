# Configuração do Banco de Dados - Mecânica Spagnol

## 📋 Pré-requisitos

1. Criar uma conta no [Supabase](https://supabase.com)
2. Criar um novo projeto
3. Anotar as credenciais:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## 🚀 Como executar as migrações

### 1. Schema Principal

1. Acesse o SQL Editor no painel do Supabase
2. Cole todo o conteúdo do arquivo `migrations/001_initial_schema.sql`
3. Execute o script
4. Verifique se todas as tabelas foram criadas com sucesso

### 2. Configurar Storage

1. No painel do Supabase, vá para "Storage"
2. Clique em "New bucket"
3. Configure:
   - Nome: `products`
   - Public bucket: ✅ SIM
4. Clique em "Create bucket"
5. Volte ao SQL Editor
6. Execute o script `migrations/002_storage_setup.sql`

### 3. Criar usuário Admin (opcional)

Para criar um usuário administrador inicial:

```sql
-- Primeiro, crie um usuário normal através da autenticação do Supabase
-- Depois, execute este comando para torná-lo admin:

UPDATE profiles 
SET role = 'admin' 
WHERE email = 'seu-email@exemplo.com';
```

## 🔒 Verificação de Segurança

Após executar as migrações, verifique:

1. **RLS está ativado** em todas as tabelas:
```sql
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';
```

2. **Policies estão criadas**:
```sql
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public';
```

3. **Categorias foram inseridas**:
```sql
SELECT * FROM categories;
```

## 📝 Notas Importantes

- **NUNCA** desative RLS em produção
- Sempre teste as policies antes de publicar
- Mantenha as chaves de serviço seguras
- Use apenas a `ANON_KEY` no frontend
- A `SERVICE_ROLE_KEY` deve ficar apenas no backend

## 🐛 Troubleshooting

### Erro: "permission denied for schema public"
- Certifique-se de estar usando o usuário correto
- Verifique se o projeto foi criado corretamente

### Erro: "duplicate key value violates unique constraint"
- As migrações já foram executadas
- Limpe o banco antes de executar novamente

### Erro ao criar profile automático
- Verifique se o trigger `create_profile_on_signup` está ativo
- Teste criando um novo usuário