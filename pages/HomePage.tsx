
import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { SecondaryBanner } from '../components/SecondaryBanner';
import { useProducts } from '../hooks/useProducts';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingSpinner } from '../components/LoadingSpinner';

const FeaturedProductsSection: React.FC = () => {
  const { products, loading, error, refetch } = useProducts();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    // We only show the error message inside the component bounds, not taking the whole page
    return (
      <div className="bg-red-50/95 dark:bg-red-900/50 backdrop-blur-sm rounded-lg shadow-md py-8">
        <h3 className="text-xl font-bold text-red-700 dark:text-red-300 text-center">Could not load products.</h3>
        <p className="mt-2 text-red-600 dark:text-red-400 text-center text-sm">{error}</p>
        <div className="text-center mt-4">
          <button
              onClick={refetch}
              className="bg-brand-primary text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-brand-dark transition-colors"
          >
              Try Again
          </button>
        </div>
      </div>
    );
  }

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-dark transition-colors"
        >
          View All Products
        </Link>
      </div>
    </>
  );
}


export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark dark:text-brand-light">Featured Products</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Top-rated solutions for your farm's success.</p>
            </div>
            <FeaturedProductsSection />
          </div>
        </div>
      </section>
      <SecondaryBanner />
    </div>
  );
};
