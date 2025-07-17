// Types do Store (Zustand) - Mecânica Spagnol

import { Product, CartItem, Profile } from './database';

// Cart Store
export interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  isOpen: boolean;
  
  // Actions
  addItem: (product: Product, quantity?: number) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  loadCart: () => Promise<void>;
  syncCart: () => Promise<void>;
  toggleCart: () => void;
  
  // Computed
  getTotalItems: () => number;
  getSubtotal: () => number;
  getItemsWithProducts: () => (CartItem & { product: Product })[];
}

// User Store
export interface UserStore {
  user: Profile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: Profile | null) => void;
  loadUser: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
}

// UI Store (para controle de estado da interface)
export interface UIStore {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  
  // Actions
  toggleCart: () => void;
  toggleMobileMenu: () => void;
  toggleSearch: () => void;
  closeAll: () => void;
}

// Notification Store (para toasts/alertas)
export interface NotificationStore {
  notifications: Notification[];
  
  // Actions
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  duration?: number;
}