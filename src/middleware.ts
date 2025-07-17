import { updateSession } from '@/lib/supabase/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

// Rotas que requerem autenticação
const protectedRoutes = ['/minha-conta', '/checkout'];

// Rotas que requerem role admin
const adminRoutes = ['/admin'];

// Rotas que devem redirecionar se já estiver logado
const authRoutes = ['/login', '/cadastro'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('🛡️ [middleware] Iniciado para:', pathname);
  
  // Atualizar sessão primeiro
  const response = await updateSession(request);
  console.log('🔄 [middleware] Session atualizada');
  
  // Criar cliente Supabase no middleware
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: Record<string, unknown>) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Obter sessão atual
  const { data: { session } } = await supabase.auth.getSession();
  console.log('🔍 [middleware] Session check:', { 
    pathname, 
    hasSession: !!session,
    userId: session?.user?.id 
  });

  // Verificar rotas protegidas
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  console.log('🔍 [middleware] Route analysis:', {
    isProtectedRoute,
    isAdminRoute, 
    isAuthRoute,
    hasSession: !!session
  });

  // Redirecionar para login se não autenticado em rotas protegidas
  if ((isProtectedRoute || isAdminRoute) && !session) {
    console.log('🚫 [middleware] Sem auth para rota protegida, redirecionando para login');
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Verificar permissão de admin
  if (isAdminRoute && session) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // TEMPORARIAMENTE DESABILITADO: Redirecionar para home se já autenticado em páginas de auth
  // Este redirect estava causando loops e bloqueando navegação
  // Deixar o AuthLayout lidar com isso via server-side check mais confiável
  if (isAuthRoute && session) {
    console.log('ℹ️ [middleware] Usuário logado tentando acessar auth route - deixando AuthLayout decidir');
    // return NextResponse.redirect(new URL('/', request.url));
  }

  console.log('✅ [middleware] Permitindo acesso a:', pathname);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes that don't need auth
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};