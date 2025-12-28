import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    /* Background: Authoritative Deep Midnight Blue */
    <section className="relative bg-brand-midnight overflow-hidden">
      {/* Premium Texture Overlay: Low opacity grid/pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Decorative Champagne Gold Gradient Glow */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge: Champagne Gold and White for a prestigious signal */}
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6 md:mb-10 shadow-2xl">
            <Icon name="Shield" size={18} className="text-brand-gold" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/90">
              Trusted by 10,000+ Global Citizens
            </span>
          </div>

          {/* Heading: Pure White with Gold Accent */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold text-white mb-6 md:mb-8 tracking-tight">
            Your Trust is Our <span className="text-brand-gold">Foundation</span>
          </h1>
          
          {/* Subtext: Steel Blue / Slate for sophisticated readability */}
          <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience the industry's highest standards in data protection, visa success architecture, and transparent security protocols.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: 'ShieldCheck', label: '99.8% Success Rate', value: '10,000+' },
              { icon: 'Lock', label: 'Bank-Level Security', value: '256-bit' },
              { icon: 'Award', label: 'Global Compliance', value: 'ISO 27001' },
              { icon: 'Users', label: 'Elite Specialists', value: '50+' }
            ]?.map((stat, index) => (
              <div 
                key={index}
                /* Card: Midnight Blue background with Gold border on hover */
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-gold/30 hover:bg-white/[0.08] transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Icon name={stat?.icon} size={28} className="text-brand-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 whitespace-nowrap">
                  {stat?.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-gold transition-colors">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;