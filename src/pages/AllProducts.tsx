import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import FilterBar from '../components/FilterBar';
import { products } from '../data/products';
import { Product } from '../types';

interface AllProductsProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  searchQuery: string;
}

const AllProducts: React.FC<AllProductsProps> = ({ onAddToCart, onViewDetails, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'french' | 'international' | 'national' | 'retro' | 'collector'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'team'>('name');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.league.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
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
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tous nos Maillots</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explorez notre collection complète de maillots de football
          </p>
          <div className="text-lg">
            {filteredProducts.length} maillot{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <ProductGrid
        products={filteredProducts}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        title=""
      />
    </div>
  );
};

export default AllProducts;