import React from 'react';
import { ArrowLeft, RotateCcw, Package, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Returns: React.FC = () => {
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
            <RotateCcw className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Retours & Échanges</h1>
          </div>
          <p className="text-lg text-gray-600">
            Politique de retour simple et transparente
          </p>
        </div>

        <div className="space-y-8">
          {/* Return Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre politique de retour</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">30 jours</h3>
                <p className="text-gray-600 text-sm">pour retourner ou échanger vos articles</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">État neuf</h3>
                <p className="text-gray-600 text-sm">avec étiquettes et emballage d'origine</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Échange gratuit</h3>
                <p className="text-gray-600 text-sm">pour un problème de taille</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">✅ Articles éligibles au retour</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Maillots en stock non personnalisés</li>
                <li>• Articles dans leur emballage d'origine</li>
                <li>• Produits non portés avec étiquettes</li>
              </ul>
            </div>
          </div>

          {/* How to Return */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment effectuer un retour</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contactez-nous</h3>
                  <p className="text-gray-600">
                    Envoyez-nous un email à <a href="mailto:contact@footballshop.fr" className="text-blue-600 hover:underline">contact@footballshop.fr</a> 
                    avec votre numéro de commande et le motif du retour.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recevez l'étiquette</h3>
                  <p className="text-gray-600">
                    Nous vous enverrons une étiquette de retour prépayée par email dans les 24h.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Préparez le colis</h3>
                  <p className="text-gray-600">
                    Remettez l'article dans son emballage d'origine avec toutes les étiquettes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expédiez</h3>
                  <p className="text-gray-600">
                    Collez l'étiquette sur le colis et déposez-le dans un point relais ou bureau de poste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Remboursements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Délais de remboursement</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Carte bancaire :</strong> 3-5 jours ouvrés</li>
                  <li>• <strong>PayPal :</strong> 1-2 jours ouvrés</li>
                  <li>• <strong>Virement :</strong> 5-7 jours ouvrés</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Frais de retour</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong>Échange de taille :</strong> Gratuit</li>
                  <li>• <strong>Article défectueux :</strong> Gratuit</li>
                  <li>• <strong>Changement d'avis :</strong> 4,99€</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Questions sur votre retour ?
            </h2>
            <p className="text-gray-600 mb-4">
              Notre équipe est là pour vous accompagner dans votre démarche de retour.
            </p>
            <a
              href="mailto:contact@footballshop.fr"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Nous contacter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;