import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export const EducationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light">Farmer's Knowledge Hub</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Empowering you with the knowledge for a better harvest.</p>
      </div>

      {/* Guides Section */}
      <section>
        <h2 className="text-3xl font-bold text-brand-primary mb-8">Guides on Prawn Health & Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative w-full h-40 rounded-md mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700 animate-pulse">
                <img src={article.imageUrl} alt={article.title} loading="eager" decoding="async" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{article.excerpt}</p>
              <Link 
                to={`/education/${article.slug}`} 
                className="mt-auto font-semibold text-brand-secondary hover:underline self-start"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};