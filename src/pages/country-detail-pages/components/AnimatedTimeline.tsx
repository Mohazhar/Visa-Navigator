import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Icon from '../../../components/AppIcon';
import { TimelineStep } from '../types';

interface AnimatedTimelineProps {
  steps: TimelineStep[];
}

const AnimatedTimeline = ({ steps }: AnimatedTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // 'start end' means animation starts when the top of the container hits the bottom of the viewport
    // 'end center' means it finishes when the bottom hits the center
    offset: ['start center', 'end center']
  });

  // Use a spring for a smooth "liquid" movement effect
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight text-left mb-12 md:mb-20"
        >
          Application Process Timeline
        </motion.h2>

        <div className="relative">
          {/* 1. STATIC BACKGROUND LINE (Gray Track) */}
          
          
          {/* 2. MOVING PROGRESS LINE (Gold Filling) */}
          <motion.div
            className="absolute left-5 md:left-7 top-0 w-1 bg-brand-gold rounded-full origin-top z-0"
            style={{ 
              scaleY: scaleY, // This creates the "moving down" effect
              transform: 'translateX(-50%)',
              height: '100%' 
            }}
          />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => {
              // Threshold logic for icon color change
              const stepThreshold = index / (steps.length - 1);
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex items-start gap-8 md:gap-12"
                >
                  {/* Status circles (Z-index 10 to stay above the line) */}
                  <div className="relative z-10 flex-shrink-0">
                    <StatusIcon 
                      step={step} 
                      progress={scrollYProgress} 
                      threshold={stepThreshold} 
                    />
                  </div>

                  {/* Content Card */}
                  <div className="w-full bg-card border border-border rounded-xl p-6 hover:shadow-card hover:border-brand-gold/20 transition-smooth group text-left">
                    <div className="flex flex-col mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs md:text-sm font-mono text-brand-bronze font-bold">
                          Step {step.step}
                        </span>
                        {step.status === 'current' && (
                          <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold text-xs rounded-full font-medium">
                            In Progress
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-brand-midnight group-hover:text-brand-gold transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-brand-slate mb-4">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-1 text-brand-slate/70">
                      <Icon name="Clock" size={14} className="text-brand-gold" />
                      <span className="text-xs md:text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Logic for the icon background to "activate" when the line reaches it
import { useTransform } from 'framer-motion';

const StatusIcon = ({ step, progress, threshold }: { step: any, progress: any, threshold: number }) => {
  const bgColor = useTransform(
    progress,
    [threshold - 0.05, threshold],
    [
        step.status === 'completed' ? '#10b981' : 'rgba(200, 200, 200, 1)', 
        '#C5A059' // Brand Gold
    ]
  );

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 border-white shadow-md"
    >
      <Icon 
        name={step.icon} 
        size={20} 
        className="text-white" 
      />
    </motion.div>
  );
};

export default AnimatedTimeline;