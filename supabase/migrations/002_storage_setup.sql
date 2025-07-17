-- Configuração do Storage Bucket para produtos
-- Execute este script após criar o bucket "products" no painel do Supabase

-- Policies do Storage Bucket "products"

-- 1. Permitir leitura pública de imagens
CREATE POLICY "Imagens públicas para leitura" ON storage.objects
  FOR SELECT USING (bucket_id = 'products');

-- 2. Permitir upload apenas para admins
CREATE POLICY "Admins podem fazer upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'products' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- 3. Permitir update apenas para admins
CREATE POLICY "Admins podem atualizar" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'products' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- 4. Permitir delete apenas para admins
CREATE POLICY "Admins podem deletar" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'products' AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- NOTA: Lembre-se de criar o bucket "products" no painel do Supabase:
-- 1. Vá para Storage no painel do Supabase
-- 2. Clique em "New bucket"
-- 3. Nome: products
-- 4. Public bucket: SIM (marque a opção)
-- 5. Clique em "Create bucket"