import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

interface RetroJerseysProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  searchQuery: string;
}

const RetroJerseys: React.FC<RetroJerseysProps> = ({ onAddToCart, onViewDetails, searchQuery }) => {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'team'>('name');

  const retroProducts = useMemo(() => {
    let filtered = products.filter(product => product.category === 'retro');

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.league.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'team':
          return a.team.localeCompare(b.team);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, sortBy]);

  return (
<div className="min-h-screen bg-gray-50">
      {/* Hero Section with Ligue 1 Background */}
      <section 
        className="relative bg-gradient-to-r from-blue-600 to-yellow-400 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.4), rgba(253, 224, 71, 0.4)), url('/1000025020.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">Maillots Rétro</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
            Revivez les moments légendaires du football avec nos maillots vintage authentiques
          </p>
        
          
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-end">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'team')}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Nom</option>
                <option value="price">Prix</option>
                <option value="team">Équipe</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={retroProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        title=""
      />
    </div>
  );
};

export default RetroJerseys;