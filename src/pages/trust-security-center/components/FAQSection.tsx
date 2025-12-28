import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import type { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    /* Background: Very subtle Slate wash to distinguish the section */
    <section className="py-12 md:py-16 lg:py-20 bg-brand-slate/[0.02]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          {/* Badge: Champagne Gold for high-value service signaling */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="HelpCircle" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Support Center
            </span>
          </div>
          {/* Heading: Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-4">
            Your Questions Answered
          </h2>
          {/* Subtext: Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto font-medium">
            Find expert answers regarding our security protocols, application processes, and service guarantees.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-10">
            {/* Category Header: Deep Midnight Blue with Slate secondary feel */}
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-5 px-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/40" />
              {category}
            </h3>
            
            <div className="space-y-4">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      /* Card: Slate border that glows Gold when open */
                      className={`bg-card rounded-2xl border transition-all duration-300 ${
                        isOpen ? 'border-brand-gold/40 shadow-lg shadow-brand-gold/5' : 'border-brand-slate/10 hover:border-brand-midnight/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left transition-colors"
                      >
                        <span className={`text-sm md:text-base font-bold transition-colors ${
                          isOpen ? 'text-brand-gold' : 'text-brand-midnight'
                        }`}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isOpen ? 'bg-brand-gold text-brand-midnight rotate-180' : 'bg-brand-slate/5 text-brand-slate'
                        }`}>
                          <Icon 
                            name="ChevronDown" 
                            size={18} 
                          />
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 md:px-6 pb-6 md:pb-8 animate-fade-in">
                          <div className="pt-2 border-t border-brand-slate/5">
                            <p className="text-sm md:text-base text-brand-slate leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;