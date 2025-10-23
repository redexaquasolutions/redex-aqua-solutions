
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ArticlePage } from './pages/ArticlePage';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/education/:articleSlug" element={<ArticlePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;