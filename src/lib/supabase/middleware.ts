import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { Database } from '@/types/supabase';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Verificar sessão do usuário
  const { data: { user } } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;

  // Rotas que requerem autenticação
  const protectedRoutes = [
    '/minha-conta',
    '/meus-pedidos',
    '/checkout',
    '/carrinho', // carrinho também requer auth para finalizar compra
  ];

  // Rotas que requerem role admin
  const adminRoutes = ['/admin'];

  // Rotas públicas de autenticação
  const authRoutes = ['/login', '/cadastro'];

  // Verificar se é rota protegida e usuário não está autenticado
  if (protectedRoutes.some(route => path.startsWith(route)) && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirect', path);
    return NextResponse.redirect(url);
  }

  // Verificar permissão admin
  if (adminRoutes.some(route => path.startsWith(route))) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      url.searchParams.set('redirect', path);
      return NextResponse.redirect(url);
    }

    // Buscar role do usuário
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  // Redirecionar usuários autenticados de páginas de auth
  if (authRoutes.includes(path) && user) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}