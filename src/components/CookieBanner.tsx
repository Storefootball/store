import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Nous utilisons des cookies</h3>
              <p className="text-sm text-gray-300">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. 
                <Link to="/cookies" className="text-blue-400 hover:text-blue-300 underline ml-1">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accepter
            </button>
            <button
              onClick={rejectCookies}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;