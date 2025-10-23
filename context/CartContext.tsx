
import React, { createContext, ReactNode } from 'react';

// This context is no longer used as e-commerce functionality has been removed.
export const CartContext = createContext<any>(undefined);

export const CartProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  return <>{children}</>;
};
