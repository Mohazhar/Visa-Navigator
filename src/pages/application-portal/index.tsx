import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ProgressTracker from './components/ProgressTracker';
import PersonalInfoForm from './components/PersonalInfoForm';
import TravelInfoForm from './components/TravelInfoForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import AdditionalInfoForm from './components/AdditionalInfoForm';
import SuccessModal from './components/SuccessModal';
import {
  ApplicationFormData,
  FormSection,
  ValidationError,
  Country,
  DocumentRequirement,
  UploadedDocument
} from './types';

const ApplicationPortal = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const [formData, setFormData] = useState<ApplicationFormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      nationality: '',
      passportNumber: '',
      passportExpiry: ''
    },
    travelInfo: {
      countryId: '',
      visaTypeId: '',
      travelDate: '',
      returnDate: '',
      purpose: ''
    },
    documents: [],
    additionalInfo: {
      previousVisas: false,
      criminalRecord: false,
      medicalConditions: false,
      emergencyContact: '',
      emergencyPhone: ''
    }
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const countries: Country[] = [
    {
      id: 'us',
      name: 'United States',
      code: 'US',
      flag: 'https://flagcdn.com/w320/us.png',
      visaTypes: [
        {
          id: 'us-tourist',
          name: 'Tourist Visa (B-2)',
          description: 'For tourism, vacation, and visiting friends/family',
          processingTime: '15-20 business days',
          price: 160,
          icon: 'Plane'
        },
        {
          id: 'us-business',
          name: 'Business Visa (B-1)',
          description: 'For business meetings, conferences, and negotiations',
          processingTime: '15-20 business days',
          price: 160,
          icon: 'Briefcase'
        }
      ]
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      code: 'GB',
      flag: 'https://flagcdn.com/w320/gb.png',
      visaTypes: [
        {
          id: 'uk-tourist',
          name: 'Standard Visitor Visa',
          description: 'For tourism, visiting family, or short business trips',
          processingTime: '3 weeks',
          price: 115,
          icon: 'Plane'
        }
      ]
    },
    {
      id: 'ca',
      name: 'Canada',
      code: 'CA',
      flag: 'https://flagcdn.com/w320/ca.png',
      visaTypes: [
        {
          id: 'ca-tourist',
          name: 'Visitor Visa',
          description: 'For tourism and visiting family/friends',
          processingTime: '2-4 weeks',
          price: 100,
          icon: 'Plane'
        }
      ]
    }
  ];

  const documentRequirements: DocumentRequirement[] = [
    {
      id: 'passport',
      name: 'Passport Copy',
      description: 'Clear copy of your passport bio page showing photo and details',
      required: true,
      format: ['pdf', 'jpg', 'png'],
      maxSize: 10485760,
      icon: 'FileText'
    },
    {
      id: 'photo',
      name: 'Passport Photo',
      description: 'Recent passport-sized photograph with white background',
      required: true,
      format: ['jpg', 'png'],
      maxSize: 5242880,
      icon: 'Camera'
    },
    {
      id: 'bank-statement',
      name: 'Bank Statement',
      description: 'Last 3 months bank statements showing sufficient funds',
      required: true,
      format: ['pdf'],
      maxSize: 10485760,
      icon: 'DollarSign'
    },
    {
      id: 'employment',
      name: 'Employment Letter',
      description: 'Letter from employer confirming employment and leave approval',
      required: false,
      format: ['pdf'],
      maxSize: 5242880,
      icon: 'Briefcase'
    },
    {
      id: 'itinerary',
      name: 'Travel Itinerary',
      description: 'Flight bookings and accommodation reservations',
      required: false,
      format: ['pdf'],
      maxSize: 5242880,
      icon: 'MapPin'
    }
  ];

  const [sections, setSections] = useState<FormSection[]>([
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Basic details and passport information',
      icon: 'User',
      completed: false,
      fields: 8,
      completedFields: 0
    },
    {
      id: 'travel',
      title: 'Travel Details',
      description: 'Destination and visa type selection',
      icon: 'Plane',
      completed: false,
      fields: 5,
      completedFields: 0
    },
    {
      id: 'documents',
      title: 'Document Upload',
      description: 'Required documents and certificates',
      icon: 'Upload',
      completed: false,
      fields: 3,
      completedFields: 0
    },
    {
      id: 'additional',
      title: 'Additional Information',
      description: 'Emergency contacts and declarations',
      icon: 'FileCheck',
      completed: false,
      fields: 2,
      completedFields: 0
    }
  ]);

  useEffect(() => {
    updateSectionProgress();
  }, [formData]);

  const updateSectionProgress = () => {
    const updatedSections = [...sections];

    const personalFields = Object.values(formData.personalInfo).filter(v => v !== '').length;
    updatedSections[0].completedFields = personalFields;
    updatedSections[0].completed = personalFields === 8;

    const travelFields = Object.values(formData.travelInfo).filter(v => v !== '').length;
    updatedSections[1].completedFields = travelFields;
    updatedSections[1].completed = travelFields === 5;

    const requiredDocs = documentRequirements.filter(d => d.required).length;
    const uploadedRequiredDocs = formData.documents.filter(d => 
      documentRequirements.find(r => r.id === d.requirementId && r.required)
    ).length;
    updatedSections[2].completedFields = uploadedRequiredDocs;
    updatedSections[2].completed = uploadedRequiredDocs === requiredDocs;

    const additionalFields = [
      formData.additionalInfo.emergencyContact,
      formData.additionalInfo.emergencyPhone
    ].filter(v => v !== '').length;
    updatedSections[3].completedFields = additionalFields;
    updatedSections[3].completed = additionalFields === 2;

    setSections(updatedSections);
  };

  const calculateProgress = () => {
    const totalFields = sections.reduce((sum, s) => sum + s.fields, 0);
    const completedFields = sections.reduce((sum, s) => sum + s.completedFields, 0);
    return Math.round((completedFields / totalFields) * 100);
  };

  const validatePersonalInfo = (): boolean => {
    const newErrors: ValidationError[] = [];
    const { personalInfo } = formData;

    if (!personalInfo.firstName) newErrors.push({ field: 'firstName', message: 'First name is required' });
    if (!personalInfo.lastName) newErrors.push({ field: 'lastName', message: 'Last name is required' });
    if (!personalInfo.email) newErrors.push({ field: 'email', message: 'Email is required' });
    if (!personalInfo.phone) newErrors.push({ field: 'phone', message: 'Phone number is required' });
    if (!personalInfo.dateOfBirth) newErrors.push({ field: 'dateOfBirth', message: 'Date of birth is required' });
    if (!personalInfo.nationality) newErrors.push({ field: 'nationality', message: 'Nationality is required' });
    if (!personalInfo.passportNumber) newErrors.push({ field: 'passportNumber', message: 'Passport number is required' });
    if (!personalInfo.passportExpiry) newErrors.push({ field: 'passportExpiry', message: 'Passport expiry is required' });

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const validateTravelInfo = (): boolean => {
    const newErrors: ValidationError[] = [];
    const { travelInfo } = formData;

    if (!travelInfo.countryId) newErrors.push({ field: 'countryId', message: 'Destination country is required' });
    if (!travelInfo.visaTypeId) newErrors.push({ field: 'visaTypeId', message: 'Visa type is required' });
    if (!travelInfo.travelDate) newErrors.push({ field: 'travelDate', message: 'Travel date is required' });
    if (!travelInfo.returnDate) newErrors.push({ field: 'returnDate', message: 'Return date is required' });
    if (!travelInfo.purpose) newErrors.push({ field: 'purpose', message: 'Purpose of travel is required' });

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const validateDocuments = (): boolean => {
    const newErrors: ValidationError[] = [];
    const requiredDocs = documentRequirements.filter(d => d.required);

    requiredDocs.forEach(req => {
      const uploaded = formData.documents.find(d => d.requirementId === req.id);
      if (!uploaded) {
        newErrors.push({ field: req.id, message: `${req.name} is required` });
      }
    });

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const validateAdditionalInfo = (): boolean => {
    const newErrors: ValidationError[] = [];
    const { additionalInfo } = formData;

    if (!additionalInfo.emergencyContact) {
      newErrors.push({ field: 'emergencyContact', message: 'Emergency contact is required' });
    }
    if (!additionalInfo.emergencyPhone) {
      newErrors.push({ field: 'emergencyPhone', message: 'Emergency phone is required' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSectionClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    setErrors([]);
  };

  const handlePersonalInfoNext = () => {
    if (validatePersonalInfo()) {
      setCurrentSection('travel');
    }
  };

  const handleTravelInfoNext = () => {
    if (validateTravelInfo()) {
      setCurrentSection('documents');
    }
  };

  const handleDocumentsNext = () => {
    if (validateDocuments()) {
      setCurrentSection('additional');
    }
  };

  const handleDocumentUpload = (requirementId: string, file: File) => {
    const newDoc: UploadedDocument = {
      id: `doc-${Date.now()}`,
      requirementId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      uploadDate: new Date(),
      status: 'pending',
      url: URL.createObjectURL(file)
    };

    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents.filter(d => d.requirementId !== requirementId), newDoc]
    }));
  };

  const handleDocumentRemove = (documentId: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(d => d.id !== documentId)
    }));
  };

  const handleSubmit = async () => {
    if (!validateAdditionalInfo()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newApplicationId = `VFP-${Date.now().toString().slice(-8)}`;
      setApplicationId(newApplicationId);
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  const handleTrackApplication = () => {
    navigate('/live-tracking-dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <button onClick={() => navigate('/homepage')} className="hover:text-primary transition-smooth">
                Home
              </button>
              <Icon name="ChevronRight" size={16} />
              <span className="text-foreground">Application Portal</span>
            </div>

            <h1 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
              Visa Application Portal
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
              Complete your visa application in simple steps. Our secure portal guides you through the process with real-time validation and progress tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <ProgressTracker
                sections={sections}
                currentSection={currentSection}
                completionPercentage={calculateProgress()}
                onSectionClick={handleSectionClick}
              />

              {/* Help Box: Using Midnight Blue and Gold for a premium support feel */}
              <div className="mt-6 p-4 md:p-6 bg-brand-midnight/[0.03] border border-brand-gold/20 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  {/* Icon: Champagne Gold for premium quality service */}
                  <Icon name="MessageCircle" size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    {/* Header: Deep Midnight Blue for Authority */}
                    <h4 className="font-bold text-sm md:text-base text-brand-midnight mb-1">
                      Expert Support
                    </h4>
                    {/* Subtext: Steel Blue / Slate for Modernity */}
                    <p className="text-xs md:text-sm text-brand-slate mb-4 font-medium">
                      Our visa consultants are available 24/7 for real-time guidance.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="MessageCircle"
                      iconPosition="left"
                      fullWidth
                      onClick={() => window.open('https://wa.me/', '_blank')}
                      /* Button: Midnight Blue for Trust */
                      className="text-brand-midnight border-brand-midnight hover:bg-brand-midnight/5 font-bold uppercase tracking-wide text-[10px]"
                    >
                      Consult via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="lg:col-span-2">
              <div className="w-full bg-card rounded-xl border border-border p-6 md:p-8 lg:p-10">
                {currentSection === 'personal' && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="User" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">
                          Personal Information
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Enter your basic details as shown on your passport
                        </p>
                      </div>
                    </div>
                    <PersonalInfoForm
                      formData={formData.personalInfo}
                      onChange={(data) => setFormData(prev => ({ ...prev, personalInfo: data }))}
                      onNext={handlePersonalInfoNext}
                      errors={errors}
                    />
                  </div>
                )}

                {currentSection === 'travel' && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Plane" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">
                          Travel Details
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Select your destination and visa type
                        </p>
                      </div>
                    </div>
                    <TravelInfoForm
                      formData={formData.travelInfo}
                      onChange={(data) => setFormData(prev => ({ ...prev, travelInfo: data }))}
                      onNext={handleTravelInfoNext}
                      onBack={() => setCurrentSection('personal')}
                      errors={errors}
                      countries={countries}
                    />
                  </div>
                )}

                {currentSection === 'documents' && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Upload" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">
                          Document Upload
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Upload required documents for your visa application
                        </p>
                      </div>
                    </div>
                    <DocumentUploadForm
                      requirements={documentRequirements}
                      uploadedDocuments={formData.documents}
                      onUpload={handleDocumentUpload}
                      onRemove={handleDocumentRemove}
                      onNext={handleDocumentsNext}
                      onBack={() => setCurrentSection('travel')}
                      errors={errors}
                    />
                  </div>
                )}

                {currentSection === 'additional' && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="FileCheck" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">
                          Additional Information
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Final details and declarations
                        </p>
                      </div>
                    </div>
                    <AdditionalInfoForm
                      formData={formData.additionalInfo}
                      onChange={(data) => setFormData(prev => ({ ...prev, additionalInfo: data }))}
                      onSubmit={handleSubmit}
                      onBack={() => setCurrentSection('documents')}
                      errors={errors}
                      isSubmitting={isSubmitting}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SuccessModal
        isOpen={showSuccessModal}
        applicationId={applicationId}
        onClose={() => setShowSuccessModal(false)}
        onTrackApplication={handleTrackApplication}
      />
    </div>
  );
};

export default ApplicationPortal;