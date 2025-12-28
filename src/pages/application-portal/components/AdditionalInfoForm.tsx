import { useState } from 'react';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import { ApplicationFormData, ValidationError } from '../types';

interface AdditionalInfoFormProps {
  formData: ApplicationFormData['additionalInfo'];
  onChange: (data: ApplicationFormData['additionalInfo']) => void;
  onSubmit: () => void;
  onBack: () => void;
  errors: ValidationError[];
  isSubmitting: boolean;
}

const AdditionalInfoForm = ({
  formData,
  onChange,
  onSubmit,
  onBack,
  errors,
  isSubmitting
}: AdditionalInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);

  const handleChange = (field: keyof ApplicationFormData['additionalInfo'], value: string | boolean) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const getError = (field: string) => {
    return errors.find(e => e.field === field)?.message;
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <div className="space-y-4">
        {/* Checkboxes: Using Midnight Blue labels and Gold focus rings */}
        <Checkbox
          label="I have previously held visas for this country"
          labelClassName="text-brand-midnight font-medium"
          description="Check if you've been issued a visa for this destination before"
          descriptionClassName="text-brand-slate"
          checked={localData.previousVisas}
          onChange={(e) => handleChange('previousVisas', e.target.checked)}
        />

        <Checkbox
          label="I have a criminal record"
          labelClassName="text-brand-midnight font-medium"
          description="Disclosure is mandatory and will not automatically disqualify you"
          descriptionClassName="text-brand-slate"
          checked={localData.criminalRecord}
          onChange={(e) => handleChange('criminalRecord', e.target.checked)}
        />

        <Checkbox
          label="I have medical conditions requiring disclosure"
          labelClassName="text-brand-midnight font-medium"
          description="Some countries require health declarations for visa processing"
          descriptionClassName="text-brand-slate"
          checked={localData.medicalConditions}
          onChange={(e) => handleChange('medicalConditions', e.target.checked)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Emergency Contact Name"
          labelClassName="text-brand-midnight font-bold"
          type="text"
          placeholder="Full name of emergency contact"
          value={localData.emergencyContact}
          onChange={(e) => handleChange('emergencyContact', e.target.value)}
          error={getError('emergencyContact')}
          description="Person to contact in case of emergency"
          descriptionClassName="text-brand-slate"
          required
        />

        <Input
          label="Emergency Contact Phone"
          labelClassName="text-brand-midnight font-bold"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={localData.emergencyPhone}
          onChange={(e) => handleChange('emergencyPhone', e.target.value)}
          error={getError('emergencyPhone')}
          description="Include country code"
          descriptionClassName="text-brand-slate"
          required
        />
      </div>

      {/* Declaration Box: A Midnight Blue wash with a subtle Gold border */}
      <div className="p-4 md:p-6 bg-brand-midnight/[0.03] border border-brand-gold/20 rounded-xl shadow-sm">
        <h4 className="font-bold text-sm md:text-base text-brand-midnight mb-3 uppercase tracking-wider">
          Declaration & Consent
        </h4>
        <div className="space-y-3 text-xs md:text-sm text-brand-slate">
          <p className="font-medium text-brand-midnight/80">
            By submitting this application, I declare that:
          </p>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span>All information provided is true and accurate to the best of my knowledge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span>I understand that providing false information may result in visa rejection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span>I consent to the processing of my personal data for visa application purposes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span>I have read and agree to the terms and conditions of VisaNavigator</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-bold">•</span>
              <span>I authorize VisaNavigator to submit my application to the relevant embassy</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-between pt-6 border-t border-brand-slate/10">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={onBack}
          disabled={isSubmitting}
          /* Button uses professional Slate/Steel Blue */
          className="text-brand-slate border-brand-slate hover:bg-brand-slate/5 transition-all"
        >
          Back to Documents
        </Button>
        <Button
          variant="default"
          size="lg"
          iconName="Send"
          iconPosition="right"
          onClick={onSubmit}
          loading={isSubmitting}
          /* Submit button uses authoritative Midnight Blue with a subtle premium shadow */
          className="bg-brand-midnight hover:bg-brand-midnight/90 text-white font-bold shadow-lg shadow-brand-midnight/10 transition-all"
        >
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;