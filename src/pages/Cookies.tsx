import React, { useState } from 'react';
import { ArrowLeft, Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies: React.FC = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Vos préférences ont été sauvegardées !');
  };

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
            <Cookie className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Politique de Cookies</h1>
          </div>
          <p className="text-lg text-gray-600">
            Gestion de vos préférences de cookies
          </p>
        </div>

        <div className="space-y-8">
          {/* What are cookies */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
              Les cookies nous permettent de reconnaître votre navigateur et de capturer et mémoriser certaines informations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic 
              et personnaliser le contenu selon vos préférences.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Gérer vos préférences</h2>
            </div>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookies nécessaires</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Toujours actifs
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Ces cookies sont essentiels au fonctionnement du site. Ils permettent des fonctionnalités 
                  de base comme la navigation et l'accès aux zones sécurisées.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Exemples :</strong> Session utilisateur, panier d'achat, préférences de langue
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookies d'analyse</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site 
                  en collectant et rapportant des informations de manière anonyme.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Exemples :</strong> Google Analytics, statistiques de visite, pages populaires
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookies marketing</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Ces cookies sont utilisés pour vous proposer des publicités pertinentes et mesurer 
                  l'efficacité de nos campagnes publicitaires.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Exemples :</strong> Facebook Pixel, Google Ads, publicités ciblées
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookies fonctionnels</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => handlePreferenceChange('functional')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site, 
                  comme les widgets de chat ou les lecteurs vidéo.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Exemples :</strong> Chat en direct, lecteurs vidéo, cartes interactives
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={savePreferences}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sauvegarder mes préférences
              </button>
              <button
                onClick={() => setPreferences({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                  functional: true
                })}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Accepter tous les cookies
              </button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations supplémentaires</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment désactiver les cookies ?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous avertir 
                  lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site pourraient ne pas 
                  fonctionner correctement.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Durée de conservation</h3>
                <p className="text-gray-600 leading-relaxed">
                  La durée de conservation des cookies varie selon leur type. Les cookies de session sont 
                  supprimés à la fermeture du navigateur, tandis que les cookies persistants peuvent être 
                  conservés jusqu'à 13 mois.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mise à jour de cette politique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous pouvons mettre à jour cette politique de cookies de temps en temps. 
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé 
                  de nos pratiques en matière de cookies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Questions sur les cookies ?
            </h2>
            <p className="text-gray-600 mb-4">
              Si vous avez des questions concernant notre utilisation des cookies, n'hésitez pas à nous contacter.
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

export default Cookies;