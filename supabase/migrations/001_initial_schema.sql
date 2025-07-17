-- Mecânica Spagnol - Schema Completo do Banco de Dados
-- Com Row Level Security (RLS) e Políticas de Segurança

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar ENUM types
CREATE TYPE user_role AS ENUM ('customer', 'admin');
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'failed', 'refunded');

-- ===================================================================
-- FUNÇÃO SECURITY DEFINER PARA VERIFICAR ADMIN (SEM RECURSÃO RLS)
-- ===================================================================

-- Função que verifica se o usuário atual é admin
-- SECURITY DEFINER permite que a função execute com privilégios elevados
-- bypassing as policies RLS da tabela profiles para evitar recursão infinita
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
    RETURN FALSE;
END;
$$;

-- Adicionar comentário explicativo na função
COMMENT ON FUNCTION public.is_admin_user() IS 
'Verifica se o usuário atual é admin. Função SECURITY DEFINER para bypassing RLS policies e evitar recursão infinita.';

-- 1. TABELA: profiles (extensão de auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  cpf TEXT UNIQUE,
  role user_role DEFAULT 'customer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS para profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies para profiles
CREATE POLICY "Usuários podem ver próprio perfil" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar próprio perfil" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Policy corrigida: usa função security definer para evitar recursão infinita
CREATE POLICY "Admins podem ver todos os perfis" ON profiles
  FOR SELECT USING (public.is_admin_user());

-- 2. TABELA: categories (categorias fixas)
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS para categories
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Policies para categories (públicas para leitura)
CREATE POLICY "Categorias são públicas para leitura" ON categories
  FOR SELECT USING (is_active = true);

-- Policy corrigida: usa função security definer para evitar recursão
CREATE POLICY "Apenas admins podem modificar categorias" ON categories
  FOR ALL USING (public.is_admin_user());

-- 3. TABELA: products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  sale_price DECIMAL(10, 2) CHECK (sale_price >= 0),
  stock_quantity INTEGER DEFAULT 0 CHECK (stock_quantity >= 0),
  category_id INTEGER REFERENCES categories(id),
  images JSONB DEFAULT '[]'::jsonb,
  specifications JSONB DEFAULT '{}'::jsonb,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para products
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_active ON products(is_active);

-- RLS para products
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policies para products
CREATE POLICY "Produtos ativos são públicos" ON products
  FOR SELECT USING (is_active = true);

-- Policy corrigida: usa função security definer para evitar recursão
CREATE POLICY "Apenas admins podem gerenciar produtos" ON products
  FOR ALL USING (public.is_admin_user());

-- 4. TABELA: cart_items
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- RLS para cart_items
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- Policies para cart_items
CREATE POLICY "Usuários podem gerenciar próprio carrinho" ON cart_items
  FOR ALL USING (auth.uid() = user_id);

-- 5. TABELA: addresses
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  cep TEXT NOT NULL,
  street TEXT NOT NULL,
  number TEXT NOT NULL,
  complement TEXT,
  neighborhood TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS para addresses
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;

-- Policies para addresses
CREATE POLICY "Usuários podem gerenciar próprios endereços" ON addresses
  FOR ALL USING (auth.uid() = user_id);

-- 6. TABELA: orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  address_id UUID REFERENCES addresses(id),
  status order_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  subtotal DECIMAL(10, 2) NOT NULL,
  shipping_cost DECIMAL(10, 2) DEFAULT 0,
  discount DECIMAL(10, 2) DEFAULT 0,
  total DECIMAL(10, 2) NOT NULL,
  notes TEXT,
  tracking_code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para orders
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at DESC);

-- RLS para orders
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policies para orders
CREATE POLICY "Usuários podem ver próprios pedidos" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem criar próprios pedidos" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy corrigida: usa função security definer para evitar recursão
CREATE POLICY "Admins podem gerenciar todos os pedidos" ON orders
  FOR ALL USING (public.is_admin_user());

-- 7. TABELA: order_items
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  product_name TEXT NOT NULL,
  product_sku TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS para order_items
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies para order_items
CREATE POLICY "Usuários podem ver itens de próprios pedidos" ON order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Usuários podem criar itens de próprios pedidos" ON order_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Policy corrigida: usa função security definer para evitar recursão
CREATE POLICY "Admins podem ver todos os itens" ON order_items
  FOR ALL USING (public.is_admin_user());

