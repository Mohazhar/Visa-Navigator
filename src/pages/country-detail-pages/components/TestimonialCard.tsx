import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      /* Border using brand-slate for professional structure */
      className="w-full min-w-0 bg-card border border-brand-slate/10 rounded-xl p-4 md:p-6 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group"
    >
      <div className="flex items-start gap-3 md:gap-4 mb-4">
        {/* Avatar with a subtle Gold border on hover */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-transparent group-hover:border-brand-gold/50 transition-colors">
          <Image
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          {/* Name: Deep Midnight Blue for Authority */}
          <h4 className="text-sm md:text-base font-bold text-brand-midnight line-clamp-1">
            {testimonial.name}
          </h4>
          {/* Metadata: Steel Blue / Slate */}
          <p className="text-xs md:text-sm text-brand-slate font-medium">
            {testimonial.visaType} • {testimonial.country}
          </p>
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                /* Stars: Champagne Gold for Premium Quality/Success */
                className={i < testimonial.rating ? 'text-brand-gold fill-brand-gold' : 'text-brand-slate/20'}
              />
            ))}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="flex items-center gap-1 text-success">
            <Icon name="CheckCircle" size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Approved</span>
          </div>
          <p className="text-[10px] md:text-xs text-brand-slate/70 font-mono mt-1">
            {testimonial.processingTime}
          </p>
        </div>
      </div>

      {/* Content: Deep Midnight Blue with Slate tint for readability */}
      <p className="text-sm md:text-base text-brand-midnight/80 mb-4 line-clamp-3 leading-relaxed italic">
        "{testimonial.content}"
      </p>

      {testimonial.image && (
        <div className="aspect-[16/9] rounded-lg overflow-hidden border border-brand-slate/10 shadow-sm">
          <Image
            src={testimonial.image}
            alt={testimonial.imageAlt || 'Testimonial image'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-slate/10">
        <span className="text-[10px] uppercase tracking-widest text-brand-slate/60 font-bold">{testimonial.date}</span>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-brand-slate/5 text-[10px] font-bold uppercase tracking-wide text-brand-slate">
          <Icon name="Shield" size={12} className="text-brand-gold" />
          <span>Verified Review</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;