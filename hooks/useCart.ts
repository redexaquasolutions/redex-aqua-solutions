
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// This hook is no longer used as e-commerce functionality has been removed.
export const useCart = () => {
  return useContext(CartContext);
};
