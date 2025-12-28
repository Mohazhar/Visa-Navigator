import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GuaranteeSection = () => {
  return (
    /* Background: Sophisticated gradient using Midnight and Slate tones */
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-brand-midnight/[0.02] to-brand-slate/[0.05]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Card: Midnight Blue border with Gold accent shadow */}
          <div className="bg-card rounded-3xl p-6 md:p-10 lg:p-16 border border-brand-midnight/10 shadow-2xl shadow-brand-midnight/5 relative overflow-hidden">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-16 -mt-16" />
            
            <div className="text-center mb-12 relative z-10">
              {/* Shield Icon: Using Champagne Gold for high-value protection */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                <Icon name="ShieldCheck" size={48} className="text-brand-gold -rotate-3" />
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-headline font-bold text-brand-midnight mb-4">
                100% Government Fee Refund Guarantee
              </h2>
              
              <p className="text-base md:text-lg text-brand-slate max-w-2xl mx-auto font-medium">
                Our precision is your protection. In the improbable event of a rejection, we facilitate a full reimbursement of all government fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                {
                  icon: 'CheckCircle',
                  title: 'Absolute Transparency',
                  description: 'Straightforward terms with zero hidden clauses or complex fine print.'
                },
                {
                  icon: 'Clock',
                  title: 'Priority Settlement',
                  description: 'Refunds are initiated within 5-7 business days of status verification.'
                },
                {
                  icon: 'Shield',
                  title: 'Total Coverage',
                  description: 'Protects every dollar of official government fees paid via our portal.'
                }
              ]?.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-14 h-14 bg-brand-midnight/[0.03] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/10 transition-colors">
                    <Icon name={item?.icon} size={24} className="text-brand-gold" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-brand-midnight mb-2 uppercase tracking-wide">
                    {item?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-slate leading-relaxed">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* How it Works: Midnight Wash with Gold Accents */}
            <div className="bg-brand-midnight/[0.02] border border-brand-midnight/5 rounded-2xl p-6 md:p-8 mb-10">
              <h3 className="text-base md:text-lg font-bold text-brand-midnight mb-5 flex items-center gap-3">
                <Icon name="Info" size={20} className="text-brand-gold" />
                The Security Protocol
              </h3>
              <ol className="space-y-4 text-sm md:text-base text-brand-slate font-medium">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-midnight text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
                  <span>Complete your application through our encrypted, specialist-led platform.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-midnight text-white flex items-center justify-center text-xs flex-shrink-0">2</span>
                  <span>Provide official status notification from the respective consulate.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-midnight text-white flex items-center justify-center text-xs flex-shrink-0">3</span>
                  <span>Receive your 100% government fee reimbursement automatically.</span>
                </li>
              </ol>
            </div>

            <div className="text-center">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={18}
                onClick={() => window.location.href = '/application-portal'}
                /* Button: Authoritative Midnight Blue */
                className="bg-brand-midnight hover:bg-brand-midnight/90 text-white font-bold px-12 py-7 shadow-xl shadow-brand-midnight/20"
              >
                Start Your Protected Application
              </Button>
              <div className="flex items-center justify-center gap-2 mt-6">
                <Icon name="Users" size={16} className="text-brand-gold" />
                <p className="text-xs md:text-sm text-brand-slate font-bold uppercase tracking-widest">
                  Securing 10,000+ Global Citizens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;