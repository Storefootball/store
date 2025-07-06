import { loadStripe } from '@stripe/stripe-js';

// Initialiser Stripe avec votre clé publique
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default stripePromise;

// Configuration des produits Stripe avec les nouveaux prix
export const stripeProducts = [
  {
    id: '1',
    name: 'Maillot Domicile France 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_france_2024',
    images: ['https://images.footballfanatics.com/france-national-team/france-nike-home-stadium-shirt-2024_ss5_p-201015263+pv-4+u-5cmtgyftlx5a3btgkopx+v-eqi8o39fvvu0panuwyzp.jpg?_hv=2&w=900']
  },
  {
    id: '2',
    name: 'Maillot PSG Domicile 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_psg_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '3',
    name: 'Maillot Real Madrid Domicile 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_real_madrid_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '4',
    name: 'Maillot Olympique de Marseille 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_om_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '5',
    name: 'Maillot Manchester United Domicile 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_manchester_united_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '6',
    name: 'Maillot FC Barcelona Domicile 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_barcelona_2024',
    images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9449fc2-0f65-47f1-8a2f-38c444a8deee/FCB+M+NK+DF+JSY+SS+STAD+HM.png']
  },
  {
    id: '7',
    name: 'Maillot AS Monaco Domicile 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_monaco_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '8',
    name: 'Maillot Liverpool FC Domicile 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_liverpool_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '9',
    name: 'Maillot Domicile Brésil 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_brazil_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '10',
    name: 'Maillot Domicile Argentine 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_argentina_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '11',
    name: 'Maillot Domicile Allemagne 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_germany_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '12',
    name: 'Maillot Domicile Espagne 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_spain_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '13',
    name: 'Maillot Domicile Italie 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_italy_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '14',
    name: 'Maillot Domicile Angleterre 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_england_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '15',
    name: 'Maillot Domicile Portugal 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_portugal_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '16',
    name: 'Maillot Domicile Pays-Bas 2024',
    price: 3999, // 39.99€ en centimes
    stripePriceId: 'price_netherlands_2024',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '17',
    name: 'Maillot Rétro France 1998 Coupe du Monde',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_france_retro_1998',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '18',
    name: 'Maillot Rétro AC Milan 1990',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_milan_retro_1990',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '19',
    name: 'Maillot Rétro Brésil 1970 Pelé',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_brazil_retro_1970',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '20',
    name: 'Maillot Rétro Manchester United 1999',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_manchester_retro_1999',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '21',
    name: 'Maillot Collector Maradona Argentine 1986',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_maradona_collector_1986',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '22',
    name: 'Maillot Collector Ronaldinho Barcelona 2005',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_ronaldinho_collector_2005',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '23',
    name: 'Maillot Collector Zidane Real Madrid 2002',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_zidane_collector_2002',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  },
  {
    id: '24',
    name: 'Maillot Collector Thierry Henry Arsenal 2004',
    price: 4999, // 49.99€ en centimes
    stripePriceId: 'price_henry_collector_2004',
    images: ['https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg']
  }
];