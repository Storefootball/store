import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

interface ProductSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product, size: string) => void;
  excludeProduct?: Product;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ 
  isOpen, 
  onClose, 
  onSelectProduct, 
  excludeProduct 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'french' | 'international' | 'national' | 'retro' | 'collector'>('all');

  const availableProducts = useMemo(() => {
    let filtered = products.filter(product => 
      product.hasPromotion && 
      product.id !== excludeProduct?.id &&
      product.inStock
    );

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.team.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory, excludeProduct]);

  const handleSelectProduct = (product: Product, size: string) => {
    onSelectProduct(product, size);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">🎁 Choisissez votre maillot GRATUIT !</h2>
              <p className="text-green-100">Sélectionnez le maillot de votre choix - Le moins cher sera automatiquement offert</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-green-600 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Rechercher un maillot..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex space-x-2 overflow-x-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setSelectedCategory('french')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === 'french'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                France
              </button>
              <button
                onClick={() => setSelectedCategory('international')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === 'international'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                International
              </button>
              <button
                onClick={() => setSelectedCategory('national')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === 'national'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Nationales
              </button>
              <button
                onClick={() => setSelectedCategory('retro')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === 'retro'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rétro
              </button>
              <button
                onClick={() => setSelectedCategory('collector')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === 'collector'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Collector
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {availableProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucun maillot disponible pour cette sélection</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{product.team}</p>
                    <p className="text-lg font-bold text-green-600 mb-3">GRATUIT</p>
                    
                    {/* Size Selection */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-700">Choisir la taille :</p>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSelectProduct(product, size)}
                            className="px-3 py-1 text-xs border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition-colors"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              💡 Le maillot le moins cher sera automatiquement gratuit
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelector;