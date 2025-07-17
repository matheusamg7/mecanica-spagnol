// Página de Recuperação de Senha - Mecânica Spagnol

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { ArrowLeft, Mail } from 'lucide-react';
import { AuthFormWrapper } from '@/components/auth/auth-form-wrapper';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuthContext } from '@/contexts/auth-context';
import { resetPasswordSchema } from '@/lib/validations/auth';
import Link from 'next/link';

type ResetPasswordFormData = {
  email: string;
};

export default function RecuperarSenhaPage() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();
  const { resetPassword } = useAuthContext();

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(data: ResetPasswordFormData) {
    try {
      setLoading(true);
      
      const success = await resetPassword(data.email);
      
      if (success) {
        setEmailSent(true);
        toast.success('Email enviado!', {
          description: 'Verifique sua caixa de entrada para redefinir sua senha.',
        });
      } else {
        toast.error('Erro ao enviar email. Verifique o endereço e tente novamente.');
      }
    } catch {
      toast.error('Erro inesperado. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  if (emailSent) {
    return (
      <AuthFormWrapper
        title="Email enviado!"
        showLogo={true}
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>

          <Alert>
            <AlertDescription className="text-center">
              Enviamos um email para <strong>{form.getValues('email')}</strong> com 
              instruções para redefinir sua senha.
            </AlertDescription>
          </Alert>

          <div className="space-y-2 text-center text-sm text-muted-foreground">
            <p>
              Não recebeu o email? Verifique sua pasta de spam ou lixo eletrônico.
            </p>
            <p>
              Se ainda não recebeu, você pode{' '}
              <button
                type="button"
                onClick={() => {
                  setEmailSent(false);
                  form.reset();
                }}
                className="text-primary hover:underline"
              >
                tentar novamente
              </button>
              .
            </p>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => router.push('/login')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o login
          </Button>
        </div>
      </AuthFormWrapper>
    );
  }

  return (
    <AuthFormWrapper
      title="Recuperar senha"
      description="Digite seu email e enviaremos instruções para redefinir sua senha"
      loading={loading}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar email de recuperação"}
          </Button>

          <div className="text-center">
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="inline-block mr-1 h-3 w-3" />
              Voltar para o login
            </Link>
          </div>
        </form>
      </Form>
    </AuthFormWrapper>
  );
}