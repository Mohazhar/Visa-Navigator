export interface VisaType {
  id: string;
  name: string;
  description: string;
  processingTime: string;
  price: number;
  icon: string;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  visaTypes: VisaType[];
}

export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
  format: string[];
  maxSize: number;
  icon: string;
}

export interface UploadedDocument {
  id: string;
  requirementId: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadDate: Date;
  status: 'pending' | 'verified' | 'rejected';
  url: string;
}

export interface ApplicationFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nationality: string;
    passportNumber: string;
    passportExpiry: string;
  };
  travelInfo: {
    countryId: string;
    visaTypeId: string;
    travelDate: string;
    returnDate: string;
    purpose: string;
  };
  documents: UploadedDocument[];
  additionalInfo: {
    previousVisas: boolean;
    criminalRecord: boolean;
    medicalConditions: boolean;
    emergencyContact: string;
    emergencyPhone: string;
  };
}

export interface FormSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
  fields: number;
  completedFields: number;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ApplicationProgress {
  currentStep: number;
  totalSteps: number;
  completionPercentage: number;
  sections: FormSection[];
}