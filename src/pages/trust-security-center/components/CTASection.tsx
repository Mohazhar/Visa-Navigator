import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    /* Background: Deep Midnight Blue for authoritative grounding */
    <section className="py-12 md:py-16 lg:py-24 bg-brand-midnight relative overflow-hidden">
      {/* Subtle decorative accent using a low-opacity gold wash */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/[0.03] skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header: Clean White on Dark Blue for maximum impact */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Experience <span className="text-brand-gold">Precision</span> Visa Processing?
          </h2>
          
          {/* Subtext: Steel Blue / Slate tint for premium readability */}
          <p className="text-base md:text-lg lg:text-xl text-brand-slate/40 text-slate-300 mb-8 md:mb-10 lg:mb-12">
            Join thousands of global citizens who trust our elite navigation for their travel authorizations. Start your journey with confidence today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={18}
              onClick={() => window.location.href = '/application-portal'}
              /* Primary Button: Champagne Gold for Success/Quality */
              className="bg-brand-gold text-brand-midnight hover:bg-brand-gold/90 border-brand-gold font-bold w-full sm:w-auto px-8 shadow-xl shadow-brand-gold/10"
            >
              Start Application
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
              onClick={() => window.open('https://wa.me/', '_blank')}
              /* Secondary Button: Clean White Outline */
              className="border-white text-white hover:bg-white hover:text-brand-midnight w-full sm:w-auto px-8 transition-all duration-300"
            >
              Consult an Expert
            </Button>
          </div>

          {/* Trust Indicators: Using Gold and Slate for a high-end feel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-8 border-t border-white/10">
            {[
              { icon: 'Shield', label: '99.8% Success Rate' },
              { icon: 'Clock', label: '24/7 VIP Support' },
              { icon: 'Award', label: 'Secured Processing' }
            ]?.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                  <Icon name={item?.icon} size={20} className="text-brand-gold" />
                </div>
                <span className="text-sm md:text-base font-bold text-white tracking-wide uppercase text-[10px] md:text-xs">
                  {item?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;