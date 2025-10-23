
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Redex Aqua Solutions</h3>
            <p className="text-gray-400">Providing sustainable and effective solutions for modern aquaculture.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><NavLink to="/products" className="hover:text-brand-secondary transition-colors">Products</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-secondary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: redexaquasolutions@gmail.com</li>
              <li>Phone: 9493340492 / 9246241777</li>
              <li>Address: Plot No 7/A, Golden Tulip Estates, Kondapur, Hyderabad</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-brand-secondary transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/redexaquasolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-secondary transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@redexaquasolutions" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-brand-secondary transition-colors">
                <YouTubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Redex Aqua Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
