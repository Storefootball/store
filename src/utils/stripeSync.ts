// Script pour créer les produits dans Stripe
// ATTENTION: Ce script doit être exécuté côté serveur avec votre clé secrète

const STRIPE_SECRET_KEY = 'sk_test_votre_cle_secrete'; // Remplacez par votre vraie clé

const stripe = require('stripe')(STRIPE_SECRET_KEY);

export const createStripeProducts = async () => {
  const products = [
    {
      name: 'Maillot Domicile France 2024',
      description: 'Le nouveau maillot domicile officiel de l\'Équipe de France pour 2024.',
      images: ['https://images.footballfanatics.com/france-national-team/france-nike-home-stadium-shirt-2024_ss5_p-201015263+pv-4+u-5cmtgyftlx5a3btgkopx+v-eqi8o39fvvu0panuwyzp.jpg?_hv=2&w=900'],
      metadata: {
        category: 'national',
        team: 'Équipe de France',
        season: '2024'
      }
    },
    {
      name: 'Maillot PSG Domicile 2024',
      description: 'Maillot officiel du Paris Saint-Germain saison 2024.',
      images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'],
      metadata: {
        category: 'french',
        team: 'Paris Saint-Germain',
        season: '2024'
      }
    },
    // Ajoutez tous les autres produits ici...
  ];

  for (const productData of products) {
    try {
      // Créer le produit
      const product = await stripe.products.create({
        name: productData.name,
        description: productData.description,
        images: productData.images,
        metadata: productData.metadata
      });

      // Créer le prix associé
      const price = await stripe.prices.create({
        unit_amount: Math.round(productData.price * 100), // Prix en centimes
        currency: 'eur',
        product: product.id,
      });

      console.log(`Produit créé: ${product.name} - ID: ${product.id} - Prix ID: ${price.id}`);
    } catch (error) {
      console.error(`Erreur lors de la création du produit ${productData.name}:`, error);
    }
  }
};