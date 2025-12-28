import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { PolicyUpdate } from '../types';

interface PolicyUpdatesProps {
  updates: PolicyUpdate[];
}

const PolicyUpdates = ({ updates }: PolicyUpdatesProps) => {
  const getImpactStyles = (impact: PolicyUpdate['impact']) => {
    switch (impact) {
      case 'positive':
        /* Champagne Gold: Premium success signal with even background/border balance */
        return 'bg-brand-gold/[0.04] text-brand-gold border-brand-gold/20';
      case 'negative':
        /* Destructive: Clean alert state */
        return 'bg-brand-gold/[0.04] text-brand-gold border-brand-gold/20';
      default:
        /* Steel Blue / Slate: Professional neutral tone */
        return 'bg-brand-gold/[0.04] text-brand-gold border-brand-gold/20';
    }
  };

  return (
    <div className="py-8 md:py-12 lg:py-16 bg-brand-slate/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          {/* Section Header: Anchored in Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
            Recent Policy Updates
          </h2>
          {/* Subtitle: Consistent Steel Blue / Slate for Modernity */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto">
            Stay informed about the latest visa policy changes across our global destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group w-full min-w-0 border rounded-2xl p-6 transition-all duration-300 bg-card hover:shadow-lg
                ${getImpactStyles(update.impact)}
              `}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Icon Box: Sharp white background for maximum icon clarity */}
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-brand-slate/10">
                  <Icon 
                    name={update.icon} 
                    size={22} 
                    className={update.impact === 'positive' ? 'text-brand-gold' : 'text-brand-midnight'} 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  {/* Title: Deep Midnight Blue for readability regardless of card tint */}
                  <h3 className="text-base font-bold text-brand-midnight line-clamp-2 mb-1 group-hover:text-brand-gold transition-colors">
                    {update.title}
                  </h3>
                  {/* Date: Balanced Slate for a professional feel */}
                  <p className="text-xs text-brand-slate/70 font-semibold uppercase tracking-wider">{update.date}</p>
                </div>
              </div>
              
              {/* Description: Balanced Slate for readability within colored containers */}
              <p className="text-sm text-brand-midnight/70 leading-relaxed line-clamp-3">
                {update.description}
              </p>

              {/* Action Link: Distinct Bronze for Heritage/Action */}
              <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-bronze group-hover:gap-3 transition-all">
                <span>View Full Details</span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolicyUpdates;