import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { Requirement } from '../types';

interface RequirementsSectionProps {
  requirements: Requirement[];
}

const RequirementsSection = ({ requirements }: RequirementsSectionProps) => {
  const categories = Array.from(new Set(requirements.map(r => r.category)));

  return (
    /* Section Background: Subtle tint of Steel Blue for professionalism */
    <div className="py-8 md:py-12 lg:py-16 bg-brand-slate/[0.03]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Main Title: Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
            Required Documents
          </h2>
          {/* Subtitle: Steel Blue / Slate for clarity */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto">
            Complete checklist of documents needed for your visa application
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              /* Category Card: Border uses brand-slate for structure */
              className="bg-card border border-brand-slate/20 rounded-xl p-4 md:p-6 lg:p-8 shadow-sm"
            >
              {/* Category Heading: Deep Midnight Blue */}
              <h3 className="text-lg md:text-xl font-semibold text-brand-midnight mb-4 md:mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {requirements
                  .filter(req => req.category === category)
                  .map((requirement) => (
                    <div
                      key={requirement.id}
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-brand-gold/[0.05] transition-smooth group"
                    >
                      {/* Icon Container: Champagne Gold for mandatory success path */}
                      <div className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors
                        ${requirement.mandatory ? 'bg-brand-gold/10' : 'bg-brand-slate/10'}
                      `}>
                        <Icon 
                          name={requirement.icon} 
                          size={18} 
                          className={requirement.mandatory ? 'text-brand-gold' : 'text-brand-slate'} 
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm md:text-base font-medium text-brand-midnight line-clamp-1 group-hover:text-brand-gold transition-colors">
                            {requirement.title}
                          </h4>
                          {requirement.mandatory && (
                            /* Required Badge: Bronze for Heritage/Urgency */
                            <span className="px-2 py-0.5 bg-brand-bronze/10 text-brand-bronze text-[10px] md:text-xs font-bold uppercase tracking-wide rounded-full flex-shrink-0 border border-brand-bronze/20">
                              Required
                            </span>
                          )}
                        </div>
                        {/* Description: Steel Blue / Slate */}
                        <p className="text-xs md:text-sm text-brand-slate/80 line-clamp-2">
                          {requirement.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;