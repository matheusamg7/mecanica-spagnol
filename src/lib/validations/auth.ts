// Schemas de validação de autenticação - Mecânica Spagnol

import { z } from 'zod';

// Validação de CPF brasileiro
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

// Validação de telefone brasileiro
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

// Schema de login
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

// Schema de registro/cadastro
export const registerSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(72, 'Senha deve ter no máximo 72 caracteres'),
  confirmPassword: z
    .string()
    .min(1, 'Confirmação de senha é obrigatória'),
  full_name: z
    .string()
    .min(1, 'Nome completo é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim(),
  phone: z
    .string()
    .regex(phoneRegex, 'Telefone inválido')
    .optional()
    .or(z.literal('')),
  acceptTerms: z
    .boolean()
    .refine(val => val === true, 'Você deve aceitar os termos de uso'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"],
});

// Schema de recuperação de senha
export const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido')
    .toLowerCase()
    .trim(),
});

// Schema de nova senha (após recuperação)
export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(72, 'Senha deve ter no máximo 72 caracteres'),
  confirmPassword: z
    .string()
    .min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"],
});

// Schema de atualização de perfil
export const profileUpdateSchema = z.object({
  full_name: z
    .string()
    .min(1, 'Nome completo é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim(),
  phone: z
    .string()
    .regex(phoneRegex, 'Telefone inválido')
    .optional()
    .or(z.literal('')),
  cpf: z
    .string()
    .regex(cpfRegex, 'CPF inválido')
    .optional()
    .or(z.literal('')),
});

// Schema de alteração de senha (usuário logado)
export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, 'Senha atual é obrigatória'),
  newPassword: z
    .string()
    .min(1, 'Nova senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(72, 'Senha deve ter no máximo 72 caracteres'),
  confirmNewPassword: z
    .string()
    .min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Senhas não coincidem",
  path: ["confirmNewPassword"],
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: "A nova senha deve ser diferente da atual",
  path: ["newPassword"],
});