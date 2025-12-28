import Icon from '../../../components/AppIcon';
import type { ProcessStep } from '../types';

interface ProcessTransparencyProps {
  steps: ProcessStep[];
}

const ProcessTransparency = ({ steps }: ProcessTransparencyProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          {/* Badge: Champagne Gold for a premium "official" feel */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="GitBranch" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Methodology
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-headline font-bold text-brand-midnight mb-6">
            Our Visa Processing Methodology
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            Every application is guided by our proven 7-step architecture, ensuring absolute consistency, elite quality, and real-time transparency.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line: Using a subtle Slate wash */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-slate/20 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                  <div className={`w-full min-w-0 bg-card rounded-2xl p-6 md:p-8 border border-brand-slate/10 shadow-sm hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Icon Container: Midnight Blue grounding with Gold Icon */}
                      <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-brand-midnight/[0.03] border border-brand-midnight/5 rounded-xl flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                        <Icon name={step.icon} size={24} className="text-brand-midnight group-hover:text-brand-gold transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
                          Phase 0{step.step}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-brand-midnight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-brand-slate leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-slate/60 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <Icon name="Clock" size={14} className="text-brand-gold" />
                      <span>{step.timeline} Expected</span>
                    </div>
                  </div>
                </div>

                {/* Central Node Indicator */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-midnight rounded-xl items-center justify-center border-4 border-background z-10 shadow-lg shadow-brand-midnight/20">
                  <span className="text-xs font-bold text-white">{step.step}</span>
                </div>

                {/* Spacer Side */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTransparency;