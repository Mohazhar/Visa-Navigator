export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  visaTypes: string[];
  processingTime: string;
  successRate: number;
  popularityRank: number;
  region: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  alt: string;
  rating: number;
  comment: string;
  visaType: string;
  processingDays: number;
  date: string;
}

export interface TrustMetric {
  id: string;
  label: string;
  value: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface FeaturedDestination {
  id: string;
  country: string;
  code: string;
  flag: string;
  image: string;
  alt: string;
  visaTypes: string[];
  processingTime: string;
  successRate: number;
  startingPrice: number;
  currency: string;
  popular: boolean;
}

export interface SearchSuggestion {
  country: string;
  code: string;
  flag: string;
  visaTypes: string[];
  processingTime: string;
}