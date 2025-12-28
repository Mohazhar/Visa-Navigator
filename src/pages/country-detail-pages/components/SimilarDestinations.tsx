import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { SimilarDestination } from '../types';

interface SimilarDestinationsProps {
  destinations: SimilarDestination[];
}

const SimilarDestinations = ({ destinations }: SimilarDestinationsProps) => {
  const navigate = useNavigate();

  return (
    <div className="py-8 md:py-12 lg:py-16 bg-brand-slate/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Main Title using Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
            Similar Destinations
          </h2>
          {/* Subtitle using Steel Blue / Slate for Modernity */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate">
            Explore visa options for other popular destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full min-w-0 bg-card border border-brand-slate/10 rounded-xl overflow-hidden hover:shadow-xl transition-smooth group"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                {/* Subtle overlay gradient using brand-midnight */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl drop-shadow-sm">{destination.flag}</span>
                  {/* Destination Name in Deep Midnight Blue */}
                  <h3 className="text-base font-bold text-brand-midnight line-clamp-1 group-hover:text-brand-gold transition-colors">
                    {destination.name}
                  </h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-brand-slate font-medium">Processing</span>
                    <span className="text-brand-midnight font-bold">
                      {destination.processingTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-brand-slate font-medium">Success Rate</span>
                    <span className="text-success font-bold">
                      {destination.successRate}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-brand-slate font-medium">From</span>
                    {/* Price highlighted in Champagne Gold */}
                    <span className="text-brand-gold font-bold whitespace-nowrap">
                      ${destination.price}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                  fullWidth
                  onClick={() => navigate('/country-detail-pages')}
                  /* Outline Button using brand-midnight for Trust */
                  className="text-brand-midnight text-brand-gold border-brand-midnight hover:bg-brand-gold transition-colors font-bold uppercase tracking-wider text-[10px]"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarDestinations;