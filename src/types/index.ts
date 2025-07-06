export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  team: string;
  league: string;
  season: string;
  images: string[];
  description: string;
  sizes: string[];
  category: 'french' | 'international' | 'national' | 'retro' | 'collector';
  featured: boolean;
  inStock: boolean;
  hasPromotion?: boolean;
  isPreorder?: boolean;
  preorderDate?: string;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
  isPaid?: boolean; // true for paid items, false for free items
  promoGroupId?: string; // ID to group promotion items together
}

export interface VideoPresentation {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
}