import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { Country } from '../types';

interface CountryHeroProps {
  country: Country;
}

const CountryHero = ({ country }: CountryHeroProps) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Image
        src={country.heroImage}
        alt={country.heroImageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay using Deep Midnight Blue for brand consistency and contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight/70 via-brand-midnight/40 to-brand-midnight/80" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-6xl md:text-7xl lg:text-8xl drop-shadow-xl">{country.flag}</span>
            <div>
              {/* Heading remains white for contrast, but could use brand-gold for emphasis */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white">
                {country.name} <span className="text-brand-gold">Visa</span>
              </h1>
              {/* Tagline in Slate for a softer, professional look over dark overlay */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 mt-1 md:mt-2">
                {country.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {/* Stats badges using glass effect with brand-gold accents */}
            <div className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-brand-gold" />
                <span className="text-sm md:text-base text-white font-medium">
                  {country.processingTime}
                </span>
              </div>
            </div>

            <div className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={18} className="text-success" />
                <span className="text-sm md:text-base text-white font-medium">
                  {country.successRate}% Success Rate
                </span>
              </div>
            </div>

            <div className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Icon name="DollarSign" size={18} className="text-brand-gold" />
                <span className="text-sm md:text-base text-white font-medium">
                  From ${country.pricing.totalFee}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CountryHero;