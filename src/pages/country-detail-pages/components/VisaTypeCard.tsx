import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { VisaType } from '../types';

interface VisaTypeCardProps {
  visaType: VisaType;
  index: number;
  onApply: (visaType: VisaType) => void;
}

const VisaTypeCard = ({ visaType, index, onApply }: VisaTypeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      /* Border subtly uses brand-slate at low opacity for a modern feel */
      className="w-full min-w-0 bg-card border border-brand-slate/20 rounded-xl p-4 md:p-6 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {/* Icon Container using Champagne Gold tint for success/quality signal */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-brand-gold/20">
            <Icon name={visaType.icon} size={20} className="text-brand-gold" />
          </div>
          <div className="min-w-0">
            {/* Title in Deep Midnight Blue for Authority */}
            <h3 className="text-base md:text-lg font-bold text-brand-midnight line-clamp-1 group-hover:text-brand-gold transition-colors">
              {visaType.name}
            </h3>
            {/* Duration in Steel Blue / Slate */}
            <p className="text-xs md:text-sm text-brand-slate font-medium">
              {visaType.duration}
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          {/* Pricing in Champagne Gold to represent Success/Premium Value */}
          <p className="text-xl md:text-2xl font-bold text-brand-gold whitespace-nowrap">
            ${visaType.price}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-brand-slate font-bold">Total Fee</p>
        </div>
      </div>

      {/* Description in Midnight Blue with Slate tint for high legibility */}
      <p className="text-sm md:text-base text-brand-midnight/80 mb-6 line-clamp-2 leading-relaxed">
        {visaType.description}
      </p>

      <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-slate/10">
        <div className="flex items-center gap-2 text-brand-slate">
          <Icon name="Clock" size={16} className="text-brand-gold" />
          <span className="text-xs md:text-sm font-semibold">
            {visaType.processingTime}
          </span>
        </div>
        <Button
          variant="default"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
          onClick={() => onApply(visaType)}
          /* Button uses Deep Midnight Blue for trust and reliability */
          className="bg-brand-midnight hover:bg-brand-midnight/90 text-white shadow-sm"
        >
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
};

export default VisaTypeCard;