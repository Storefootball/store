import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 'M'); // Default size
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge for discount */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}

        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <button
              onClick={() => onViewDetails(product)}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={handleQuickAdd}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-semibold">{product.team}</span>
          <span className="text-xs text-gray-500">{product.league}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">€{product.originalPrice}</span>
            )}
          </div>
          <div className="flex space-x-1">
            {product.sizes.map((size) => (
              <span key={size} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {size}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Voir les détails
        </button>
      </div>
    </div>
  );
};

export default ProductCard;