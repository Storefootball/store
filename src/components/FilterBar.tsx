import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: 'all' | 'french' | 'international' | 'national' | 'retro' | 'collector';
  onCategoryChange: (category: 'all' | 'french' | 'international' | 'national' | 'retro' | 'collector') => void;
  sortBy: 'name' | 'price' | 'team';
  onSortChange: (sort: 'name' | 'price' | 'team') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          {/* Categories */}
          <div className="flex items-center space-x-1 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => onCategoryChange('french')}
              className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === 'french'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Équipes Françaises
            </button>
            <button
              onClick={() => onCategoryChange('international')}
              className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === 'international'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Clubs Internationaux
            </button>
            <button
              onClick={() => onCategoryChange('national')}
              className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === 'national'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sélections Nationales
            </button>
            <button
              onClick={() => onCategoryChange('retro')}
              className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === 'retro'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Maillots Rétro
            </button>
            <button
              onClick={() => onCategoryChange('collector')}
              className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === 'collector'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Maillots Collector
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Trier par:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as 'name' | 'price' | 'team')}
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
  );
};

export default FilterBar;