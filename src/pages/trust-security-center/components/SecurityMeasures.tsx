import Icon from '../../../components/AppIcon';
import type { SecurityMeasure } from '../types';

interface SecurityMeasuresProps {
  measures: SecurityMeasure[];
}

const SecurityMeasures = ({ measures }: SecurityMeasuresProps) => {
  return (
    /* Background: Subtle Slate wash to anchor the section */
    <section className="py-12 md:py-16 lg:py-24 bg-brand-slate/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          {/* Badge: Champagne Gold and Midnight Blue for an "Official" signal */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="Lock" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Data Sovereignty
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold text-brand-midnight mb-4">
            Comprehensive Security Measures
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            We architect multiple defensive layers to safeguard your identity and documentation through the entire diplomatic lifecycle.
          </p>
        </div>

        {/* Visual Aid: Layered Security Architecture */}
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 lg:mt-16">
          {measures.map((measure) => (
            <div 
              key={measure.id}
              /* Card: Slate border that glows Gold on hover */
              className="w-full min-w-0 bg-card rounded-2xl p-6 md:p-8 lg:p-10 border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-5 mb-6">
                {/* Icon Container: Midnight Blue wash with Gold Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-brand-midnight/5 rounded-xl flex items-center justify-center border border-brand-midnight/5 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/20 transition-colors">
                  <Icon name={measure.icon} size={28} className="text-brand-midnight group-hover:text-brand-gold transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-midnight mb-2">
                    {measure.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-slate leading-relaxed">
                    {measure.description}
                  </p>
                </div>
              </div>

              {/* Checklist: Using Gold bullets for a premium feel */}
              <ul className="space-y-3 pt-6 border-t border-brand-slate/5">
                {measure.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={16} className="text-brand-gold flex-shrink-0 mt-1" />
                    <span className="text-xs md:text-sm font-semibold text-brand-midnight/70">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityMeasures;