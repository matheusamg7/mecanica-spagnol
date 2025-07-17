// Cart Store - Mecânica Spagnol
// Estado global do carrinho de compras usando Zustand

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/database';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  price: number; // Preço no momento da adição
  addedAt: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
  
  // Actions
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  
  // Computed values
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTotal: () => number;
  getItemQuantity: (productId: string) => number;
  hasItem: (productId: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isLoading: false,

      // Actions
      addItem: (product: Product, quantity = 1) => {
        const state = get();
        const existingItem = state.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
          // Se já existe, atualiza a quantidade
          const newQuantity = existingItem.quantity + quantity;
          // Verifica se não excede o estoque
          const maxQuantity = Math.min(newQuantity, product.stock_quantity);
          
          set({
            items: state.items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: maxQuantity }
                : item
            ),
          });
        } else {
          // Se não existe, adiciona novo item
          const finalQuantity = Math.min(quantity, product.stock_quantity);
          const newItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            product,
            quantity: finalQuantity,
            price: product.sale_price || product.price,
            addedAt: new Date().toISOString(),
          };
          
          set({
            items: [...state.items, newItem],
          });
        }
      },

      removeItem: (productId: string) => {
        const state = get();
        set({
          items: state.items.filter(item => item.product.id !== productId),
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        const state = get();
        
        if (quantity <= 0) {
          // Se quantidade é 0 ou menor, remove o item
          get().removeItem(productId);
          return;
        }
        
        set({
          items: state.items.map(item =>
            item.product.id === productId
              ? { 
                  ...item, 
                  quantity: Math.min(quantity, item.product.stock_quantity) 
                }
              : item
          ),
        });
      },

      clearCart: () => {
        set({
          items: [],
          isOpen: false,
        });
      },

      toggleCart: () => {
        const state = get();
        set({ isOpen: !state.isOpen });
      },

      setIsOpen: (isOpen: boolean) => {
        set({ isOpen });
      },

      // Computed values
      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const state = get();
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      getShipping: () => {
        const state = get();
        const subtotal = state.getSubtotal();
        
        // Regras de frete
        if (subtotal === 0) return 0;
        if (subtotal >= 200) return 0; // Frete grátis acima de R$ 200
        return 15.90; // Frete padrão
      },

      getTotal: () => {
        const state = get();
        return state.getSubtotal() + state.getShipping();
      },

      getItemQuantity: (productId: string) => {
        const state = get();
        const item = state.items.find(item => item.product.id === productId);
        return item ? item.quantity : 0;
      },

      hasItem: (productId: string) => {
        const state = get();
        return state.items.some(item => item.product.id === productId);
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        // Não persistir isOpen para evitar problemas de hidratação
      }),
    }
  )
);

// Hook para usar o carrinho de forma mais segura
export const useCart = () => {
  const store = useCartStore();
  
  return {
    ...store,
    // Formatadores de preço
    formatPrice: (price: number) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price);
    },
    
    // Verificar se um produto pode ser adicionado
    canAddToCart: (product: Product, quantity: number = 1) => {
      const currentQuantity = store.getItemQuantity(product.id);
      return (currentQuantity + quantity) <= product.stock_quantity;
    },
    
    // Obter quantidade disponível para adicionar
    getAvailableQuantity: (product: Product) => {
      const currentQuantity = store.getItemQuantity(product.id);
      return product.stock_quantity - currentQuantity;
    },
  };
};

