import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Conditions d'Utilisation</h1>
          </div>
          <p className="text-lg text-gray-600">
            Dernière mise à jour : 1er janvier 2025
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web FootballShop 
              accessible à l'adresse footballshop.fr. L'utilisation du site implique l'acceptation pleine et entière 
              des conditions générales d'utilisation décrites ci-après.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Mentions légales</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Raison sociale :</strong> FootballShop SAS</p>
              <p className="text-gray-600 mb-2"><strong>Siège social :</strong> 123 Rue du Football, 75001 Paris</p>
              <p className="text-gray-600 mb-2"><strong>SIRET :</strong> 123 456 789 00012</p>
              <p className="text-gray-600 mb-2"><strong>Email :</strong> contact@footballshop.fr</p>
              <p className="text-gray-600"><strong>Directeur de publication :</strong> Jean Dupont</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accès au site</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
              Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, 
              logiciels, connexion Internet, etc.) sont à sa charge.
            </p>
            <p className="text-gray-600 leading-relaxed">
              FootballShop se réserve le droit de modifier, suspendre ou interrompre l'accès au site 
              à tout moment et sans préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Commandes et paiements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 Processus de commande</h3>
                <p className="text-gray-600 leading-relaxed">
                  Toute commande passée sur le site constitue un contrat de vente. L'utilisateur reconnaît 
                  avoir pris connaissance et accepté les conditions générales de vente avant la validation 
                  de sa commande.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.2 Prix et paiement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Les prix sont indiqués en euros TTC. Le paiement s'effectue par carte bancaire, 
                  PayPal ou virement bancaire. La commande n'est validée qu'après encaissement du paiement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Livraison</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les délais de livraison sont donnés à titre indicatif. FootballShop s'engage à faire ses 
              meilleurs efforts pour respecter ces délais, mais ne saurait être tenu responsable des retards 
              dus à des causes indépendantes de sa volonté.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Les risques liés au transport sont transférés à l'acheteur dès la remise du colis au transporteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Droit de rétractation</h2>
            <p className="text-gray-600 leading-relaxed">
              Conformément à l'article L121-21 du Code de la consommation, l'utilisateur dispose d'un délai 
              de 14 jours à compter de la réception de sa commande pour exercer son droit de rétractation 
              sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              L'ensemble du contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit 
              d'auteur et appartient à FootballShop ou à ses partenaires. Toute reproduction, même partielle, 
              est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Responsabilité</h2>
            <p className="text-gray-600 leading-relaxed">
              FootballShop ne saurait être tenu responsable des dommages directs ou indirects causés au 
              matériel de l'utilisateur lors de l'accès au site, et résultant soit de l'utilisation d'un 
              matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Droit applicable</h2>
            <p className="text-gray-600 leading-relaxed">
              Les présentes conditions générales sont soumises au droit français. En cas de litige, 
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour toute question relative aux présentes conditions générales, vous pouvez nous contacter 
              à l'adresse email : contact@footballshop.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;