import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, Gift } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  // Calculate total considering the new 2+1 system
  const total = cartItems.reduce((sum, item) => {
    // Only count paid items in the total
    if (item.isPaid !== false) {
      return sum + (item.product.price * item.quantity);
    }
    return sum;
  }, 0);

  // Calculate savings from free items
  const savings = cartItems.reduce((sum, item) => {
    if (item.isPaid === false) {
      return sum + (item.product.price * item.quantity);
    }
    return sum;
  }, 0);

  // Count promotion items
  const promoItems = cartItems.filter(item => item.product.hasPromotion);
  const paidPromoItems = promoItems.filter(item => item.isPaid !== false);
  const freePromoItems = promoItems.filter(item => item.isPaid === false);
  const totalPaidPromoQuantity = paidPromoItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-md h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Mon Panier</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Promo Banner - only show if there are free items */}
        {freePromoItems.length > 0 && (
          <div className="bg-green-100 border-b border-green-200 p-4">
            <div className="text-center">
              <div className="text-green-800 font-bold text-sm flex items-center justify-center space-x-1">
                <Gift className="h-4 w-4" />
                <span>🎉 OFFRE 2+1 ACTIVE 🎉</span>
              </div>
              <div className="text-green-700 text-xs">
                {totalPaidPromoQuantity} maillot{totalPaidPromoQuantity > 1 ? 's' : ''} acheté{totalPaidPromoQuantity > 1 ? 's' : ''} = {freePromoItems.length} gratuit{freePromoItems.length > 1 ? 's' : ''} !
              </div>
            </div>
          </div>
        )}

        {/* Progress indicator for promotion */}
        {paidPromoItems.length > 0 && totalPaidPromoQuantity < 2 && (
          <div className="bg-blue-50 border-b border-blue-200 p-4">
            <div className="text-center">
              <div className="text-blue-800 font-bold text-sm">
                🎯 Plus que {2 - totalPaidPromoQuantity} maillot{2 - totalPaidPromoQuantity > 1 ? 's' : ''} pour un gratuit !
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(totalPaidPromoQuantity / 2) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">Votre panier est vide</div>
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${index}`} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">{item.product.team}</p>
                    <p className="text-sm text-gray-600">Taille: {item.size}</p>
                    <div className="flex items-center space-x-2">
                      {item.isPaid !== false ? (
                        <p className="font-bold text-blue-600">€{item.product.price}</p>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <p className="font-bold text-green-600">GRATUIT</p>
                          <Gift className="h-4 w-4 text-green-600" />
                        </div>
                      )}
                      {item.product.isPreorder && (
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                          PRÉCOMMANDE
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, Math.max(0, item.quantity - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.size)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            {/* Show savings only if there are free items */}
            {savings > 0 && (
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-sm text-green-800 text-center">
                  <div className="font-semibold flex items-center justify-center space-x-1">
                    <Gift className="h-4 w-4" />
                    <span>Économies réalisées :</span>
                  </div>
                  <div className="text-lg font-bold">€{savings.toFixed(2)}</div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total à payer:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            
            <Link 
              to="/commande"
              onClick={onClose}
              className="block w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors text-center"
            >
              Passer commande
            </Link>
            <button
              onClick={onClose}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;