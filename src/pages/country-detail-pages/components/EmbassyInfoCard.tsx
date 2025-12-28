import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { EmbassyInfo } from '../types';

interface EmbassyInfoCardProps {
  embassyInfo: EmbassyInfo;
}

const EmbassyInfoCard = ({ embassyInfo }: EmbassyInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl p-4 md:p-6 lg:p-8"
    >
      <div className="flex items-start gap-3 md:gap-4 mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon 
            name="Building2" 
            size={24} 
            /* Champagne Gold (#C5A059) for a premium, high-quality brand feel */
            className="text-brand-gold" 
          />
        </div>
        <div className="min-w-0 flex-1">
          {/* Heading using Deep Midnight Blue */}
          <h3 className="text-lg md:text-xl font-semibold mb-1 text-brand-midnight">
            Embassy Information
          </h3>
          {/* Subtext using Steel Blue / Slate */}
          <p className="text-sm md:text-base text-brand-slate">
            Official contact details and location
          </p>
        </div>
        </div>

        <div className="space-y-4 md:space-y-6">
        <div>
          {/* Embassy Name using Deep Midnight Blue */}
          <h4 className="text-base md:text-lg font-medium text-brand-midnight mb-3 md:mb-4">
            {embassyInfo.name}
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              {/* Icon using Steel Blue / Slate */}
              <Icon name="MapPin" size={18} className="text-brand-slate flex-shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-brand-midnight/80">
                {embassyInfo.address}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="Phone" size={18} className="text-brand-slate flex-shrink-0" />
              {/* Interactive Link using Champagne Gold */}
              <a
                href={`tel:${embassyInfo.phone}`}
                className="text-sm md:text-base text-brand-gold hover:text-brand-bronze font-medium hover:underline transition-colors"
              >
                {embassyInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="Mail" size={18} className="text-brand-slate flex-shrink-0" />
              <a
                href={`mailto:${embassyInfo.email}`}
                className="text-sm md:text-base text-brand-gold hover:text-brand-bronze font-medium hover:underline transition-colors"
              >
                {embassyInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Icon name="Globe" size={18} className="text-brand-slate flex-shrink-0" />
              <a
                href={embassyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-brand-gold hover:text-brand-bronze font-medium hover:underline transition-colors"
              >
                Visit Website
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="Clock" size={18} className="text-brand-slate flex-shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-brand-slate">
                {embassyInfo.workingHours}
              </p>
            </div>
          </div>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title={embassyInfo.name}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${embassyInfo.latitude},${embassyInfo.longitude}&z=14&output=embed`}
            className="border-0"
          />
        </div>

        <Button
          variant="outline"
          size="default"
          iconName="Navigation"
          iconPosition="left"
          iconSize={18}
          fullWidth
          onClick={() => window.open(`https://www.google.com/maps?q=${embassyInfo.latitude},${embassyInfo.longitude}`, '_blank')}
          /* Color Grade Applied:
            - Text & Border: Deep Midnight Blue (#1B2A4E) for Authority/Trust
            - Hover: Steel Blue / Slate (#5D7293) background tint for Modernity
          */
          className="text-brand-midnight text-brand-gold border-brand-midnight hover:bg-brand-gold transition-colors"
        >
          Get Directions
        </Button>
      </div>
    </motion.div>
  );
};

export default EmbassyInfoCard;