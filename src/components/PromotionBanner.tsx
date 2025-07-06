import React from 'react';
import { Gift } from 'lucide-react';

interface PromotionBannerProps {
  title: string;
  description?: string;
  className?: string;
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ 
  title, 
  description = "Achetez 2 maillots, le 3ème est automatiquement offert !",
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Gift className="h-8 w-8" />
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <Gift className="h-8 w-8" />
        </div>
        <p className="text-xl md:text-2xl text-green-100 mb-4">
          {description}
        </p>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 inline-block">
          <p className="text-green-100 font-semibold">
            Offre valable sur tous les maillots éligibles
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;