-- 8. TABELA: payment_intents (preparação para integração futura)
CREATE TABLE payment_intents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  provider TEXT, -- 'stripe', 'mercadopago', etc
  external_id TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  status payment_status DEFAULT 'pending',
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS para payment_intents
ALTER TABLE payment_intents ENABLE ROW LEVEL SECURITY;

-- Policies para payment_intents
CREATE POLICY "Usuários podem ver próprios pagamentos" ON payment_intents
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = payment_intents.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Apenas sistema pode criar pagamentos" ON payment_intents
  FOR INSERT WITH CHECK (false);

-- Policy corrigida: usa função security definer para evitar recursão
CREATE POLICY "Admins podem ver todos os pagamentos" ON payment_intents
  FOR SELECT USING (public.is_admin_user());

-- TRIGGERS E FUNCTIONS

-- Function para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger em tabelas relevantes
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON cart_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Dropar a função antiga e o trigger
DROP TRIGGER IF EXISTS create_profile_on_signup ON auth.users;
DROP FUNCTION IF EXISTS create_profile_for_user() CASCADE;

-- Criar a função corrigida com schema explícito e extração de metadata
CREATE OR REPLACE FUNCTION public.create_profile_for_user()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public, auth
LANGUAGE plpgsql
AS $$
DECLARE
  user_full_name text;
  user_phone text;
  user_cpf text;
BEGIN
  -- Extrair dados do raw_user_meta_data se existirem
  user_full_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NULL);
  user_phone := COALESCE(NEW.raw_user_meta_data->>'phone', NULL);
  user_cpf := COALESCE(NEW.raw_user_meta_data->>'cpf', NULL);

  -- Inserir profile com todos os dados disponíveis
  INSERT INTO public.profiles (id, email, full_name, phone, cpf)
  VALUES (NEW.id, NEW.email, user_full_name, user_phone, user_cpf);
  
  RETURN NEW;
EXCEPTION 
  WHEN unique_violation THEN
    -- Se o profile já existe, tentar atualizar com novos dados
    UPDATE public.profiles 
    SET 
      full_name = COALESCE(user_full_name, full_name),
      phone = COALESCE(user_phone, phone),
      cpf = COALESCE(user_cpf, cpf),
      updated_at = NOW()
    WHERE id = NEW.id;
    RETURN NEW;
  WHEN OTHERS THEN
    -- Log do erro para debug
    RAISE WARNING 'Erro ao criar/atualizar profile para user %: %', NEW.id, SQLERRM;
    -- Ainda assim retorna NEW para não bloquear a criação do user
    RETURN NEW;
END;
$$;

-- Recriar o trigger
CREATE TRIGGER create_profile_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION public.create_profile_for_user();

-- Function para gerar número de pedido único
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.order_number := 'MS-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || 
    LPAD(NEXTVAL('order_number_seq')::TEXT, 5, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Sequência para número de pedido
CREATE SEQUENCE order_number_seq START 1;

-- Trigger para gerar número de pedido
CREATE TRIGGER generate_order_number_trigger
  BEFORE INSERT ON orders
  FOR EACH ROW EXECUTE FUNCTION generate_order_number();

-- INSERIR CATEGORIAS FIXAS
INSERT INTO categories (name, slug, description) VALUES
  ('Caminhonetes a diesel', 'caminhonetes-a-diesel', 'Peças e acessórios para caminhonetes movidas a diesel'),
  ('Caminhões pesados', 'caminhoes-pesados', 'Componentes para caminhões de grande porte'),
  ('Ônibus rodoviários e urbanos', 'onibus-rodoviarios-urbanos', 'Peças para ônibus de transporte coletivo'),
  ('Máquinas agrícolas e tratores', 'maquinas-agricolas-tratores', 'Componentes para equipamentos agrícolas');

-- CONFIGURAR STORAGE BUCKET
-- Execute no painel do Supabase:
-- 1. Criar bucket "products" público para leitura
-- 2. Policies:
--    - Leitura pública para todos
--    - Upload apenas para admins