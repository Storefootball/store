import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import PromotionBanner from '../components/PromotionBanner';
import { products } from '../data/products';
import { Product } from '../types';

interface NationalTeamsProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  searchQuery: string;
}

const NationalTeams: React.FC<NationalTeamsProps> = ({ onAddToCart, onViewDetails, searchQuery }) => {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'team'>('name');

  const nationalProducts = useMemo(() => {
    let filtered = products.filter(product => product.category === 'national');

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
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sélections Nationales</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Découvrez les maillots officiels des plus grandes équipes nationales du monde entier
          </p>
          <div className="text-lg">
            {nationalProducts.length} maillot{nationalProducts.length > 1 ? 's' : ''} disponible{nationalProducts.length > 1 ? 's' : ''}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">France</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Brésil</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Argentine</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Allemagne</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Espagne</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Italie</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Angleterre</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Portugal</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Pays-Bas</span>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <PromotionBanner 
        title="OFFRE SPÉCIALE 2+1 OFFERT"
        description="Achetez 2 maillots de sélections nationales, le 3ème est automatiquement offert !"
      />

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
        products={nationalProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        title=""
      />
    </div>
  );
};

export default NationalTeams;