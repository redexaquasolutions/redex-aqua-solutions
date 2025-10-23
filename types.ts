export interface Review {
  id: number;
  author: string;
  rating: number; // 1-5
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  category: 'Feed' | 'Probiotics' | 'Health';
  images: string[];
  price?: number;
  composition: string;
  dosage: string;
  benefits: string[];
  description: string;
  reviews?: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}