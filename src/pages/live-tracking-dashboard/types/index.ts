export interface Application {
  id: string;
  applicationNumber: string;
  country: string;
  countryCode: string;
  visaType: string;
  applicantName: string;
  submissionDate: Date;
  estimatedCompletion: Date;
  currentStage: string;
  status: 'pending' | 'in-progress' | 'approved' | 'rejected' | 'additional-docs-required';
  progress: number;
  flagUrl: string;
  flagAlt: string;
}

export interface TimelineStage {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending' | 'failed';
  timestamp?: Date;
  estimatedDate?: Date;
  icon: string;
  details?: string[];
}

export interface StatusUpdate {
  id: string;
  message: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning' | 'error';
  isFromSystem: boolean;
  icon: string;
}

export interface DocumentStatus {
  id: string;
  name: string;
  status: 'verified' | 'pending' | 'rejected' | 'expired';
  uploadDate: Date;
  expiryDate?: Date;
  rejectionReason?: string;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  whatsapp: boolean;
  pushNotifications: boolean;
}

export interface ProcessingMetrics {
  averageProcessingTime: number;
  yourProcessingTime: number;
  percentageFaster: number;
  applicationsAhead: number;
}