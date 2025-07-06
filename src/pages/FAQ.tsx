import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Comment fonctionne l'offre 1 acheté = 1 offert ?",
      answer: "Lorsque vous achetez un maillot éligible à l'offre, vous pouvez choisir un deuxième maillot gratuitement. Le maillot le moins cher des deux sera automatiquement offert. Cette offre s'applique à tous nos maillots sauf ceux en précommande."
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Nous livrons en 2-3 jours ouvrés en France métropolitaine. Pour les commandes passées avant 14h, l'expédition se fait le jour même. La livraison est gratuite pour toute commande supérieure à 100€."
    },
    {
      question: "Les maillots sont-ils authentiques ?",
      answer: "Oui, tous nos maillots sont 100% authentiques et proviennent directement des fournisseurs officiels des clubs et équipes nationales. Chaque maillot est livré avec ses étiquettes d'origine."
    },
    {
      question: "Puis-je échanger ma commande ?",
      answer: "Bien sûr ! Vous avez 30 jours pour échanger votre maillot s'il ne vous convient pas. L'échange est gratuit, il vous suffit de nous contacter et nous vous enverrons une étiquette de retour prépayée."
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer: "Dès l'expédition de votre commande, vous recevrez un email avec un numéro de suivi. Vous pourrez suivre votre colis en temps réel sur le site de notre transporteur."
    },
    {
      question: "Proposez-vous le flocage des maillots ?",
      answer: "Oui, nous proposons le flocage avec le nom et le numéro de votre choix pour 15€ supplémentaires. Le flocage est réalisé avec la même technologie que celle utilisée par les clubs professionnels."
    },
    {
      question: "Que signifie 'précommande' ?",
      answer: "Certains maillots, comme ceux du PSG, sont disponibles en précommande. Cela signifie que vous pouvez les commander maintenant, mais ils seront expédiés à la date indiquée sur la fiche produit."
    },
    {
      question: "Acceptez-vous les retours ?",
      answer: "Oui, vous pouvez retourner vos articles dans les 30 jours suivant la réception, à condition qu'ils soient dans leur état d'origine avec les étiquettes. Les frais de retour sont à votre charge sauf en cas de défaut."
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, et le paiement en 3 fois sans frais via notre partenaire financier."
    },
    {
      question: "Livrez-vous à l'international ?",
      answer: "Actuellement, nous livrons en France métropolitaine, en Belgique, en Suisse et au Luxembourg. Nous travaillons à étendre notre zone de livraison à d'autres pays européens."
    }
  ];

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
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Questions Fréquentes</h1>
          </div>
          <p className="text-lg text-gray-600">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-gray-600 mb-4">
            Notre équipe de support est là pour vous aider !
          </p>
          <a
            href="mailto:contact@footballshop.fr"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;