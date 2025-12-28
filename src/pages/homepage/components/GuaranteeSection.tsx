import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: 'Shield',
      title: '100% Government Fee Refund',
      description: 'If your visa application is rejected, we refund 100% of government fees. No questions asked.'
    },
    {
      icon: 'Lock',
      title: 'Bank-Level Security',
      description: 'Your documents and personal information are protected with military-grade encryption.'
    },
    {
      icon: 'CheckCircle',
      title: '99.8% Success Rate',
      description: 'Our expert team has successfully processed over 10,000 visa applications with industry-leading approval rates.'
    },
    {
      icon: 'Clock',
      title: 'Guaranteed Processing Times',
      description: 'We commit to specific timelines and keep you updated every step of the way with real-time tracking.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-brand-midnight/5 via-brand-slate/5 to-brand-gold/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          {/* Badge using Steel Blue / Slate for professionalism */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-slate/10 border border-brand-slate/20 mb-4 md:mb-6">
            <Icon name="Award" size={16} className="text-brand-slate" />
            <span className="text-xs md:text-sm font-medium text-brand-slate">
              Industry-Leading Guarantees
            </span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl md:text-3xl lg:text-4xl text-brand-midnight mb-3 md:mb-4">
            Your Peace of Mind is Our Priority
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-2xl mx-auto">
            We stand behind our service with comprehensive guarantees that protect your investment and ensure your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {guarantees?.map((guarantee, index) => (
            <motion.div
              key={guarantee?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-card hover:shadow-hover transition-smooth border border-transparent hover:border-brand-gold/20"
            >
              {/* Icon Container using Champagne Gold for Premium Quality */}
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 md:mb-6">
                <Icon name={guarantee?.icon} size={24} className="text-brand-gold" />
              </div>
              
              <h3 className="font-headline font-semibold text-lg md:text-xl text-brand-midnight mb-2 md:mb-3 line-clamp-2">
                {guarantee?.title}
              </h3>
              
              <p className="text-sm md:text-base text-brand-slate line-clamp-3">
                {guarantee?.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-card text-center border border-brand-gold/10"
        >
          <h3 className="font-headline font-bold text-xl md:text-2xl lg:text-3xl text-brand-midnight mb-3 md:mb-4">
            Ready to Start Your Visa Journey?
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-brand-slate mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trust VisaNavigator for their visa processing needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              onClick={() => window.location.href = '/application-portal'}
              /* Button using Deep Midnight Blue for Authority/Trust */
              className="bg-brand-midnight hover:bg-brand-midnight/90 text-white"
            >
              Start Your Application
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://wa.me/', '_blank')}
              /* Outline using Steel Blue / Slate for Modernity */
              className="text-brand-slate border-brand-slate hover:bg-brand-slate/5"
            >
              Talk to an Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;