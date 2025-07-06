import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import CustomerReviews from '../components/CustomerReviews';
import { products, videosPresentations, customerReviews } from '../data/products';
import { Product, VideoPresentation } from '../types';

interface HomeProps {
  onAddToCart: (product: Product, size: string) => void;
  onViewDetails: (product: Product) => void;
  onVideoPlay: (video: VideoPresentation) => void;
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ onAddToCart, onViewDetails, onVideoPlay, searchQuery }) => {
  // Filter products by search query only
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

    // Sort by name by default
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [searchQuery]);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      <Hero videos={videosPresentations} onVideoPlay={onVideoPlay} />

      {/* Customer Reviews */}
      <CustomerReviews reviews={customerReviews} />

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maillots en Vedette</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection des maillots les plus populaires et les dernières nouveautés
            </p>
            <div className="bg-red-100 border border-red-300 text-red-800 px-6 py-3 rounded-lg inline-block mt-4">
              <span className="font-bold">OFFRE SPÉCIALE : </span>
              2 maillots achetés = 3ème automatiquement offert !
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                  {product.hasPromotion ? (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      2+1 GRATUIT
                    </div>
                  ) : product.isPreorder ? (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      PRÉCOMMANDE
                    </div>
                  ) : product.category === 'collector' ? (
                    <div className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      COLLECTOR
                    </div>
                  ) : product.category === 'retro' ? (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      RÉTRO
                    </div>
                  ) : null}
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
                  </div>
                  {product.hasPromotion && (
                    <div className="text-sm text-green-600 font-semibold mb-3">
                      Achetez-en 2, obtenez le 3ème GRATUIT !
                    </div>
                  )}
                  {product.isPreorder && (
                    <div className="text-sm text-orange-600 font-semibold mb-3">
                      Disponible en précommande - Livraison prévue le {product.preorderDate}
                    </div>
                  )}
                  {product.category === 'collector' && (
                    <div className="text-sm text-purple-600 font-semibold mb-3">
                      Édition collector authentifiée
                    </div>
                  )}
                  {product.category === 'retro' && (
                    <div className="text-sm text-amber-600 font-semibold mb-3">
                      Maillot vintage authentique
                    </div>
                  )}
                  <button
                    onClick={() => onViewDetails(product)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                  >
                    {product.isPreorder ? 'Précommander' : 'Voir les détails'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/maillots-vedettes"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              <span>Voir tous nos maillots vedettes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tous nos Maillots</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">Aucun produit trouvé</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {filteredProducts.slice(0, 8).map((product) => (
                  <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </div>
                      )}
                      {product.hasPromotion ? (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          2+1 GRATUIT
                        </div>
                      ) : product.isPreorder ? (
                        <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          PRÉCOMMANDE
                        </div>
                      ) : product.category === 'collector' ? (
                        <div className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          COLLECTOR
                        </div>
                      ) : product.category === 'retro' ? (
                        <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          RÉTRO
                        </div>
                      ) : null}
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
                      </div>
                      {product.hasPromotion && (
                        <div className="text-sm text-green-600 font-semibold mb-3">
                          Achetez-en 2, obtenez le 3ème GRATUIT !
                        </div>
                      )}
                      {product.isPreorder && (
                        <div className="text-sm text-orange-600 font-semibold mb-3">
                          Disponible en précommande - Livraison prévue le {product.preorderDate}
                        </div>
                      )}
                      {product.category === 'collector' && (
                        <div className="text-sm text-purple-600 font-semibold mb-3">
                          Édition collector authentifiée
                        </div>
                      )}
                      {product.category === 'retro' && (
                        <div className="text-sm text-amber-600 font-semibold mb-3">
                          Maillot vintage authentique
                        </div>
                      )}
                      <button
                        onClick={() => onViewDetails(product)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                      >
                        {product.isPreorder ? 'Précommander' : 'Voir les détails'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/tous-les-maillots"
                  className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
                >
                  <span>Voir tous nos maillots</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;