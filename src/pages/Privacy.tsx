import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
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
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Politique de Confidentialité</h1>
          </div>
          <p className="text-lg text-gray-600">
            Dernière mise à jour : 1er janvier 2025
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              FootballShop s'engage à protéger la confidentialité de vos données personnelles. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
              lorsque vous utilisez notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Données d'identification</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Nom et prénom</li>
                  <li>• Adresse email</li>
                  <li>• Numéro de téléphone</li>
                  <li>• Adresse de livraison et de facturation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Données de navigation</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Adresse IP</li>
                  <li>• Type de navigateur</li>
                  <li>• Pages visitées</li>
                  <li>• Durée de visite</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold mb-2">Nous utilisons vos données pour :</p>
              <ul className="text-blue-700 space-y-1 ml-4">
                <li>• Traiter et livrer vos commandes</li>
                <li>• Vous contacter concernant votre commande</li>
                <li>• Améliorer nos services</li>
                <li>• Vous envoyer des offres promotionnelles (avec votre consentement)</li>
                <li>• Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale</h2>
            <p className="text-gray-600 leading-relaxed">
              Le traitement de vos données personnelles repose sur différentes bases légales selon la finalité :
            </p>
            <ul className="text-gray-600 space-y-2 mt-4 ml-4">
              <li>• <strong>Exécution du contrat :</strong> pour traiter vos commandes</li>
              <li>• <strong>Intérêt légitime :</strong> pour améliorer nos services</li>
              <li>• <strong>Consentement :</strong> pour l'envoi d'emails marketing</li>
              <li>• <strong>Obligation légale :</strong> pour la comptabilité et les taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des données</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
            </p>
            <ul className="text-gray-600 space-y-2 ml-4">
              <li>• Nos prestataires de livraison (pour l'expédition)</li>
              <li>• Nos prestataires de paiement (pour le traitement des transactions)</li>
              <li>• Les autorités compétentes (si requis par la loi)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="text-gray-600 space-y-2">
                <li>• <strong>Données de commande :</strong> 10 ans (obligation comptable)</li>
                <li>• <strong>Données de navigation :</strong> 13 mois maximum</li>
                <li>• <strong>Données marketing :</strong> 3 ans après le dernier contact</li>
                <li>• <strong>Données de prospection :</strong> 3 ans après collecte</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Droits d'accès et de rectification</h3>
                <p className="text-green-700 text-sm">
                  Vous pouvez consulter et corriger vos données personnelles
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Droit à l'effacement</h3>
                <p className="text-red-700 text-sm">
                  Vous pouvez demander la suppression de vos données
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Droit à la portabilité</h3>
                <p className="text-blue-700 text-sm">
                  Vous pouvez récupérer vos données dans un format structuré
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Droit d'opposition</h3>
                <p className="text-purple-700 text-sm">
                  Vous pouvez vous opposer au traitement de vos données
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
              vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, 
              l'altération ou la destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Vous pouvez gérer vos préférences de cookies via notre 
              <Link to="/cookies" className="text-blue-600 hover:underline ml-1">politique de cookies</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 mb-2">
                Pour exercer vos droits ou pour toute question concernant cette politique :
              </p>
              <p className="text-blue-700">
                <strong>Email :</strong> dpo@footballshop.fr<br />
                <strong>Courrier :</strong> FootballShop - DPO, 123 Rue du Football, 75001 Paris
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;