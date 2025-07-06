import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import PromotionBanner from '../components/PromotionBanner';
import { products } from '../data/products';
import { Product } from '../types';

interface CollectorJerseysProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  searchQuery: string;
}

const CollectorJerseys: React.FC<CollectorJerseysProps> = ({ onAddToCart, onViewDetails, searchQuery }) => {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'team'>('name');

  const collectorProducts = useMemo(() => {
    let filtered = products.filter(product => product.category === 'collector');

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
      <section className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Maillots Collector</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Éditions limitées et maillots de légendes pour les vrais collectionneurs
          </p>
          <div className="text-lg mb-6">
            {collectorProducts.length} maillot{collectorProducts.length > 1 ? 's' : ''} collector disponible{collectorProducts.length > 1 ? 's' : ''}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Maradona 1986</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Zidane 2002</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Ronaldinho 2005</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Henry 2004</span>
          </div>
          <div className="mt-6 bg-yellow-500 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-yellow-100 font-semibold">
              Éditions limitées authentifiées avec certificat d'authenticité
            </p>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <PromotionBanner 
        title="OFFRE SPÉCIALE 2+1 OFFERT"
        description="Achetez 2 maillots collector, le 3ème est automatiquement offert !"
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
        products={collectorProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        title=""
      />
    </div>
  );
};

export default CollectorJerseys;