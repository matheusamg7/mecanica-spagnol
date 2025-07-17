## Atualizado 17 de jul as 11:58

[
  {
    "schema_name": "public",
    "function_name": "create_profile_for_user",
    "arguments": "",
    "return_type": "trigger",
    "is_security_definer": true,
    "volatility": "v",
    "is_leak_proof": false,
    "function_definition": "CREATE OR REPLACE FUNCTION public.create_profile_for_user()\n RETURNS trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public', 'auth'\nAS $function$\nDECLARE\n  user_full_name text;\n  user_phone text;\nBEGIN\n  -- Extrair dados do raw_user_meta_data se existirem\n  user_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NULL);\n  user_phone := COALESCE(NEW.raw_user_meta_data->>'phone', NULL);\n\n  -- Inserir profile com todos os dados disponíveis\n  INSERT INTO public.profiles (id, email, full_name, phone)\n  VALUES (NEW.id, NEW.email, user_full_name, user_phone);\n  \n  RETURN NEW;\nEXCEPTION \n  WHEN unique_violation THEN\n    -- Se o profile já existe, tentar atualizar com novos dados\n    UPDATE public.profiles \n    SET \n      full_name = COALESCE(user_full_name, full_name),\n      phone = COALESCE(user_phone, phone),\n      updated_at = NOW()\n    WHERE id = NEW.id;\n    RETURN NEW;\n  WHEN OTHERS THEN\n    -- Log do erro para debug\n    RAISE WARNING 'Erro ao criar/atualizar profile para user %: %', NEW.id, SQLERRM;\n    -- Ainda assim retorna NEW para não bloquear a criação do user\n    RETURN NEW;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "generate_order_number",
    "arguments": "",
    "return_type": "trigger",
    "is_security_definer": false,
    "volatility": "v",
    "is_leak_proof": false,
    "function_definition": "CREATE OR REPLACE FUNCTION public.generate_order_number()\n RETURNS trigger\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n  NEW.order_number := 'MS-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || \n    LPAD(NEXTVAL('order_number_seq')::TEXT, 5, '0');\n  RETURN NEW;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "is_admin_user",
    "arguments": "",
    "return_type": "boolean",
    "is_security_definer": true,
    "volatility": "v",
    "is_leak_proof": false,
    "function_definition": "CREATE OR REPLACE FUNCTION public.is_admin_user()\n RETURNS boolean\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public', 'auth'\nAS $function$\nDECLARE\n  user_role text;\nBEGIN\n  -- Verificar se existe sessão ativa\n  IF auth.uid() IS NULL THEN\n    RETURN FALSE;\n  END IF;\n\n  -- Buscar role do usuário atual diretamente (sem RLS)\n  -- Esta query NÃO dispara policies pois a função é SECURITY DEFINER\n  SELECT role INTO user_role\n  FROM public.profiles \n  WHERE id = auth.uid();\n\n  -- Retornar true se é admin, false caso contrário\n  RETURN COALESCE(user_role = 'admin', FALSE);\n\nEXCEPTION \n  WHEN NO_DATA_FOUND THEN\n    -- Usuário não tem profile, não é admin\n    RETURN FALSE;\n  WHEN OTHERS THEN\n    -- Em caso de qualquer erro, assumir que não é admin por segurança\n    RAISE WARNING 'Erro ao verificar admin para user %: %', auth.uid(), SQLERRM;\n    RETURN FALSE;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "update_updated_at",
    "arguments": "",
    "return_type": "trigger",
    "is_security_definer": false,
    "volatility": "v",
    "is_leak_proof": false,
    "function_definition": "CREATE OR REPLACE FUNCTION public.update_updated_at()\n RETURNS trigger\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n  NEW.updated_at = NOW();\n  RETURN NEW;\nEND;\n$function$\n"
  }
]