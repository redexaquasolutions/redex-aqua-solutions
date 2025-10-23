import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Reviews } from '../components/Reviews';
import { useProducts } from '../hooks/useProducts';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductCard } from '../components/ProductCard';
import { ShareButtons } from '../components/ShareButtons';
import { Review } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, loading, error, refetch } = useProducts();
  const [selectedImage, setSelectedImage] = useState('');
  const [activeTab, setActiveTab] = useState<'composition' | 'dosage' | 'benefits'>('benefits');

  const product = products.find(p => p.id === parseInt(productId || ''));
  
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setReviews(product.reviews || []);
    }
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [product]);

  const handleAddReview = (review: Omit<Review, 'id'>) => {
    const newReview: Review = {
        id: Date.now(),
        ...review
    };
    setReviews(prevReviews => [...prevReviews, newReview]);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-brand-dark">Product Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="mt-8 inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark transition-colors">
          Back to Products
        </Link>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: product.name },
  ];
  
  const shareUrl = window.location.href;
  const shareTitle = `Check out ${product.name} from Redex Aqua Solutions!`;

  const tabButtonClasses = (tabName: 'composition' | 'dosage' | 'benefits') => 
    `py-4 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none ${
      activeTab === tabName 
      ? 'border-brand-primary text-brand-primary dark:border-brand-light dark:text-brand-light' 
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
    }`;


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb crumbs={crumbs} />
      <div className="bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Product Image Gallery */}
          <div className="flex flex-col items-center justify-start">
            <div
              className="relative overflow-hidden rounded-lg shadow-md cursor-zoom-in group w-full max-w-md aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse"
            >
              <img
                src={selectedImage}
                alt={product.name}
                // FIX: Corrected the `fetchpriority` attribute to `fetchPriority` to align with React's property naming conventions.
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50 ${
                      selectedImage === img ? 'border-brand-primary' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="eager" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-brand-secondary uppercase tracking-wider">{product.category}</p>
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light my-2">{product.name}</h1>
            
            <ShareButtons url={shareUrl} title={shareTitle} />
            
            <div className="my-4 p-4 bg-brand-light bg-opacity-50 dark:bg-brand-dark/30 rounded-lg text-center">
              <p className="text-lg font-semibold text-brand-dark dark:text-brand-light">
                Please contact us for pricing information.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 flex-grow">{product.description}</p>
            
            {/* Tabs */}
            <div className="mt-auto">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button onClick={() => setActiveTab('benefits')} className={tabButtonClasses('benefits')}>
                    Benefits
                  </button>
                  <button onClick={() => setActiveTab('composition')} className={tabButtonClasses('composition')}>
                    Composition
                  </button>
                   <button onClick={() => setActiveTab('dosage')} className={tabButtonClasses('dosage')}>
                    Dosage
                  </button>
                </nav>
              </div>
              <div className="py-6 min-h-[120px]">
                {activeTab === 'benefits' && (
                  <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 animate-fade-in">
                    {product.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                  </ul>
                )}
                {activeTab === 'composition' && <p className="text-gray-700 dark:text-gray-300 animate-fade-in">{product.composition}</p>}
                {activeTab === 'dosage' && <p className="text-gray-700 dark:text-gray-300 animate-fade-in">{product.dosage}</p>}
              </div>
            </div>

            <Link 
                to="/contact"
                className="w-full text-center bg-brand-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Inquire to Purchase
            </Link>

          </div>
        </div>

        {/* Reviews Section */}
        <Reviews reviews={reviews} onAddReview={handleAddReview} />

      </div>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
