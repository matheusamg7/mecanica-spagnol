// Página de Segurança - Mecânica Spagnol

'use client';

import { useState } from 'react';
import { useAuthContext } from '@/contexts/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema } from '@/lib/validations/auth';
import { supabase } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { z } from 'zod';
import { Loader2, Shield, Lock, AlertCircle, CheckCircle } from 'lucide-react';

type PasswordFormData = z.infer<typeof changePasswordSchema>;

export default function SegurancaPage() {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: PasswordFormData) => {
    if (!user) return;

    setLoading(true);
    try {
      // Primeiro, verificar a senha atual fazendo re-autenticação
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: data.currentPassword,
      });

      if (signInError) {
        toast.error('Senha atual incorreta');
        setLoading(false);
        return;
      }

      // Se a senha atual está correta, atualizar para a nova
      const { error: updateError } = await supabase.auth.updateUser({
        password: data.newPassword,
      });

      if (updateError) {
        toast.error('Erro ao atualizar senha');
      } else {
        toast.success('Senha alterada com sucesso!');
        reset();
      }
    } catch (error) {
      toast.error('Erro inesperado ao alterar senha');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Segurança</h1>
        <p className="text-muted-foreground">
          Gerencie suas configurações de segurança
        </p>
      </div>

      {/* Formulário de Alteração de Senha */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Alterar Senha
          </CardTitle>
          <CardDescription>
            Atualize sua senha regularmente para manter sua conta segura
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Senha Atual */}
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Senha Atual</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPassword.current ? 'text' : 'password'}
                  {...register('currentPassword')}
                  placeholder="Digite sua senha atual"
                  className={errors.currentPassword ? 'border-red-500 pr-10' : 'pr-10'}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(prev => ({ ...prev, current: !prev.current }))}
                >
                  {showPassword.current ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.currentPassword && (
                <p className="text-sm text-red-500">{errors.currentPassword.message}</p>
              )}
            </div>

            {/* Nova Senha */}
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nova Senha</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPassword.new ? 'text' : 'password'}
                  {...register('newPassword')}
                  placeholder="Digite sua nova senha"
                  className={errors.newPassword ? 'border-red-500 pr-10' : 'pr-10'}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                >
                  {showPassword.new ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-sm text-red-500">{errors.newPassword.message}</p>
              )}
            </div>

            {/* Confirmar Nova Senha */}
            <div className="space-y-2">
              <Label htmlFor="confirmNewPassword">Confirmar Nova Senha</Label>
              <div className="relative">
                <Input
                  id="confirmNewPassword"
                  type={showPassword.confirm ? 'text' : 'password'}
                  {...register('confirmNewPassword')}
                  placeholder="Confirme sua nova senha"
                  className={errors.confirmNewPassword ? 'border-red-500 pr-10' : 'pr-10'}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                >
                  {showPassword.confirm ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.confirmNewPassword && (
                <p className="text-sm text-red-500">{errors.confirmNewPassword.message}</p>
              )}
            </div>

            {/* Requisitos de Senha */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium">Requisitos da senha:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  Mínimo de 6 caracteres
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  Deve ser diferente da senha atual
                </li>
              </ul>
            </div>

            {/* Botões */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 sm:flex-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Alterando...
                  </>
                ) : (
                  'Alterar Senha'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => reset()}
                disabled={loading}
                className="flex-1 sm:flex-none"
              >
                Limpar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Informações de Segurança */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Dicas de Segurança
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Use uma senha forte e única para sua conta</li>
            <li>• Nunca compartilhe sua senha com outras pessoas</li>
            <li>• Altere sua senha regularmente</li>
            <li>• Evite usar informações pessoais em sua senha</li>
            <li>• Se suspeitar de acesso não autorizado, altere sua senha imediatamente</li>
          </ul>
        </CardContent>
      </Card>

      {/* Sessões Ativas (Futuro) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Outras Configurações
          </CardTitle>
          <CardDescription>
            Recursos adicionais de segurança
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-1">Autenticação em Duas Etapas</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Adicione uma camada extra de segurança à sua conta
              </p>
              <Button variant="outline" size="sm" disabled>
                Em breve
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-1">Histórico de Sessões</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Veja onde sua conta foi acessada
              </p>
              <Button variant="outline" size="sm" disabled>
                Em breve
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}