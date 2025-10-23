import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { StarRating } from './StarRating';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasReviews = product.reviews && product.reviews.length > 0;
  
  const averageRating = hasReviews
    ? product.reviews!.reduce((acc, review) => acc + review.rating, 0) / product.reviews!.length
    : 0;

  return (
    <div className="group bg-white/90 backdrop-blur-sm dark:bg-gray-800/95 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700 animate-pulse">
        <img loading="eager" decoding="async" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" src={product.images[0]} alt={product.name} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>

        <div className="mt-auto">
           <div className="mb-4 min-h-[20px]">
            {hasReviews ? (
              <div className="flex items-center justify-center">
                <StarRating rating={averageRating} />
                <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  ({product.reviews!.length} review{product.reviews!.length > 1 ? 's' : ''})
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center">No reviews yet</p>
            )}
          </div>
          <div className="text-center">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center bg-brand-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-50"
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};