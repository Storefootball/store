import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

interface FeaturedProductsProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  searchQuery: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onAddToCart, onViewDetails, searchQuery }) => {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'team'>('name');

  const featuredProducts = useMemo(() => {
    let filtered = products.filter(product => product.featured);

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Maillots Vedettes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Notre sélection des maillots les plus populaires et les dernières nouveautés
          </p>
          <div className="text-lg">
            {featuredProducts.length} maillot{featuredProducts.length > 1 ? 's' : ''} vedette{featuredProducts.length > 1 ? 's' : ''}
          </div>
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
        products={featuredProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        title=""
      />
    </div>
  );
};

export default FeaturedProducts;