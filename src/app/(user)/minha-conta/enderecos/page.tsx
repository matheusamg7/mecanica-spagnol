// Página de Gestão de Endereços - Mecânica Spagnol

'use client';

import { useState, useEffect } from 'react';
import { useAuthContext } from '@/contexts/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AddressForm } from '@/components/user/address-form';
import { 
  getAddresses, 
  createAddress, 
  updateAddress, 
  deleteAddress, 
  setDefaultAddress,
  AddressInput 
} from '@/lib/api/addresses';
import { Address } from '@/types/database';
import { toast } from 'sonner';
import { 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  Home, 
  Loader2,
  AlertCircle 
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function EnderecosPage() {
  const { user } = useAuthContext();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [deletingAddress, setDeletingAddress] = useState<Address | null>(null);

  // Carregar endereços
  const loadAddresses = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const response = await getAddresses(user.id);
      if (response.success && response.data) {
        setAddresses(response.data as Address[]);
      } else {
        toast.error('Erro ao carregar endereços');
      }
    } catch (error) {
      toast.error('Erro ao carregar endereços');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, [user]);

  // Criar ou atualizar endereço
  const handleSubmit = async (data: AddressInput) => {
    if (!user) return;

    try {
      if (editingAddress) {
        // Atualizar
        const response = await updateAddress(editingAddress.id, user.id, data);
        if (response.success) {
          toast.success('Endereço atualizado com sucesso!');
          await loadAddresses();
        } else {
          toast.error(response.error || 'Erro ao atualizar endereço');
        }
      } else {
        // Criar
        const response = await createAddress(user.id, data);
        if (response.success) {
          toast.success('Endereço cadastrado com sucesso!');
          await loadAddresses();
        } else {
          toast.error(response.error || 'Erro ao cadastrar endereço');
        }
      }
    } catch (error) {
      toast.error('Erro inesperado');
    }
  };

  // Definir como padrão
  const handleSetDefault = async (addressId: string) => {
    if (!user) return;

    try {
      const response = await setDefaultAddress(addressId, user.id);
      if (response.success) {
        toast.success('Endereço padrão alterado!');
        await loadAddresses();
      } else {
        toast.error(response.error || 'Erro ao definir endereço padrão');
      }
    } catch (error) {
      toast.error('Erro ao definir endereço padrão');
    }
  };

  // Deletar endereço
  const handleDelete = async () => {
    if (!user || !deletingAddress) return;

    try {
      const response = await deleteAddress(deletingAddress.id, user.id);
      if (response.success) {
        toast.success('Endereço removido com sucesso!');
        setDeletingAddress(null);
        await loadAddresses();
      } else {
        toast.error(response.error || 'Erro ao remover endereço');
      }
    } catch (error) {
      toast.error('Erro ao remover endereço');
    }
  };

  // Abrir form para editar
  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setFormOpen(true);
  };

  // Abrir form para criar
  const handleCreate = () => {
    setEditingAddress(null);
    setFormOpen(true);
  };

  // Fechar form
  const handleCloseForm = () => {
    setFormOpen(false);
    setEditingAddress(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Meus Endereços</h1>
          <p className="text-muted-foreground">
            Gerencie seus endereços de entrega
          </p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Endereço
        </Button>
      </div>

      {/* Lista de Endereços */}
      {addresses.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Nenhum endereço cadastrado</h3>
            <p className="text-muted-foreground text-center mb-4">
              Adicione um endereço para facilitar suas compras
            </p>
            <Button onClick={handleCreate}>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Primeiro Endereço
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {addresses.map((address) => (
            <Card key={address.id} className={address.is_default ? 'border-primary' : ''}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-base flex items-center gap-2">
                      {address.street}, {address.number}
                      {address.is_default && (
                        <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          <Home className="h-3 w-3" />
                          Padrão
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {address.complement && `${address.complement} - `}
                      {address.neighborhood}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(address)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeletingAddress(address)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {address.city} - {address.state}
                </p>
                <p className="text-sm text-muted-foreground">
                  CEP: {address.cep.replace(/(\d{5})(\d{3})/, '$1-$2')}
                </p>
                {!address.is_default && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    Definir como padrão
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Informações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Informações Importantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• O endereço padrão será usado automaticamente em suas compras</li>
            <li>• Você pode ter múltiplos endereços cadastrados</li>
            <li>• Use o CEP para preencher automaticamente os campos</li>
            <li>• Mantenha pelo menos um endereço cadastrado</li>
          </ul>
        </CardContent>
      </Card>

      {/* Formulário de Endereço */}
      <AddressForm
        open={formOpen}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        address={editingAddress || undefined}
        isEditing={!!editingAddress}
      />

      {/* Dialog de Confirmação de Exclusão */}
      <AlertDialog 
        open={!!deletingAddress} 
        onOpenChange={() => setDeletingAddress(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja remover este endereço? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Remover
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}