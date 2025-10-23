import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { useProducts } from '../hooks/useProducts';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const ProductsPage: React.FC = () => {
  const { products, loading, error, refetch } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name-asc');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const activeSuggestionRef = useRef<HTMLLIElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    if (!products) return ['All'];
    return ['All', ...Array.from(new Set(products.map(p => p.category)))];
  }, [products]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let filtered;

    if (!debouncedSearchTerm.trim()) {
      filtered = [...products];
    } else {
      const exactMatch = products.find(
        p => p.name.toLowerCase() === debouncedSearchTerm.toLowerCase()
      );

      if (exactMatch) {
        // If there's an exact match (e.g., after selecting a suggestion), show only that product.
        filtered = [exactMatch];
      } else {
        // Otherwise, perform a broader search based on the debounced term.
        filtered = products.filter(product =>
          product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
      }
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [debouncedSearchTerm, selectedCategory, sortBy, products]);
  
  useEffect(() => {
    if (activeSuggestionRef.current) {
      activeSuggestionRef.current.scrollIntoView({
        block: 'nearest',
      });
    }
  }, [activeSuggestionIndex]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setActiveSuggestionIndex(-1);

    if (value.length > 0 && products) {
      const filteredSuggestions = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setSearchTerm(productName);
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    searchInputRef.current?.focus();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;
  
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveSuggestionIndex(prevIndex =>
          prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveSuggestionIndex(prevIndex =>
          prevIndex <= 0 ? suggestions.length - 1 : prevIndex - 1
        );
        break;
      case 'Enter':
        e.preventDefault(); // Prevent default action like form submission
        let suggestionToSelect: Product | undefined;
  
        if (activeSuggestionIndex > -1) {
          // A suggestion is actively highlighted by the user
          suggestionToSelect = suggestions[activeSuggestionIndex];
        } else if (suggestions.length === 1) {
          // UX enhancement: if there's only one suggestion, Enter selects it
          suggestionToSelect = suggestions[0];
        }
  
        if (suggestionToSelect) {
          handleSuggestionClick(suggestionToSelect.name);
        }
        break;
      case 'Escape':
        setSuggestions([]);
        setActiveSuggestionIndex(-1);
        break;
      default:
        break;
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    searchInputRef.current?.focus();
  };

  const handleClearAllFilters = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSelectedCategory('All');
    setSortBy('name-asc');
    setSuggestions([]);
    setActiveSuggestionIndex(-1);
    if(searchInputRef.current) {
        searchInputRef.current.focus();
    }
  };

  const renderSuggestion = (suggestionName: string) => {
    if (!searchTerm) {
        return <span>{suggestionName}</span>;
    }
    const lowerCaseName = suggestionName.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const startIndex = lowerCaseName.indexOf(lowerCaseSearchTerm);

    if (startIndex === -1) {
        return <span>{suggestionName}</span>;
    }

    const endIndex = startIndex + searchTerm.length;
    const before = suggestionName.substring(0, startIndex);
    const match = suggestionName.substring(startIndex, endIndex);
    const after = suggestionName.substring(endIndex);

    return (
        <span>
            {before}
            <strong className="font-bold text-brand-primary">{match}</strong>
            {after}
        </span>
    );
};

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light">Our Product Catalog</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Everything you need for a successful harvest.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-2xl font-bold mb-6 text-brand-dark dark:text-brand-light">Filters</h3>
          
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Product</label>
            <div className="relative">
              <input
                type="text"
                id="search"
                ref={searchInputRef}
                placeholder="e.g., VIVITAMIN"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestions([]);
                    setActiveSuggestionIndex(-1);
                  }, 200);
                }}
                autoComplete="off"
                className="w-full py-2 pl-3 pr-10 border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={suggestions.length > 0}
                aria-controls="suggestions-listbox"
                aria-activedescendant={activeSuggestionIndex > -1 ? `suggestion-${suggestions[activeSuggestionIndex].id}` : undefined}
              />
              {searchTerm && (
                  <button
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label="Clear search"
                  >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              )}
              {suggestions.length > 0 && (
                <ul
                  id="suggestions-listbox"
                  role="listbox"
                  className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto dark:bg-gray-800 dark:border-gray-700"
                >
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={suggestion.id}
                      id={`suggestion-${suggestion.id}`}
                      ref={index === activeSuggestionIndex ? activeSuggestionRef : null}
                      role="option"
                      aria-selected={index === activeSuggestionIndex}
                      onMouseDown={() => handleSuggestionClick(suggestion.name)}
                      onMouseEnter={() => setActiveSuggestionIndex(index)}
                      className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ease-in-out ${
                        index === activeSuggestionIndex
                          ? 'bg-brand-primary text-white'
                          : 'text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {renderSuggestion(suggestion.name)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Category</h4>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-brand-primary text-white font-semibold shadow'
                      : 'bg-gray-50 text-gray-800 hover:bg-brand-light hover:text-brand-dark dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
            <select
              id="sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>

          <button
              onClick={handleClearAllFilters}
              className="w-full mt-2 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors dark:border-gray-600 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
              Clear All Filters
          </button>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-3">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">No Products Found</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">No products found matching your criteria. Try adjusting your search or filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};