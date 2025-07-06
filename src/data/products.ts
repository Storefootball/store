import { Product, VideoPresentation, CustomerReview } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Maillot Domicile France 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Équipe de France',
    league: 'International',
    season: '2024',
    images: [
      'https://images.footballfanatics.com/france-national-team/france-nike-home-stadium-shirt-2024_ss5_p-201015263+pv-4+u-5cmtgyftlx5a3btgkopx+v-eqi8o39fvvu0panuwyzp.jpg?_hv=2&w=900',
      'https://images.footballfanatics.com/france-national-team/france-nike-home-stadium-shirt-2024_ss5_p-201015263+pv-5+u-5cmtgyftlx5a3btgkopx+v-8anjdrotezwsjc8gjlhe.jpg?_hv=2&w=900'
    ],
    description: 'Le nouveau maillot domicile officiel de l\'Équipe de France pour 2024. Confectionné avec des matériaux premium et la technologie Dri-FIT pour un confort optimal.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '2',
    name: 'Maillot PSG Domicile 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Paris Saint-Germain',
    league: 'Ligue 1',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Maillot officiel du Paris Saint-Germain saison 2024. Design iconique avec les couleurs traditionnelles du club parisien.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'french',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '3',
    name: 'Maillot Real Madrid Domicile 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Real Madrid',
    league: 'La Liga',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
    ],
    description: 'Le maillot légendaire du Real Madrid. Blanc immaculé avec les détails dorés, symbole d\'excellence et de tradition.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'international',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '4',
    name: 'Maillot Olympique de Marseille 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Olympique de Marseille',
    league: 'Ligue 1',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Maillot officiel de l\'OM avec le design classique blanc et bleu ciel. Parfait pour supporter les Phocéens.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'french',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '5',
    name: 'Maillot Manchester United Domicile 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Manchester United',
    league: 'Premier League',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot rouge iconique de Manchester United. Tradition et modernité pour les Red Devils.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'international',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '6',
    name: 'Maillot FC Barcelona Domicile 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'FC Barcelona',
    league: 'La Liga',
    season: '2024',
    images: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9449fc2-0f65-47f1-8a2f-38c444a8deee/FCB+M+NK+DF+JSY+SS+STAD+HM.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3461b1fe-2dd8-42cf-a025-cf25282617b7/FCB+M+NK+DF+JSY+SS+STAD+HM.png'
    ],
    description: 'Les couleurs blaugrana légendaires du FC Barcelona. Design moderne avec les rayures traditionnelles.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'international',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '7',
    name: 'Maillot AS Monaco Domicile 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'AS Monaco',
    league: 'Ligue 1',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Maillot rouge et blanc de l\'AS Monaco. Élégance et tradition pour le club de la Principauté.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'french',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '8',
    name: 'Maillot Liverpool FC Domicile 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Liverpool FC',
    league: 'Premier League',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le rouge de Liverpool FC. You\'ll Never Walk Alone avec ce maillot iconique des Reds.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'international',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  // Nouvelles sélections nationales
  {
    id: '9',
    name: 'Maillot Domicile Brésil 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Seleção Brasileira',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le mythique maillot jaune de la Seleção. Symbole du football brésilien et de la magie du jogo bonito.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '10',
    name: 'Maillot Domicile Argentine 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Albiceleste',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot des champions du monde 2022. Les rayures bleu et blanc légendaires de l\'Albiceleste.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '11',
    name: 'Maillot Domicile Allemagne 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Die Mannschaft',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot blanc traditionnel de Die Mannschaft. Élégance et efficacité allemande.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '12',
    name: 'Maillot Domicile Espagne 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'La Roja',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le rouge passion de La Roja. Champions d\'Europe et maîtres du tiki-taka.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '13',
    name: 'Maillot Domicile Italie 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Azzurri',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le bleu azur des Azzurri. Tradition et passion italienne dans chaque fibre.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '14',
    name: 'Maillot Domicile Angleterre 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Three Lions',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le blanc immaculé des Three Lions. Football is coming home avec ce maillot emblématique.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '15',
    name: 'Maillot Domicile Portugal 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Seleção das Quinas',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le rouge et vert du Portugal. Champions d\'Europe avec Cristiano Ronaldo.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '16',
    name: 'Maillot Domicile Pays-Bas 2024',
    price: 39.99,
    originalPrice: 110.00,
    team: 'Oranje',
    league: 'International',
    season: '2024',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'L\'orange emblématique d\'Oranje. Football total et tradition néerlandaise.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'national',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  // Nouveaux maillots Rétro
  {
    id: '17',
    name: 'Maillot Rétro France 1998 Coupe du Monde',
    price: 49.99,
    originalPrice: 149.99,
    team: 'Équipe de France',
    league: 'Coupe du Monde',
    season: '1998',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot légendaire de la victoire en Coupe du Monde 1998. Zidane, Thuram, Petit... Revivez la magie !',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'retro',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '18',
    name: 'Maillot Rétro AC Milan 1990',
    price: 49.99,
    originalPrice: 149.99,
    team: 'AC Milan',
    league: 'Serie A',
    season: '1990',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot de l\'époque dorée du Milan AC. Van Basten, Gullit, Rijkaard... Les légendes néerlandaises.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'retro',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '19',
    name: 'Maillot Rétro Brésil 1970 Pelé',
    price: 49.99,
    originalPrice: 149.99,
    team: 'Seleção Brasileira',
    league: 'Coupe du Monde',
    season: '1970',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot mythique de Pelé et de la plus belle équipe de l\'histoire. Mexique 1970, le football art.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'retro',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '20',
    name: 'Maillot Rétro Manchester United 1999',
    price: 49.99,
    originalPrice: 149.99,
    team: 'Manchester United',
    league: 'Premier League',
    season: '1999',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Le maillot du triplé historique. Beckham, Scholes, Giggs... La classe 92 au sommet.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'retro',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  // Nouveaux maillots Collector
  {
    id: '21',
    name: 'Maillot Collector Maradona Argentine 1986',
    price: 49.99,
    originalPrice: 149.99,
    team: 'Argentine',
    league: 'Coupe du Monde',
    season: '1986',
    images: [
      'https://drive.google.com/file/d/14siJTFSYSqLuRpHwPnwik0ZjglX76Koj/view?usp=drivesdk',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Édition collector du maillot de Maradona lors de la Coupe du Monde 1986. "La main de Dieu" et le but du siècle.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'collector',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '22',
    name: 'Maillot Collector Ronaldinho Barcelona 2005',
    price: 49.99,
    originalPrice: 149.99,
    team: 'FC Barcelona',
    league: 'La Liga',
    season: '2005',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Maillot collector de Ronaldinho au Barça. Le magicien brésilien qui a fait rêver le Camp Nou.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'collector',
    featured: false,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '23',
    name: 'Maillot Collector Zidane Real Madrid 2002',
    price: 49.99,
    originalPrice: 149.99,
    team: 'Real Madrid',
    league: 'Champions League',
    season: '2002',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Édition collector du maillot de Zidane lors de la finale de Champions League 2002. La volée légendaire.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'collector',
    featured: true,
    inStock: true,
    hasPromotion: true
  },
  {
    id: '24',
    name: 'Maillot Collector Thierry Henry Arsenal 2004',
    price: 49.99,
    originalPrice: 149.99,
    team: 'Arsenal',
    league: 'Premier League',
    season: '2004',
    images: [
      'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg'
    ],
    description: 'Maillot collector de Thierry Henry lors de la saison des "Invincibles". Arsenal invaincus en Premier League.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'collector',
    featured: false,
    inStock: true,
    hasPromotion: true
  }
];

export const videosPresentations: VideoPresentation[] = [
  {
    id: '1',
    title: 'Présentation Pogba Monaco 2025',
    thumbnail: 'https://www.kickfootball.fr/wp-content/uploads/2025/06/Paul-Pogba-a-Monaco-860x482.jpg.webp',
    videoUrl: 'https://www.beinsports.com/fr-fr/football/ligue-1/articles-video/ligue-1-les-premi%C3%A8res-images-de-pogba-%C3%A0-monaco-2025-06-29?dmplayersource=share-send',
    description: 'Découvrez le nouveau maillot de Monaco'
  },
  {
    id: '2',
    title: ' PSG 2025 Champion',
    thumbnail: 'https://www.franceinfo.fr/pictures/eMAi8iNriapZ47JNUu01ykDlLtE/0x10:1024x586/1328x747/filters:format(avif):quality(50)/2025/05/31/ap25151762854871-1-683b70f20ddbb659996629.jpg',
    videoUrl: 'https://youtu.be/_psNZujo5yU?si=R12YvbhfLRIwsOsB',
    description: 'La nouvelle collection du Paris Saint-Germain'
  },
  {
    id: '3',
    title: 'Real Madrid - Nouveau Design',
    thumbnail: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Le design intemporel du Real Madrid'
  }
];

export const customerReviews: CustomerReview[] = [
  {
    id: '1',
    name: 'Antoine M.',
    rating: 5,
    comment: 'Qualité exceptionnelle ! Le maillot de France est parfait, taille bien et les couleurs sont magnifiques.',
    product: 'Maillot France 2024',
    date: '2025-01-15'
  },
  {
    id: '2',
    name: 'Sophie L.',
    rating: 5,
    comment: 'Livraison ultra rapide et maillot conforme à mes attentes. L\'offre 2+1 est géniale !',
    product: 'Maillot Real Madrid',
    date: '2025-01-12'
  },
  {
    id: '3',
    name: 'Marc D.',
    rating: 4,
    comment: 'Très satisfait de mon achat. Le maillot du Barça est authentique et de très bonne qualité.',
    product: 'Maillot FC Barcelona',
    date: '2025-01-10'
  },
  {
    id: '4',
    name: 'Julie R.',
    rating: 5,
    comment: 'Service client au top ! J\'ai eu un problème de taille et l\'échange s\'est fait sans souci.',
    product: 'Maillot OM 2024',
    date: '2025-01-08'
  },
  {
    id: '5',
    name: 'Thomas B.',
    rating: 5,
    comment: 'Site de confiance, produits authentiques. Je recommande vivement FootballShop !',
    product: 'Maillot Manchester United',
    date: '2025-01-05'
  },
  {
    id: '6',
    name: 'Emma C.',
    rating: 4,
    comment: 'Maillots de qualité premium, emballage soigné. Parfait pour offrir !',
    product: 'Maillot Liverpool FC',
    date: '2025-01-03'
  },
  {
    id: '7',
    name: 'Lucas P.',
    rating: 5,
    comment: 'L\'offre 2+1 offert est incroyable ! Trois maillots pour le prix de deux.',
    product: 'Maillot AS Monaco',
    date: '2025-01-01'
  },
  {
    id: '8',
    name: 'Camille F.',
    rating: 5,
    comment: 'Excellent rapport qualité-prix. Les maillots sont identiques à ceux des joueurs !',
    product: 'Maillot France 2024',
    date: '2024-12-28'
  },
  {
    id: '9',
    name: 'Pierre K.',
    rating: 5,
    comment: 'Le maillot du Brésil est magnifique ! Couleurs éclatantes et finitions parfaites.',
    product: 'Maillot Brésil 2024',
    date: '2025-01-14'
  },
  {
    id: '10',
    name: 'Marie T.',
    rating: 4,
    comment: 'Très contente de mon maillot de l\'Argentine. La qualité est au rendez-vous !',
    product: 'Maillot Argentine 2024',
    date: '2025-01-11'
  },
  {
    id: '11',
    name: 'Alexandre D.',
    rating: 5,
    comment: 'Le maillot rétro France 1998 est parfait ! Nostalgie garantie, qualité au top.',
    product: 'Maillot Rétro France 1998',
    date: '2025-01-16'
  },
  {
    id: '12',
    name: 'Isabelle M.',
    rating: 5,
    comment: 'Maillot collector Maradona exceptionnel ! Pièce unique pour ma collection.',
    product: 'Maillot Collector Maradona 1986',
    date: '2025-01-13'
  }
];