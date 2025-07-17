// Schemas de validação de perfil e endereços - Mecânica Spagnol

import { z } from 'zod';

// Validação de CEP brasileiro
const cepRegex = /^\d{5}-?\d{3}$/;

// Schema de endereço
export const addressSchema = z.object({
  cep: z
    .string()
    .min(1, 'CEP é obrigatório')
    .regex(cepRegex, 'CEP deve ter o formato 00000-000')
    .transform(val => val.replace(/\D/g, '')), // Remove formatação para salvar
  street: z
    .string()
    .min(1, 'Rua é obrigatória')
    .min(3, 'Rua deve ter no mínimo 3 caracteres')
    .max(200, 'Rua deve ter no máximo 200 caracteres')
    .trim(),
  number: z
    .string()
    .min(1, 'Número é obrigatório')
    .max(10, 'Número deve ter no máximo 10 caracteres')
    .trim(),
  complement: z
    .string()
    .max(100, 'Complemento deve ter no máximo 100 caracteres')
    .optional()
    .or(z.literal('')),
  neighborhood: z
    .string()
    .min(1, 'Bairro é obrigatório')
    .min(2, 'Bairro deve ter no mínimo 2 caracteres')
    .max(100, 'Bairro deve ter no máximo 100 caracteres')
    .trim(),
  city: z
    .string()
    .min(1, 'Cidade é obrigatória')
    .min(2, 'Cidade deve ter no mínimo 2 caracteres')
    .max(100, 'Cidade deve ter no máximo 100 caracteres')
    .trim(),
  state: z
    .string()
    .min(1, 'Estado é obrigatório')
    .length(2, 'Estado deve ter 2 caracteres (UF)')
    .toUpperCase()
    .trim(),
  is_default: z
    .boolean()
    .optional()
    .default(false),
});

// Schema de alteração de senha (já estava em auth.ts, mas vou reexportar aqui para organização)
export { changePasswordSchema } from '@/lib/validations/auth';

// Schema para busca de CEP
export const cepSearchSchema = z.object({
  cep: z
    .string()
    .min(1, 'CEP é obrigatório')
    .regex(cepRegex, 'CEP inválido')
    .transform(val => val.replace(/\D/g, '')),
});

// Types - com is_default obrigatório no formulário
export type AddressFormData = {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  is_default: boolean;
};
export type CEPSearchData = z.infer<typeof cepSearchSchema>;