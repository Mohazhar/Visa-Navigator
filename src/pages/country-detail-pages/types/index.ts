export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  heroImage: string;
  heroImageAlt: string;
  tagline: string;
  description: string;
  visaTypes: VisaType[];
  processingTime: string;
  successRate: number;
  pricing: CountryPricing;
  requirements: Requirement[];
  timeline: TimelineStep[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  embassyInfo: EmbassyInfo;
  recentUpdates: PolicyUpdate[];
  similarDestinations: SimilarDestination[];
  stats: CountryStats;
}

export interface VisaType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  processingTime: string;
  icon: string;
}

export interface CountryPricing {
  governmentFee: number;
  serviceFee: number;
  totalFee: number;
  currency: string;
  refundPolicy: string;
}

export interface Requirement {
  id: string;
  category: string;
  title: string;
  description: string;
  mandatory: boolean;
  icon: string;
}

export interface TimelineStep {
  id: string;
  step: number;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  avatarAlt: string;
  country: string;
  visaType: string;
  rating: number;
  date: string;
  content: string;
  image?: string;
  imageAlt?: string;
  processingTime: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface EmbassyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  workingHours: string;
  latitude: number;
  longitude: number;
}

export interface PolicyUpdate {
  id: string;
  title: string;
  date: string;
  description: string;
  impact: 'positive' | 'neutral' | 'negative';
  icon: string;
}

export interface SimilarDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  image: string;
  imageAlt: string;
  processingTime: string;
  successRate: number;
  price: number;
}

export interface CountryStats {
  totalApplications: number;
  averageProcessingDays: number;
  approvalRate: number;
  rejectionReasons: RejectionReason[];
}

export interface RejectionReason {
  reason: string;
  percentage: number;
  prevention: string;
}

export interface Currency {
  code: string;
  symbol: string;
  rate: number;
}