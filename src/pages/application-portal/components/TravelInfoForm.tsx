import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import { ApplicationFormData, ValidationError, Country } from '../types';

interface TravelInfoFormProps {
  formData: ApplicationFormData['travelInfo'];
  onChange: (data: ApplicationFormData['travelInfo']) => void;
  onNext: () => void;
  onBack: () => void;
  errors: ValidationError[];
  countries: Country[];
}

const TravelInfoForm = ({ 
  formData, 
  onChange, 
  onNext, 
  onBack, 
  errors,
  countries 
}: TravelInfoFormProps) => {
  const [localData, setLocalData] = useState(formData);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    countries.find(c => c.id === formData.countryId) || null
  );

  const handleChange = (field: keyof ApplicationFormData['travelInfo'], value: string) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChange(updated);
  };

  const handleCountryChange = (countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    setSelectedCountry(country || null);
    handleChange('countryId', countryId);
    handleChange('visaTypeId', '');
  };

  const getError = (field: string) => {
    return errors.find(e => e.field === field)?.message;
  };

  const countryOptions = countries.map(c => ({
    value: c.id,
    label: c.name,
    description: `${c.visaTypes.length} visa types available`
  }));

  const visaTypeOptions = selectedCountry?.visaTypes.map(v => ({
    value: v.id,
    label: v.name,
    description: `${v.processingTime} • $${v.price}`
  })) || [];

  const purposeOptions = [
    { value: 'tourism', label: 'Tourism', description: 'Vacation and sightseeing' },
    { value: 'business', label: 'Business', description: 'Meetings and conferences' },
    { value: 'education', label: 'Education', description: 'Study and training' },
    { value: 'work', label: 'Work', description: 'Employment purposes' },
    { value: 'family', label: 'Family Visit', description: 'Visiting relatives' },
    { value: 'medical', label: 'Medical', description: 'Treatment and healthcare' }
  ];

  return (
    <div className="w-full space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Select
          label="Destination Country"
          labelClassName="text-brand-midnight font-bold"
          options={countryOptions}
          value={localData.countryId}
          onChange={(value) => handleCountryChange(value as string)}
          error={getError('countryId')}
          searchable
          required
        />

        <Select
          label="Visa Type"
          labelClassName="text-brand-midnight font-bold"
          options={visaTypeOptions}
          value={localData.visaTypeId}
          onChange={(value) => handleChange('visaTypeId', value as string)}
          error={getError('visaTypeId')}
          disabled={!selectedCountry}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="Travel Date"
          labelClassName="text-brand-midnight font-bold"
          type="date"
          value={localData.travelDate}
          onChange={(e) => handleChange('travelDate', e.target.value)}
          error={getError('travelDate')}
          description="Planned departure date"
          descriptionClassName="text-brand-slate/80 font-medium"
          required
        />

        <Input
          label="Return Date"
          labelClassName="text-brand-midnight font-bold"
          type="date"
          value={localData.returnDate}
          onChange={(e) => handleChange('returnDate', e.target.value)}
          error={getError('returnDate')}
          description="Planned return date"
          descriptionClassName="text-brand-slate/80 font-medium"
          required
        />
      </div>

      <Select
        label="Purpose of Travel"
        labelClassName="text-brand-midnight font-bold"
        options={purposeOptions}
        value={localData.purpose}
        onChange={(value) => handleChange('purpose', value as string)}
        error={getError('purpose')}
        required
      />

      {/* Info Card: Midnight Blue wash with Gold border for a premium detail section */}
      {selectedCountry && localData.visaTypeId && (
        <div className="p-4 md:p-6 bg-brand-midnight/[0.03] border border-brand-gold/20 rounded-xl shadow-sm animate-fade-in">
          <h4 className="font-bold text-sm md:text-base text-brand-midnight mb-2 uppercase tracking-wide">
            Selected Visa Details
          </h4>
          {(() => {
            const visaType = selectedCountry.visaTypes.find(v => v.id === localData.visaTypeId);
            return visaType ? (
              <div className="space-y-3">
                <p className="text-xs md:text-sm text-brand-slate leading-relaxed">
                  {visaType.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2 border-t border-brand-gold/10">
                  <span className="text-xs md:text-sm text-brand-midnight">
                    <strong className="text-brand-gold font-bold">Processing:</strong> {visaType.processingTime}
                  </span>
                  <span className="text-xs md:text-sm text-brand-midnight">
                    <strong className="text-brand-gold font-bold">Fee:</strong> ${visaType.price}
                  </span>
                </div>
              </div>
            ) : null;
          })()}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-between pt-6 border-t border-brand-slate/10">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={onBack}
          /* Secondary button uses professional Slate */
          className="text-brand-slate border-brand-slate hover:bg-brand-slate/5"
        >
          Back to Personal Info
        </Button>
        <Button
          variant="default"
          size="lg"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onNext}
          /* Button uses authoritative Midnight Blue with Gold icon focus */
          className="bg-brand-midnight hover:bg-brand-midnight/90 text-white font-bold shadow-lg shadow-brand-midnight/10 px-8"
        >
          Continue to Documents
        </Button>
      </div>
    </div>
  );
};

export default TravelInfoForm;