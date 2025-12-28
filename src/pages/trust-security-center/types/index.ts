export interface SecurityCertification {
  id: string;
  name: string;
  issuer: string;
  validUntil: string;
  badgeUrl: string;
  verificationUrl: string;
  description: string;
  alt: string;
}

export interface GovernmentPartnership {
  id: string;
  country: string;
  agency: string;
  partnershipType: string;
  establishedDate: string;
  logoUrl: string;
  officialUrl: string;
  description: string;
  alt: string;
}

export interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  experience: string;
  specialization: string[];
  photoUrl: string;
  linkedIn?: string;
  alt: string;
}

export interface SecurityMeasure {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  timeline: string;
  icon: string;
}

export interface MediaMention {
  id: string;
  outlet: string;
  title: string;
  date: string;
  logoUrl: string;
  articleUrl: string;
  excerpt: string;
  alt: string;
}

export interface SuccessMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
  trend: string;
}

export interface ComplianceDocument {
  id: string;
  title: string;
  type: string;
  lastUpdated: string;
  fileUrl: string;
  icon: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}