import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { ApplicationFormData, ValidationError } from '../types';

interface PersonalInfoFormProps {
  formData: ApplicationFormData['personalInfo'];
  onChange: (data: ApplicationFormData['personalInfo']) => void;
  onNext: () => void;
  errors: ValidationError[];
}

const PersonalInfoForm = ({ formData, onChange, onNext, errors }: PersonalInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (field: keyof ApplicationFormData['personalInfo'], value: string) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => {
    return errors.find(e => e.field === field)?.message;
  };

  const nationalityOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'in', label: 'India' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'cn', label: 'China' },
    { value: 'br', label: 'Brazil' }
  ];

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Color Logic: 
          - Labels: brand-midnight (Trust)
          - Descriptions: brand-slate (Professionalism)
          - Focus States: brand-gold (Quality)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="First Name"
          labelClassName="text-brand-midnight font-bold"
          type="text"
          placeholder="Enter your first name"
          value={localData.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          error={getError('firstName')}
          required
        />

        <Input
          label="Last Name"
          labelClassName="text-brand-midnight font-bold"
          type="text"
          placeholder="Enter your last name"
          value={localData.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          error={getError('lastName')}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Email Address"
          labelClassName="text-brand-midnight font-bold"
          type="email"
          placeholder="your.email@example.com"
          value={localData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={getError('email')}
          description="We'll send updates to this email"
          descriptionClassName="text-brand-slate/80 font-medium"
          required
        />

        <Input
          label="Phone Number"
          labelClassName="text-brand-midnight font-bold"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={localData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={getError('phone')}
          description="Include country code"
          descriptionClassName="text-brand-slate/80 font-medium"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Date of Birth"
          labelClassName="text-brand-midnight font-bold"
          type="date"
          value={localData.dateOfBirth}
          onChange={(e) => handleChange('dateOfBirth', e.target.value)}
          error={getError('dateOfBirth')}
          required
        />

        <Select
          label="Nationality"
          labelClassName="text-brand-midnight font-bold"
          options={nationalityOptions}
          value={localData.nationality}
          onChange={(value) => handleChange('nationality', value as string)}
          error={getError('nationality')}
          searchable
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Passport Number"
          labelClassName="text-brand-midnight font-bold"
          type="text"
          placeholder="A12345678"
          value={localData.passportNumber}
          onChange={(e) => handleChange('passportNumber', e.target.value)}
          error={getError('passportNumber')}
          description="As shown on your passport"
          descriptionClassName="text-brand-slate/80 font-medium"
          required
        />

        <Input
          label="Passport Expiry Date"
          labelClassName="text-brand-midnight font-bold"
          type="date"
          value={localData.passportExpiry}
          onChange={(e) => handleChange('passportExpiry', e.target.value)}
          error={getError('passportExpiry')}
          description="Must be valid for 6+ months"
          descriptionClassName="text-brand-slate/80 font-medium"
          required
        />
      </div>

      <div className="flex justify-end pt-6 border-t border-brand-slate/10">
        <Button
          variant="default"
          size="lg"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onNext}
          /* Button uses authoritative Midnight Blue with a subtle hover elevation */
          className="bg-brand-midnight hover:bg-brand-midnight/90 text-white font-bold shadow-lg shadow-brand-midnight/10 px-8"
        >
          Continue to Travel Details
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;