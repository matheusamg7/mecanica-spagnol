// Tipos de autenticação - Mecânica Spagnol

import { z } from 'zod';

// Schema de login
export const loginFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

// Schema de registro
export const registerFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string(),
  full_name: z.string().min(3, 'Nome completo é obrigatório'),
  phone: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

// Schema de recuperação de senha
export const resetPasswordFormSchema = z.object({
  email: z.string().email('Email inválido'),
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordFormSchema>;

// Schema de nova senha
export const newPasswordFormSchema = z.object({
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"],
});

export type NewPasswordFormData = z.infer<typeof newPasswordFormSchema>;

// Tipos de erro de autenticação
export enum AuthErrorType {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  WEAK_PASSWORD = 'WEAK_PASSWORD',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

// Mensagens de erro em português
export const authErrorMessages: Record<AuthErrorType, string> = {
  [AuthErrorType.INVALID_CREDENTIALS]: 'Email ou senha inválidos',
  [AuthErrorType.USER_NOT_FOUND]: 'Usuário não encontrado',
  [AuthErrorType.EMAIL_ALREADY_EXISTS]: 'Este email já está cadastrado',
  [AuthErrorType.WEAK_PASSWORD]: 'A senha deve ter no mínimo 6 caracteres',
  [AuthErrorType.NETWORK_ERROR]: 'Erro de conexão. Verifique sua internet',
  [AuthErrorType.UNKNOWN_ERROR]: 'Erro inesperado. Tente novamente',
};

// Interface para resposta de autenticação
export interface AuthError {
  type: AuthErrorType;
  message: string;
}