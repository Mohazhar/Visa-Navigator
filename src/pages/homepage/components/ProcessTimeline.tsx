import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { ProcessStep } from '../types/indes'; // Fixed typo from 'indes'

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-slate/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          {/* Main Heading in Deep Midnight Blue */}
          <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-brand-midnight mb-3 md:mb-4">
            How It Works
          </h2>
          {/* Subtitle in Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto">
            Our streamlined 4-step process makes visa applications simple and stress-free
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line using brand-slate */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-slate/20 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`
                  relative flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}
              >
                <div className="w-full lg:w-5/12">
                  <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-card hover:shadow-hover transition-smooth border border-transparent hover:border-brand-gold/20">
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      {/* Icon Container with Champagne Gold tint */}
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon} size={24} className="text-brand-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Step Label in Champagne Gold */}
                        <div className="text-xs md:text-sm font-medium text-brand-gold mb-1">
                          Step {index + 1}
                        </div>
                        {/* Step Title in Deep Midnight Blue */}
                        <h3 className="font-headline font-semibold text-lg md:text-xl lg:text-2xl text-brand-midnight line-clamp-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    {/* Description in Steel Blue / Slate */}
                    <p className="text-sm md:text-base text-brand-slate mb-3 md:mb-4 line-clamp-3">
                      {step.description}
                    </p>
                    {/* Duration using Bronze / Dark Gold for accent */}
                    <div className="flex items-center gap-2 text-xs md:text-sm text-brand-bronze">
                      <Icon name="Clock" size={16} />
                      <span className="font-medium">{step.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex w-2/12 justify-center">
                  {/* Central Timeline Circle using Deep Midnight Blue and Gold text */}
                  <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-brand-midnight flex items-center justify-center shadow-card z-10 border-2 border-brand-gold">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-brand-gold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;