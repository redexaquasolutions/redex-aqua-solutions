
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors ${
      isActive
        ? 'text-brand-primary dark:text-brand-light'
        : 'text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-sm rounded ${
      isActive
        ? 'bg-brand-primary text-white'
        : 'text-gray-700 dark:text-gray-300 hover:bg-brand-light dark:hover:bg-gray-700'
    }`;

  return (
    <header className="bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 dark:border-b dark:border-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src="https://i.postimg.cc/dtVDBCn3/Whats-App-Image-2025-10-22-at-16-49-02.jpg" alt="Redex Aqua Solutions Logo" className="h-16" loading="eager" decoding="async" />
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-8">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
              <NavLink to="/education" className={navLinkClasses}>Knowledge Hub</NavLink>
              <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            </nav>
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-gray-700 dark:text-gray-300 hover:text-brand-primary focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/products" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Products</NavLink>
                <NavLink to="/education" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Knowledge Hub</NavLink>
                <NavLink to="/about" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
        </div>
      )}
    </header>
  );
};
