import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Reset state when modal opens or product changes
  useEffect(() => {
    if (isOpen && product) {
      setSelectedImage(0);
      setSelectedSize(product.sizes[0]);
      setQuantity(1);
    }
  }, [isOpen, product]);

  const nextImage = () => {
    if (product) {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(product, selectedSize);
      }
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Détails du produit</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              
              {/* Product badges */}
              <div className="absolute top-3 right-3 space-y-2">
                {product.hasPromotion && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    2+1 GRATUIT
                  </div>
                )}
                {product.isPreorder && (
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    PRÉCOMMANDE
                  </div>
                )}
                {product.category === 'collector' && (
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    COLLECTOR
                  </div>
                )}
                {product.category === 'retro' && (
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    RÉTRO
                  </div>
                )}
              </div>
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-600 font-semibold">{product.team}</span>
                <span className="text-sm text-gray-500">{product.league} • {product.season}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">€{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">€{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Promotion or Preorder Info */}
              {product.hasPromotion && (
                <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4">
                  <div className="font-bold">🎁 OFFRE SPÉCIALE ACTIVE</div>
                  <div className="text-sm">Achetez 2 maillots, le 3ème est automatiquement offert !</div>
                </div>
              )}

              {product.isPreorder && (
                <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded-lg mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <div className="font-bold">PRÉCOMMANDE DISPONIBLE</div>
                  </div>
                  <div className="text-sm">Livraison prévue le {product.preorderDate}</div>
                </div>
              )}

              {product.category === 'collector' && (
                <div className="bg-purple-100 border border-purple-300 text-purple-800 px-4 py-3 rounded-lg mb-4">
                  <div className="font-bold">💎 ÉDITION COLLECTOR</div>
                  <div className="text-sm">Maillot authentifié avec certificat d'authenticité inclus</div>
                </div>
              )}

              {product.category === 'retro' && (
                <div className="bg-amber-100 border border-amber-300 text-amber-800 px-4 py-3 rounded-lg mb-4">
                  <div className="font-bold">⏰ MAILLOT VINTAGE</div>
                  <div className="text-sm">Reproduction authentique d'un maillot historique</div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Taille</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 font-semibold transition-all ${
                      selectedSize === size
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-blue-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity - only for non-promotion items */}
            {!product.hasPromotion && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Quantité</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{product.isPreorder ? 'Précommander' : 'Ajouter au panier'}</span>
              </button>
              
              <div className="flex space-x-4">
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Favoris</span>
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Partager</span>
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                product.isPreorder ? 'bg-orange-500' : product.inStock ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className={`font-semibold ${
                product.isPreorder ? 'text-orange-600' : product.inStock ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.isPreorder ? 'Disponible en précommande' : product.inStock ? 'En stock' : 'Rupture de stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;