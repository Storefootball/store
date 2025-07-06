import React from 'react';
import { ArrowLeft, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const SizeGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <Ruler className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Guide des Tailles</h1>
          </div>
          <p className="text-lg text-gray-600">
            Trouvez la taille parfaite pour votre maillot de football
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* How to Measure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment prendre vos mesures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Tour de poitrine</h3>
                <p className="text-gray-600 mb-2">
                  Mesurez le tour de poitrine à l'endroit le plus large, en passant sous les bras.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 Conseil : Portez un t-shirt ajusté pour une mesure plus précise
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Longueur</h3>
                <p className="text-gray-600 mb-2">
                  Mesurez depuis le point le plus haut de l'épaule jusqu'à la longueur désirée.
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    💡 Conseil : Les maillots de football sont généralement portés près du corps
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Size Chart */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tableau des tailles</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Taille</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tour de poitrine (cm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Longueur (cm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Équivalence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">S</td>
                    <td className="border border-gray-300 px-4 py-3">88-96</td>
                    <td className="border border-gray-300 px-4 py-3">68-70</td>
                    <td className="border border-gray-300 px-4 py-3">46-48 (FR)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">M</td>
                    <td className="border border-gray-300 px-4 py-3">96-104</td>
                    <td className="border border-gray-300 px-4 py-3">70-72</td>
                    <td className="border border-gray-300 px-4 py-3">50-52 (FR)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">L</td>
                    <td className="border border-gray-300 px-4 py-3">104-112</td>
                    <td className="border border-gray-300 px-4 py-3">72-74</td>
                    <td className="border border-gray-300 px-4 py-3">54-56 (FR)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">XL</td>
                    <td className="border border-gray-300 px-4 py-3">112-120</td>
                    <td className="border border-gray-300 px-4 py-3">74-76</td>
                    <td className="border border-gray-300 px-4 py-3">58-60 (FR)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Tips */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils pour bien choisir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">⚽ Coupe sportive</h3>
                <p className="text-yellow-700 text-sm">
                  Les maillots de football ont une coupe ajustée pour optimiser les performances. 
                  Si vous préférez une coupe plus ample, choisissez une taille au-dessus.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔄 Échanges gratuits</h3>
                <p className="text-blue-700 text-sm">
                  Vous n'êtes pas sûr de votre taille ? Pas de problème ! 
                  Nous offrons les échanges gratuits sous 30 jours.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Besoin d'aide ?</h2>
            <p className="text-gray-600 mb-4">
              Notre équipe est là pour vous aider à choisir la bonne taille.
            </p>
            <a
              href="mailto:contact@footballshop.fr"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Contactez-nous</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;