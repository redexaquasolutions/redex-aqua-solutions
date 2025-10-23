import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="text-center py-16 bg-red-50/95 backdrop-blur-sm dark:bg-red-900/40 rounded-lg shadow-md mx-auto my-8 container px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-4">
        <svg className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">Oops! Something went wrong.</h3>
      <p className="mt-2 text-red-600 dark:text-red-400 max-w-md mx-auto">{message}</p>
      {onRetry && (
         <button
            onClick={onRetry}
            className="mt-6 bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
         >
            Try Again
         </button>
      )}
    </div>
  );
};