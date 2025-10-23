import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { products as staticProducts } from '../data/products';

const fetchProductsAPI = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Removed the simulated failure to ensure products always load successfully.
      resolve(staticProducts);
    }, 1000); // 1 second delay to simulate network latency
  });
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProductsAPI();
      setProducts(data);
    } catch (err) {
      if (err instanceof Error) {
          setError(err.message);
      } else {
          setError('An unknown error occurred while fetching products.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
};