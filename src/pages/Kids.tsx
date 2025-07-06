import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import PromotionBanner from '../components/PromotionBanner';
import { products } from '../data/products';
import { Product } from '../types';

interface KidsProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  searchQuery: string;
}

const Kids: React.FC<KidsProps> = ({ onAddToCart, onViewDetails, searchQuery }) => {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'team'>('name');

  // For now, we'll show a subset of products as kids versions
  // In a real app, you'd have specific kids products with different sizes
  const kidsProducts = useMemo(() => {
    let filtered = products.filter(product => 
      // Show featured products as kids versions for demo
      product.featured || product.category === 'national'
    ).map(product => ({
      ...product,
      id: `kids-${product.id}`,
      name: `${product.name} - Enfant`,
      sizes: ['4-6 ans', '6-8 ans', '8-10 ans', '10-12 ans', '12-14 ans'],
      price: Math.round(product.price * 0.8), // Kids prices are 20% less
      originalPrice: product.originalPrice ? Math.round(product.originalPrice * 0.8) : undefined
    }));

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
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Maillots Enfant</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Les maillots de leurs équipes préférées, spécialement conçus pour les jeunes supporters !
          </p>
          <div className="text-lg mb-6">
            {kidsProducts.length} maillot{kidsProducts.length > 1 ? 's' : ''} enfant disponible{kidsProducts.length > 1 ? 's' : ''}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Tailles 4-14 ans</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Qualité premium</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Toutes les équipes</span>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <PromotionBanner 
        title="OFFRE SPÉCIALE 2+1 OFFERT"
        description="Achetez 2 maillots enfant, le 3ème est automatiquement offert !"
      />

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">T</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailles adaptées</h3>
              <p className="text-gray-600">
                De 4 à 14 ans, toutes les tailles pour accompagner la croissance de votre enfant
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">C</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confort optimal</h3>
              <p className="text-gray-600">
                Matériaux respirants et coupe adaptée pour jouer et supporter en toute liberté
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualité premium</h3>
              <p className="text-gray-600">
                Même qualité que les maillots adultes, résistants aux lavages et au jeu
              </p>
            </div>
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
        products={kidsProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        title=""
      />
    </div>
  );
};

export default Kids;