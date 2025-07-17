// Wrapper para formulários de autenticação - Mecânica Spagnol

'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface AuthFormWrapperProps {
  children: ReactNode;
  title: string;
  description?: string;
  showLogo?: boolean;
  footerText?: string;
  footerLink?: {
    text: string;
    href: string;
  };
  loading?: boolean;
  className?: string;
}

export function AuthFormWrapper({
  children,
  title,
  description,
  showLogo = true,
  footerText,
  footerLink,
  loading = false,
  className,
}: AuthFormWrapperProps) {
  return (
    <div className={cn('w-full', className)}>
      {showLogo && (
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              {/* Logo placeholder - substituir por logo real */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MS</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {siteConfig.name}
              </h1>
            </div>
          </Link>
        </div>
      )}

      <Card className="relative overflow-hidden">
        {loading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Processando...</p>
            </div>
          </div>
        )}

        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
          {description && (
            <CardDescription className="text-center">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent>{children}</CardContent>

        {(footerText || footerLink) && (
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  ou
                </span>
              </div>
            </div>

            {footerText && footerLink && (
              <p className="text-center text-sm text-muted-foreground">
                {footerText}{' '}
                <Link
                  href={footerLink.href}
                  className="font-medium text-primary hover:underline"
                >
                  {footerLink.text}
                </Link>
              </p>
            )}
          </CardFooter>
        )}
      </Card>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Ao continuar, você concorda com nossos{' '}
        <Link href="/termos" className="underline hover:text-primary">
          Termos de Uso
        </Link>{' '}
        e{' '}
        <Link href="/privacidade" className="underline hover:text-primary">
          Política de Privacidade
        </Link>
      </p>
    </div>
  );
}