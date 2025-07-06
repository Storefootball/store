import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
  <header className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/1000002431.png" 
            alt="Store Football" 
            className="h-12 w-auto" 
          />
          <span className="text-2xl font-bold text-gray-900" translate="no">
            Store Football
          </span>
        </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActiveLink('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/equipes-francaises" 
              className={`transition-colors font-medium ${
                isActiveLink('/equipes-francaises') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Ligue 1
            </Link>
            <Link 
              to="/clubs-internationaux" 
              className={`transition-colors font-medium ${
                isActiveLink('/clubs-internationaux') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Clubs
            </Link>
            <Link 
              to="/selections-nationales" 
              className={`transition-colors font-medium ${
                isActiveLink('/selections-nationales') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Sélections Nationales
            </Link>
            <Link 
              to="/enfant" 
              className={`transition-colors font-medium ${
                isActiveLink('/enfant') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Enfant
            </Link>
            <Link 
              to="/maillots-retro" 
              className={`transition-colors font-medium ${
                isActiveLink('/maillots-retro') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Maillots Rétro
            </Link>
            <Link 
              to="/maillots-collector" 
              className={`transition-colors font-medium ${
                isActiveLink('/maillots-collector') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Maillots Collector
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartToggle}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onCartToggle}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            <nav className="py-4 space-y-2">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/equipes-francaises" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/equipes-francaises') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ligue 1
              </Link>
              <Link 
                to="/clubs-internationaux" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/clubs-internationaux') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Clubs
              </Link>
              <Link 
                to="/selections-nationales" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/selections-nationales') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sélections Nationales
              </Link>
              <Link 
                to="/enfant" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/enfant') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Enfant
              </Link>
              <Link 
                to="/maillots-retro" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/maillots-retro') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Maillots Rétro
              </Link>
              <Link 
                to="/maillots-collector" 
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveLink('/maillots-collector') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Maillots Collector
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;