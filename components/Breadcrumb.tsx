import React from 'react';
import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2 text-sm">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          if (index === 0) {
            return (
              <li key={index}>
                <Link to={crumb.path!} className="text-gray-500 hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                  {crumb.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={index} {...(isLast ? { 'aria-current': 'page' } : {})}>
              <div className="flex items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
                {isLast ? (
                  <span className="ml-2 font-medium text-gray-700 dark:text-gray-200 truncate">
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.path!} className="ml-2 text-gray-500 hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};