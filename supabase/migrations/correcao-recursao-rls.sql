-- ===================================================================
-- SCRIPT DE CORREÇÃO: Recursão Infinita em Policies RLS
-- ===================================================================
-- 
-- PROBLEMA IDENTIFICADO:
-- A policy "Admins podem ver todos os perfis" causa recursão infinita
-- quando a função getProfile() é executada, pois a policy verifica
-- se o usuário é admin fazendo uma nova query na tabela profiles,
-- o que dispara novamente a mesma policy criando um loop infinito.
--
-- SOLUÇÃO:
-- Criar uma função SECURITY DEFINER que bypassa as policies RLS
-- para verificar se o usuário é admin, eliminando a recursão.
--
-- DATA: 2025-01-17
-- AUTOR: Claude Code (Mecânica Spagnol)
-- ===================================================================

-- Início da transação para rollback automático em caso de erro
BEGIN;

-- ===================================================================
-- BACKUP DA POLICY ATUAL (PARA REFERÊNCIA)
-- ===================================================================
/*
POLICY PROBLEMÁTICA QUE SERÁ REMOVIDA:

CREATE POLICY "Admins podem ver todos os perfis" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles                    -- ❌ AUTO-REFERÊNCIA
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

PROBLEMA: A query EXISTS faz uma nova consulta na tabela profiles,
o que dispara novamente a policy, criando recursão infinita.
*/

-- ===================================================================
-- 1. CRIAR FUNÇÃO SECURITY DEFINER PARA VERIFICAR ADMIN
-- ===================================================================

-- Primeiro, verificar se a função já existe e removê-la
DROP FUNCTION IF EXISTS public.is_admin_user() CASCADE;

-- Criar função que verifica se o usuário atual é admin
-- SECURITY DEFINER permite que a função execute com privilégios elevados
-- bypassing as policies RLS da tabela profiles
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN
SECURITY DEFINER -- Executa com privilégios de superuser, bypassa RLS
SET search_path = public, auth -- Fixa search_path para segurança
LANGUAGE plpgsql
AS $$
DECLARE
  user_role text;
BEGIN
  -- Verificar se existe sessão ativa
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;

  -- Buscar role do usuário atual diretamente (sem RLS)
  -- Esta query NÃO dispara policies pois a função é SECURITY DEFINER
  SELECT role INTO user_role
  FROM public.profiles 
  WHERE id = auth.uid();

  -- Retornar true se é admin, false caso contrário
  RETURN COALESCE(user_role = 'admin', FALSE);

EXCEPTION 
  WHEN NO_DATA_FOUND THEN
    -- Usuário não tem profile, não é admin
    RETURN FALSE;
  WHEN OTHERS THEN
    -- Em caso de qualquer erro, assumir que não é admin por segurança
    RAISE WARNING 'Erro ao verificar role de admin para user %: %', auth.uid(), SQLERRM;
    RETURN FALSE;
END;
$$;

-- Adicionar comentário explicativo na função
COMMENT ON FUNCTION public.is_admin_user() IS 
'Verifica se o usuário atual é admin. Função SECURITY DEFINER para bypassing RLS policies e evitar recursão infinita.';

-- ===================================================================
-- 2. REMOVER POLICY PROBLEMÁTICA
-- ===================================================================

-- Remover a policy que causa recursão infinita
DROP POLICY IF EXISTS "Admins podem ver todos os perfis" ON profiles;

-- ===================================================================
-- 3. CRIAR NOVA POLICY USANDO FUNÇÃO SEGURA
-- ===================================================================

-- Criar nova policy que usa a função security definer
-- Esta policy NÃO causa recursão pois is_admin_user() bypassa RLS
CREATE POLICY "Admins podem ver todos os perfis" ON profiles
  FOR SELECT USING (public.is_admin_user());

-- Adicionar comentário explicativo na policy
COMMENT ON POLICY "Admins podem ver todos os perfis" ON profiles IS 
'Permite que admins vejam todos os perfis usando função security definer para evitar recursão infinita.';

-- ===================================================================
-- 4. VALIDAÇÕES DE FUNCIONAMENTO
-- ===================================================================

-- Verificar se a função foi criada corretamente
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc 
    WHERE proname = 'is_admin_user' 
    AND pronamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
  ) THEN
    RAISE EXCEPTION 'Função is_admin_user() não foi criada corretamente';
  END IF;
  
  RAISE NOTICE '✅ Função is_admin_user() criada com sucesso';
END $$;

-- Verificar se a policy foi criada corretamente
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'profiles' 
    AND policyname = 'Admins podem ver todos os perfis'
  ) THEN
    RAISE EXCEPTION 'Policy não foi criada corretamente';
  END IF;
  
  RAISE NOTICE '✅ Policy "Admins podem ver todos os perfis" recriada com sucesso';
END $$;

-- ===================================================================
-- 5. TESTE BÁSICO DA FUNÇÃO
-- ===================================================================

-- Testar se a função executa sem erros (mesmo sem usuário logado)
DO $$
DECLARE
  result boolean;
BEGIN
  -- Chamar função (deve retornar false pois não há sessão ativa)
  SELECT public.is_admin_user() INTO result;
  
  RAISE NOTICE 'ℹ️  Teste da função is_admin_user(): % (esperado: false sem sessão)', result;
END $$;

-- ===================================================================
-- 6. INFORMAÇÕES PARA ROLLBACK (SE NECESSÁRIO)
-- ===================================================================

/*
PLANO DE ROLLBACK EM CASO DE PROBLEMAS:

1. Remover nova policy:
   DROP POLICY IF EXISTS "Admins podem ver todos os perfis" ON profiles;

2. Remover função:
   DROP FUNCTION IF EXISTS public.is_admin_user() CASCADE;

3. Recriar policy original (problemática, mas funcional para usuários não-admin):
   CREATE POLICY "Admins podem ver todos os perfis" ON profiles
     FOR SELECT USING (
       EXISTS (
         SELECT 1 FROM profiles
         WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
       )
     );

NOTA: A policy original continuará causando recursão, mas permitirá 
que usuários não-admin façam login normalmente.
*/

-- ===================================================================
-- FINALIZAR TRANSAÇÃO
-- ===================================================================

-- Confirmar todas as alterações
COMMIT;

-- ===================================================================
-- MENSAGEM FINAL
-- ===================================================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '🎉 CORREÇÃO APLICADA COM SUCESSO!';
  RAISE NOTICE '';
  RAISE NOTICE 'Alterações realizadas:';
  RAISE NOTICE '  ✅ Função is_admin_user() criada (SECURITY DEFINER)';
  RAISE NOTICE '  ✅ Policy "Admins podem ver todos os perfis" atualizada';
  RAISE NOTICE '  ✅ Recursão infinita eliminada';
  RAISE NOTICE '';
  RAISE NOTICE 'Próximos passos:';
  RAISE NOTICE '  1. Testar login de usuário admin';
  RAISE NOTICE '  2. Testar login de usuário comum';  
  RAISE NOTICE '  3. Verificar se o redirecionamento funciona';
  RAISE NOTICE '  4. Validar menu do usuário no header';
  RAISE NOTICE '';
  RAISE NOTICE 'Em caso de problemas, consulte o plano de rollback no script.';
  RAISE NOTICE '';
END $$;