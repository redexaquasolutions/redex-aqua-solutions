import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShareButtons } from '../components/ShareButtons';
import { MinusIcon, PlusIcon } from '../components/icons/Icons';

const MIN_FONT_SIZE = 0.8;
const MAX_FONT_SIZE = 1.6;

export const ArticlePage: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const [fontSize, setFontSize] = useState(1);
  const article = articles.find(a => a.slug === articleSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleSlug]);

  if (!article) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-brand-dark">Article Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the article you're looking for.</p>
        <Link to="/education" className="mt-8 inline-block bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark transition-colors">
          Back to Knowledge Hub
        </Link>
      </div>
    );
  }
  
  const handleIncreaseFontSize = () => {
    setFontSize(prev => Math.min(MAX_FONT_SIZE, prev + 0.1));
  };

  const handleDecreaseFontSize = () => {
    setFontSize(prev => Math.max(MIN_FONT_SIZE, prev - 0.1));
  };


  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Knowledge Hub', path: '/education' },
    { label: article.title },
  ];

  const shareUrl = window.location.href;
  const shareTitle = `${article.title} - Redex Aqua Solutions`;
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb crumbs={crumbs} />
        <div className="bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 p-10 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
            {/* FIX: Corrected the `fetchpriority` attribute to `fetchPriority` to align with React's property naming conventions. */}
            <img src={article.imageUrl} alt={article.title} fetchPriority="high" loading="eager" decoding="async" className="w-full h-64 object-cover rounded-lg mb-8" />
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center justify-between my-4 gap-4">
              <ShareButtons url={shareUrl} title={shareTitle} />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Text Size:</span>
                <button
                  onClick={handleDecreaseFontSize}
                  disabled={fontSize <= MIN_FONT_SIZE}
                  className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Decrease font size"
                >
                  <MinusIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={handleIncreaseFontSize}
                  disabled={fontSize >= MAX_FONT_SIZE}
                  className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Increase font size"
                >
                  <PlusIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700"></div>
            <div 
              className="mt-6 rounded-lg shadow-md p-6 md:p-8 bg-white dark:bg-gray-900 article-content text-gray-800 dark:text-gray-300"
              style={{ '--font-size-multiplier': fontSize } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
        </div>
    </div>
  );
};