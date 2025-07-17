-- ===================================================================
-- SCRIPT DE VERIFICAÇÃO: Se Migração 002 Foi Aplicada
-- ===================================================================
-- 
-- Execute este script no SQL Editor do Supabase para verificar se:
-- 1. Função is_admin_user() existe
-- 2. Policies estão usando a função
-- 3. Trigger create_profile_for_user está atualizado
--
-- DATA: 2025-01-17
-- ===================================================================

-- 1. Verificar se função is_admin_user() existe
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_proc 
    WHERE proname = 'is_admin_user' 
    AND pronamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
  ) THEN
    RAISE NOTICE '✅ Função is_admin_user() existe';
  ELSE
    RAISE NOTICE '❌ Função is_admin_user() NÃO existe - Script 002 não foi aplicado';
  END IF;
END $$;

-- 2. Verificar policies que usam is_admin_user()
DO $$
DECLARE
  policy_count integer;
BEGIN
  SELECT COUNT(*) INTO policy_count
  FROM pg_policies 
  WHERE (tablename = 'profiles' AND policyname = 'Admins podem ver todos os perfis')
     OR (tablename = 'categories' AND policyname = 'Apenas admins podem modificar categorias') 
     OR (tablename = 'products' AND policyname = 'Apenas admins podem gerenciar produtos')
     OR (tablename = 'orders' AND policyname = 'Admins podem gerenciar todos os pedidos')
     OR (tablename = 'order_items' AND policyname = 'Admins podem ver todos os itens')
     OR (tablename = 'payment_intents' AND policyname = 'Admins podem ver todos os pagamentos');
  
  IF policy_count >= 6 THEN
    RAISE NOTICE '✅ % policies admin encontradas', policy_count;
  ELSE
    RAISE NOTICE '❌ Apenas % policies admin encontradas (esperado: 6)', policy_count;
  END IF;
END $$;

-- 3. Verificar trigger create_profile_for_user
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'create_profile_on_signup'
  ) THEN
    RAISE NOTICE '✅ Trigger create_profile_on_signup existe';
  ELSE
    RAISE NOTICE '❌ Trigger create_profile_on_signup NÃO existe';
  END IF;
END $$;

-- 4. Testar função is_admin_user() (se existir)
DO $$
DECLARE
  result boolean;
BEGIN
  -- Tentar chamar a função
  BEGIN
    SELECT public.is_admin_user() INTO result;
    RAISE NOTICE '✅ Função is_admin_user() executada com sucesso: %', result;
  EXCEPTION 
    WHEN undefined_function THEN
      RAISE NOTICE '❌ Função is_admin_user() não existe';
    WHEN OTHERS THEN
      RAISE NOTICE '⚠️  Função is_admin_user() existe mas teve erro: %', SQLERRM;
  END;
END $$;

-- 5. Verificar metadados da função create_profile_for_user
SELECT 
  proname as function_name,
  CASE 
    WHEN prosrc LIKE '%cpf%' THEN '✅ Inclui CPF'
    ELSE '❌ Não inclui CPF'
  END as cpf_support,
  CASE 
    WHEN prosrc LIKE '%raw_user_meta_data%' THEN '✅ Usa metadata'
    ELSE '❌ Não usa metadata'
  END as metadata_support
FROM pg_proc 
WHERE proname = 'create_profile_for_user';

-- 6. Verificar estrutura da tabela profiles
SELECT 
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'profiles' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- ===================================================================
-- MENSAGEM FINAL
-- ===================================================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '🔍 VERIFICAÇÃO CONCLUÍDA!';
  RAISE NOTICE '';
  RAISE NOTICE 'Analise os resultados acima:';
  RAISE NOTICE '1. Função is_admin_user() deve existir';
  RAISE NOTICE '2. 6 policies admin devem existir';
  RAISE NOTICE '3. Trigger create_profile_on_signup deve existir';
  RAISE NOTICE '4. Função deve executar sem erro';
  RAISE NOTICE '5. create_profile_for_user deve incluir CPF';
  RAISE NOTICE '';
  RAISE NOTICE 'Se algum item falhar, execute o script 002_fix_rls_and_signup.sql';
  RAISE NOTICE '';
END $$;