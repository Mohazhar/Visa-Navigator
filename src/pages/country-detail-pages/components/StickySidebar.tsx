import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';
import { Country, Currency } from '../types';

interface StickySidebarProps {
  country: Country;
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onWhatsAppClick: () => void;
  onApplyClick: () => void;
}

const StickySidebar = ({
  country,
  selectedCurrency,
  onCurrencyChange,
  onWhatsAppClick,
  onApplyClick
}: StickySidebarProps) => {
  const currencies: Currency[] = [
    { code: 'USD', symbol: '$', rate: 1 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'GBP', symbol: '£', rate: 0.79 },
    { code: 'AUD', symbol: 'A$', rate: 1.52 },
    { code: 'CAD', symbol: 'C$', rate: 1.36 }
  ];

  const convertPrice = (price: number) => {
    return Math.round(price * selectedCurrency.rate);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block sticky top-20 w-full"
      >
        <div className="bg-card border border-brand-slate/20 rounded-xl p-6 space-y-6 shadow-sm">
          <div>
            {/* Header in Deep Midnight Blue */}
            <h3 className="text-xl font-semibold text-brand-midnight mb-4">
              Pricing Details
            </h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-brand-slate">Government Fee</span>
                <span className="text-base font-medium text-brand-midnight">
                  {selectedCurrency.symbol}{convertPrice(country.pricing.governmentFee)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-brand-slate">Service Fee</span>
                <span className="text-base font-medium text-brand-midnight">
                  {selectedCurrency.symbol}{convertPrice(country.pricing.serviceFee)}
                </span>
              </div>
              {/* Total Price highlighted in Champagne Gold */}
              <div className="pt-3 border-t border-brand-slate/10 flex items-center justify-between">
                <span className="text-base font-semibold text-brand-midnight">Total</span>
                <span className="text-2xl font-bold text-brand-gold whitespace-nowrap">
                  {selectedCurrency.symbol}{convertPrice(country.pricing.totalFee)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Icon name="DollarSign" size={16} className="text-brand-slate" />
              <span className="text-xs text-brand-slate">Currency:</span>
              <select
                value={selectedCurrency.code}
                onChange={(e) => {
                  const currency = currencies.find(c => c.code === e.target.value);
                  if (currency) onCurrencyChange(currency);
                }}
                className="text-xs border border-brand-slate/20 rounded px-2 py-1 bg-card text-brand-midnight focus:border-brand-gold outline-none"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>

            {/* Refund Policy using Bronze / Dark Gold for Trustworthy Heritage */}
            <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Icon name="Shield" size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <p className="text-xs text-brand-gold font-medium">
                  {country.pricing.refundPolicy}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="default"
              size="default"
              iconName="FileText"
              iconPosition="left"
              iconSize={18}
              fullWidth
              onClick={onApplyClick}
              className="bg-brand-midnight hover:bg-brand-midnight/90 text-white"
            >
              Start Application
            </Button>

            <Button
              variant="outline"
              size="default"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
              fullWidth
              onClick={onWhatsAppClick}
              className="text-brand-slate hover:text-brand-slate hover:bg-brand-slate/10"
            >
              WhatsApp Consultation
            </Button>
          </div>

          <div className="pt-6 border-t border-brand-slate/10 space-y-3">
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={18} className="text-brand-slate" />
              <div>
                <p className="text-xs text-brand-slate">Processing Time</p>
                <p className="text-sm font-medium text-brand-midnight">
                  {country.processingTime}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="CheckCircle" size={18} className="text-success" />
              <div>
                <p className="text-xs text-brand-slate">Success Rate</p>
                <p className="text-sm font-medium text-success">
                  {country.successRate}%
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="Users" size={18} className="text-brand-slate" />
              <div>
                <p className="text-xs text-brand-slate">Applications Processed</p>
                <p className="text-sm font-medium text-brand-midnight">
                  {country.stats.totalApplications.toLocaleString()}+
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-brand-slate/20 p-4 shadow-modal">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-brand-slate">Total Fee</p>
            <p className="text-xl font-bold text-brand-gold whitespace-nowrap">
              {selectedCurrency.symbol}{convertPrice(country.pricing.totalFee)}
            </p>
          </div>
          <Button
            variant="default"
            size="default"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={18}
            onClick={onApplyClick}
            className="bg-brand-midnight hover:bg-brand-midnight/90 text-white"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickySidebar;