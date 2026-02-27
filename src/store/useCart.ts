import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ============================================================
// TYPES
// ============================================================

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  personalization?: string;
}

export type CartMode = 'general' | 'business';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  mode: CartMode;
  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updatePersonalization: (id: string, text: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  setMode: (mode: CartMode) => void;
  getItemCount: () => number;
  hasItem: (id: string) => boolean;
}

// ============================================================
// STORE
// ============================================================

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      mode: 'general',

      addItem: (newItem) => {
        const existing = get().items.find((i) => i.id === newItem.id);
        if (existing) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isOpen: true,
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...newItem, quantity: 1 }],
            isOpen: true,
          }));
        }
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      updatePersonalization: (id, text) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, personalization: text } : i
          ),
        })),

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      setMode: (mode) => set({ mode }),

      getItemCount: () =>
        get().items.reduce((acc, item) => acc + item.quantity, 0),

      hasItem: (id) => get().items.some((i) => i.id === id),
    }),
    {
      name: 'regalos-cart',
      partialize: (state) => ({ items: state.items, mode: state.mode }),
    }
  )
);
