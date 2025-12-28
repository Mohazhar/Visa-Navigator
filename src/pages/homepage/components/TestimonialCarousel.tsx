import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { Testimonial } from '../types/indes'; // Fixed typo from 'indes'

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Heading using Deep Midnight Blue */}
          <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-brand-midnight mb-3 md:mb-4">
            Success Stories
          </h2>
          {/* Subtitle using Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto">
            Join thousands of satisfied travelers who achieved their visa dreams with VisaNavigator
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-card border border-brand-slate/10"
            >
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                {/* Avatar border using Champagne Gold tint */}
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-brand-gold/20">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  {/* Name in Deep Midnight Blue */}
                  <h3 className="font-headline font-semibold text-lg md:text-xl lg:text-2xl text-brand-midnight mb-1 line-clamp-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  {/* Type in Steel Blue / Slate */}
                  <p className="text-sm md:text-base text-brand-slate mb-2 line-clamp-1">
                    {testimonials[currentIndex].visaType} to {testimonials[currentIndex].country}
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        /* Stars using Champagne Gold */
                        className={i < testimonials[currentIndex].rating ? "text-brand-gold fill-brand-gold" : "text-brand-slate/20"}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment text in Deep Midnight Blue for better readability */}
              <blockquote className="text-sm md:text-base lg:text-lg text-brand-midnight font-medium italic mb-4 md:mb-6 line-clamp-4 md:line-clamp-none">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-brand-slate">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-brand-bronze" />
                  <span>Processed in {testimonials[currentIndex].processingDays} days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-brand-bronze" />
                  <span>{testimonials[currentIndex].date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons using Deep Midnight Blue borders and Gold hover effects */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-brand-slate/20 hover:border-brand-gold flex items-center justify-center transition-smooth shadow-card hover:shadow-hover text-brand-midnight"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-brand-slate/20 hover:border-brand-gold flex items-center justify-center transition-smooth shadow-card hover:shadow-hover text-brand-midnight"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          {/* Pagination Indicators using Champagne Gold */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`
                  h-2 rounded-full transition-smooth
                  ${index === currentIndex 
                    ? 'w-8 bg-brand-gold' :'w-2 bg-brand-slate/20 hover:bg-brand-slate/50'
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;