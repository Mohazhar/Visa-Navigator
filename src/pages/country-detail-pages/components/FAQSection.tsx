import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { FAQ } from '../types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const categories = Array.from(new Set(faqs.map(f => f.category)));

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Main Title using Deep Midnight Blue */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          {/* Subtitle using Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate">
            Everything you need to know about the visa application process
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
            >
              {/* Category Heading in Deep Midnight Blue */}
              <h3 className="text-lg md:text-xl font-semibold text-brand-midnight mb-4">
                {category}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq) => (
                    <div
                      key={faq.id}
                      /* Subtle Slate border for professionalism */
                      className={`bg-card border rounded-xl overflow-hidden transition-colors ${
                        openId === faq.id ? 'border-brand-gold/40 shadow-sm' : 'border-brand-slate/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className={`w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left transition-smooth ${
                          openId === faq.id ? 'bg-brand-gold/5' : 'hover:bg-brand-slate/5'
                        }`}
                      >
                        {/* Question text changes to Midnight Blue when active */}
                        <span className={`text-sm md:text-base font-medium transition-colors ${
                          openId === faq.id ? 'text-brand-midnight' : 'text-brand-midnight/90'
                        }`}>
                          {faq.question}
                        </span>
                        <Icon
                          name="ChevronDown"
                          size={20}
                          /* Icon uses Champagne Gold when open */
                          className={`flex-shrink-0 transition-all ${
                            openId === faq.id ? 'rotate-180 text-brand-gold' : 'text-brand-slate'
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {/* Answer text in Steel Blue / Slate */}
                            <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-brand-slate leading-relaxed border-t border-brand-gold/10 pt-2">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

export default FAQSection;