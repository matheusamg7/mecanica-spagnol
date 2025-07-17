// Formulário de Endereço - Mecânica Spagnol

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { AddressFormData } from '@/lib/validations/profile';
import { fetchAddressByCEP } from '@/lib/api/addresses';
import { toast } from 'sonner';
import { Loader2, Search } from 'lucide-react';
import { Address } from '@/types/database';

interface AddressFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: AddressFormData) => Promise<void>;
  address?: Address;
  isEditing?: boolean;
}

export function AddressForm({ open, onClose, onSubmit, address, isEditing }: AddressFormProps) {
  const [loading, setLoading] = useState(false);
  const [searchingCEP, setSearchingCEP] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<AddressFormData>({
    defaultValues: address ? {
      cep: formatCEP(address.cep),
      street: address.street,
      number: address.number,
      complement: address.complement || '',
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      is_default: address.is_default,
    } : {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      is_default: false,
    },
  });

  const cepValue = watch('cep');

  // Buscar endereço pelo CEP
  const handleCEPSearch = async () => {
    const cleanCEP = cepValue?.replace(/\D/g, '');
    if (!cleanCEP || cleanCEP.length !== 8) {
      toast.error('Digite um CEP válido');
      return;
    }

    setSearchingCEP(true);
    try {
      const response = await fetchAddressByCEP(cleanCEP);
      
      if (response.success && response.data) {
        setValue('street', response.data.street);
        setValue('neighborhood', response.data.neighborhood);
        setValue('city', response.data.city);
        setValue('state', response.data.state);
        toast.success('Endereço encontrado!');
      } else {
        toast.error(response.error || 'CEP não encontrado');
      }
    } catch (error) {
      toast.error('Erro ao buscar CEP');
    } finally {
      setSearchingCEP(false);
    }
  };

  const onSubmitForm = async (data: AddressFormData) => {
    setLoading(true);
    try {
      await onSubmit(data);
      reset();
      onClose();
    } catch (error) {
      // Erro já tratado no componente pai
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  function formatCEP(value: string) {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value;
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Editar Endereço' : 'Adicionar Endereço'}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? 'Atualize as informações do endereço' 
              : 'Preencha os dados do novo endereço de entrega'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          {/* CEP */}
          <div className="space-y-2">
            <Label htmlFor="cep">CEP</Label>
            <div className="flex gap-2">
              <Input
                id="cep"
                {...register('cep')}
                placeholder="00000-000"
                onChange={(e) => {
                  const formatted = formatCEP(e.target.value);
                  e.target.value = formatted;
                }}
                maxLength={9}
                className={errors.cep ? 'border-red-500' : ''}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleCEPSearch}
                disabled={searchingCEP}
              >
                {searchingCEP ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.cep && (
              <p className="text-sm text-red-500">{errors.cep.message}</p>
            )}
          </div>

          {/* Rua */}
          <div className="space-y-2">
            <Label htmlFor="street">Rua</Label>
            <Input
              id="street"
              {...register('street')}
              placeholder="Nome da rua"
              className={errors.street ? 'border-red-500' : ''}
            />
            {errors.street && (
              <p className="text-sm text-red-500">{errors.street.message}</p>
            )}
          </div>

          {/* Número e Complemento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="number">Número</Label>
              <Input
                id="number"
                {...register('number')}
                placeholder="123"
                className={errors.number ? 'border-red-500' : ''}
              />
              {errors.number && (
                <p className="text-sm text-red-500">{errors.number.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="complement">Complemento</Label>
              <Input
                id="complement"
                {...register('complement')}
                placeholder="Apto, Bloco..."
              />
            </div>
          </div>

          {/* Bairro */}
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              id="neighborhood"
              {...register('neighborhood')}
              placeholder="Nome do bairro"
              className={errors.neighborhood ? 'border-red-500' : ''}
            />
            {errors.neighborhood && (
              <p className="text-sm text-red-500">{errors.neighborhood.message}</p>
            )}
          </div>

          {/* Cidade e Estado */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                {...register('city')}
                placeholder="Nome da cidade"
                className={errors.city ? 'border-red-500' : ''}
              />
              {errors.city && (
                <p className="text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">Estado</Label>
              <Input
                id="state"
                {...register('state')}
                placeholder="UF"
                maxLength={2}
                style={{ textTransform: 'uppercase' }}
                className={errors.state ? 'border-red-500' : ''}
              />
              {errors.state && (
                <p className="text-sm text-red-500">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Endereço Padrão */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="is_default"
              {...register('is_default')}
            />
            <Label
              htmlFor="is_default"
              className="text-sm font-normal cursor-pointer"
            >
              Definir como endereço padrão
            </Label>
          </div>

          {/* Botões */}
          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Salvando...
                </>
              ) : (
                isEditing ? 'Salvar Alterações' : 'Adicionar Endereço'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}