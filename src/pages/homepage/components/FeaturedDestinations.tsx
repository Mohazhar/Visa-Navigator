import { motion } from 'framer-motion';
import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { FeaturedDestination } from '../types/indes'; // Fixed typo from 'indes'

interface FeaturedDestinationsProps {
  destinations: FeaturedDestination[];
}

const FeaturedDestinations = ({ destinations }: FeaturedDestinationsProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const regions = ['All', 'Europe', 'Asia', 'Americas', 'Oceania', 'Africa'];

  const filteredDestinations = selectedRegion === 'All' 
    ? destinations 
    : destinations.filter(d => d.country.includes(selectedRegion));

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
            Popular Visa Destinations
          </h2>
          {/* Subtitle using Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto">
            Explore our most requested visa destinations with guaranteed processing times and success rates
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12 overflow-x-auto pb-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`
                px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium text-sm md:text-base
                transition-smooth flex-shrink-0
                ${selectedRegion === region
                  ? 'bg-brand-gold text-white shadow-card' // Champagne Gold for active state
                  : 'bg-card text-brand-midnight hover:bg-muted border border-border'
                }
              `}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-smooth w-full min-w-0 border border-transparent hover:border-brand-gold/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                {destination.popular && (
                  /* Popular badge using Bronze / Dark Gold */
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 px-3 py-1.5 rounded-full bg-brand-bronze text-white text-xs md:text-sm font-medium flex items-center gap-1.5 shadow-lg">
                    <Icon name="TrendingUp" size={14} />
                    <span>Popular</span>
                  </div>
                )}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 text-3xl md:text-4xl drop-shadow-md">
                  {destination.flag}
                </div>
              </div>

              <div className="p-4 md:p-6">
                {/* Destination Name in Deep Midnight Blue */}
                <h3 className="font-headline font-semibold text-lg md:text-xl text-brand-midnight mb-2 line-clamp-1">
                  {destination.country}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {destination.visaTypes.slice(0, 2).map((type) => (
                    <span
                      key={type}
                      className="px-2 md:px-3 py-1 rounded-md bg-brand-slate/10 text-xs md:text-sm font-medium text-brand-slate"
                    >
                      {type}
                    </span>
                  ))}
                  {destination.visaTypes.length > 2 && (
                    <span className="text-xs md:text-sm text-brand-slate/60">
                      +{destination.visaTypes.length - 2} more
                    </span>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-brand-slate">Processing Time</span>
                    <span className="text-xs md:text-sm font-medium text-brand-midnight">
                      {destination.processingTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-brand-slate">Success Rate</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-16 md:w-20 h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-success rounded-full"
                          style={{ width: `${destination.successRate}%` }}
                        />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-success whitespace-nowrap">
                        {destination.successRate}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-brand-slate">Starting from</span>
                    {/* Price highlighted in Champagne Gold */}
                    <span className="text-base md:text-lg font-bold text-brand-gold whitespace-nowrap">
                      {destination.currency}{destination.startingPrice}
                    </span>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="default"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => window.location.href = '/country-detail-pages'}
                  className="bg-brand-midnight hover:bg-brand-midnight/90 text-white"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            iconName="Globe"
            iconPosition="left"
            onClick={() => window.location.href = '/country-detail-pages'}
            className="text-brand-midnight border-brand-midnight hover:bg-brand-midnight/5"
          >
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;