import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface CartNotificationProps {
  isVisible: boolean;
  productName: string;
  onClose: () => void;
}

const CartNotification: React.FC<CartNotificationProps> = ({ isVisible, productName, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-6 w-6 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-semibold">Ajouté au panier !</p>
            <p className="text-sm text-green-100 line-clamp-2">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-green-100 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartNotification;