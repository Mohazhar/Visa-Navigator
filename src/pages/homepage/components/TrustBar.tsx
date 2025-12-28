import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { TrustMetric } from '../types/indes';

interface TrustBarProps {
  metrics: TrustMetric[];
}

const TrustBar = ({ metrics }: TrustBarProps) => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-4 md:p-6 shadow-card hover:shadow-hover transition-smooth"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={metric.icon} size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 whitespace-nowrap">
                    {metric.value}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground mb-1 line-clamp-1">
                    {metric.label}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;