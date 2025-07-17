// API de Endereços - Mecânica Spagnol

import { supabase } from '@/lib/supabase/client';
import { Address } from '@/types/database';

export interface AddressInput {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  is_default?: boolean;
}

export interface AddressResponse {
  success: boolean;
  data?: Address | Address[];
  error?: string;
}

// Buscar todos os endereços do usuário
export async function getAddresses(userId: string): Promise<AddressResponse> {
  try {
    const { data, error } = await supabase
      .from('addresses')
      .select('*')
      .eq('user_id', userId)
      .order('is_default', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      return {
        success: false,
        error: 'Erro ao buscar endereços',
      };
    }

    return {
      success: true,
      data: data || [],
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao buscar endereços',
    };
  }
}

// Buscar endereço por ID
export async function getAddressById(addressId: string, userId: string): Promise<AddressResponse> {
  try {
    const { data, error } = await supabase
      .from('addresses')
      .select('*')
      .eq('id', addressId)
      .eq('user_id', userId)
      .single();

    if (error) {
      return {
        success: false,
        error: 'Endereço não encontrado',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro ao buscar endereço',
    };
  }
}

// Criar novo endereço
export async function createAddress(userId: string, address: AddressInput): Promise<AddressResponse> {
  try {
    // Se for marcado como padrão, desmarcar outros
    if (address.is_default) {
      await supabase
        .from('addresses')
        .update({ is_default: false })
        .eq('user_id', userId);
    }

    const { data, error } = await supabase
      .from('addresses')
      .insert({
        user_id: userId,
        ...address,
      })
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: 'Erro ao criar endereço',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao criar endereço',
    };
  }
}

// Atualizar endereço
export async function updateAddress(
  addressId: string, 
  userId: string, 
  address: Partial<AddressInput>
): Promise<AddressResponse> {
  try {
    // Se for marcado como padrão, desmarcar outros
    if (address.is_default) {
      await supabase
        .from('addresses')
        .update({ is_default: false })
        .eq('user_id', userId)
        .neq('id', addressId);
    }

    const { data, error } = await supabase
      .from('addresses')
      .update(address)
      .eq('id', addressId)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: 'Erro ao atualizar endereço',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao atualizar endereço',
    };
  }
}

// Deletar endereço
export async function deleteAddress(addressId: string, userId: string): Promise<AddressResponse> {
  try {
    // Verificar se é o único endereço
    const { data: addresses } = await supabase
      .from('addresses')
      .select('id')
      .eq('user_id', userId);

    if (addresses && addresses.length === 1) {
      return {
        success: false,
        error: 'Você precisa ter pelo menos um endereço cadastrado',
      };
    }

    const { error } = await supabase
      .from('addresses')
      .delete()
      .eq('id', addressId)
      .eq('user_id', userId);

    if (error) {
      return {
        success: false,
        error: 'Erro ao deletar endereço',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao deletar endereço',
    };
  }
}

// Definir endereço como padrão
export async function setDefaultAddress(addressId: string, userId: string): Promise<AddressResponse> {
  try {
    // Desmarcar todos como padrão
    await supabase
      .from('addresses')
      .update({ is_default: false })
      .eq('user_id', userId);

    // Marcar o selecionado como padrão
    const { data, error } = await supabase
      .from('addresses')
      .update({ is_default: true })
      .eq('id', addressId)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: 'Erro ao definir endereço padrão',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao definir endereço padrão',
    };
  }
}

// Buscar endereço no ViaCEP
export async function fetchAddressByCEP(cep: string): Promise<{
  success: boolean;
  data?: {
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  error?: string;
}> {
  try {
    // Remove caracteres não numéricos
    const cleanCEP = cep.replace(/\D/g, '');

    if (cleanCEP.length !== 8) {
      return {
        success: false,
        error: 'CEP inválido',
      };
    }

    const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
    const data = await response.json();

    if (data.erro) {
      return {
        success: false,
        error: 'CEP não encontrado',
      };
    }

    return {
      success: true,
      data: {
        cep: data.cep,
        street: data.logradouro || '',
        neighborhood: data.bairro || '',
        city: data.localidade || '',
        state: data.uf || '',
      },
    };
  } catch (error) {
    return {
      success: false,
      error: 'Erro ao buscar CEP',
    };
  }
}