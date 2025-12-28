import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { SearchSuggestion } from '../types/indes'; // Fixed typo from 'indes'


interface HeroSectionProps {
  onSearch: (query: string) => void;
  suggestions: SearchSuggestion[];
}

const HeroSection = ({ onSearch, suggestions }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [liveCount, setLiveCount] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredSuggestions = suggestions.filter(s =>
    s.country.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient using Brand Midnight Blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-midnight/10 via-brand-slate/5 to-brand-gold/10" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="absolute inset-0 glass-effect" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-4 md:mb-6">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-success">
              {liveCount.toLocaleString()} applications being processed right now
            </span>
          </div>

          {/* Title using Deep Midnight Blue */}
          <h1 className="font-headline font-bold text-3xl md:text-5xl lg:text-6xl text-brand-midnight mb-4 md:mb-6">
            Visa Applications Made
            <span className="block text-brand-gold mt-2">Simple & Transparent</span>
          </h1>

          {/* Subtitle using Steel Blue / Slate */}
          <p className="text-base md:text-lg lg:text-xl text-brand-slate max-w-2xl mx-auto mb-6 md:mb-8">
            Join 10,000+ travelers who trust VisaFlow Pro for their visa processing needs. 99.8% success rate with 100% government fee refund guarantee.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-success" />
              <span className="text-sm md:text-base font-medium text-brand-midnight">99.8% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} className="text-brand-gold" />
              <span className="text-sm md:text-base font-medium text-brand-midnight">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="text-brand-bronze" />
              <span className="text-sm md:text-base font-medium text-brand-midnight">Fast Processing</span>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-brand-slate" 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search for your destination country..."
                className="w-full pl-12 md:pl-14 pr-32 md:pr-40 py-4 md:py-5 lg:py-6 text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl border-2 border-border focus:border-brand-gold focus:outline-none focus:ring-4 focus:ring-brand-gold/10 transition-smooth bg-card shadow-card text-brand-midnight"
              />
              <Button
                type="submit"
                variant="default"
                size="default"
                iconName="ArrowRight"
                iconPosition="right"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-gold hover:bg-brand-bronze transition-colors"
              >
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>

            {showSuggestions && filteredSuggestions.length > 0 && searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-modal overflow-hidden z-50"
              >
                {filteredSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.code}
                    type="button"
                    onClick={() => {
                      setSearchQuery(suggestion.country);
                      setShowSuggestions(false);
                      onSearch(suggestion.country);
                    }}
                    className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4 hover:bg-muted transition-smooth text-left"
                  >
                    <span className="text-2xl md:text-3xl">{suggestion.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm md:text-base text-brand-midnight truncate">
                        {suggestion.country}
                      </p>
                      <p className="text-xs md:text-sm text-brand-slate truncate">
                        {suggestion.visaTypes.join(', ')} • {suggestion.processingTime}
                      </p>
                    </div>
                    <Icon name="ArrowRight" size={16} className="text-brand-slate flex-shrink-0" />
                  </button>
                ))}
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8"
        >
          <Button
            variant="outline"
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/', '_blank')}
            className="text-success border-success hover:bg-success/10"
          >
            WhatsApp Consultation
          </Button>
          <Button
            variant="default"
            size="lg"
            iconName="FileText"
            iconPosition="left"
            onClick={() => window.location.href = '/application-portal'}
            className="bg-brand-midnight hover:bg-brand-midnight/90"
          >
            Start Application
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;