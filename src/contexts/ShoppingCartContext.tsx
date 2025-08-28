import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  brand: string;
  rating: number;
  imageSrc: string;
  title: string;
  description: string;
  deliveryEstimate: string;
  soldCount: number;
  price: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, delta: number) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(x => x.id === item.id);
      if (existing) {
        return prev.map(x =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev =>
      prev
        .map(x =>
          x.id === id ? { ...x, quantity: Math.max(1, x.quantity + delta) } : x
        )
        .filter(x => x.quantity > 0)
    );
  };

  const totalItems = items.reduce((sum, x) => sum + x.quantity, 0);
  const totalPrice = items.reduce((sum, x) => sum + x.price * x.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};