import Icon from '../../../components/AppIcon';
import type { SuccessMetric } from '../types';

interface SuccessMetricsProps {
  metrics: SuccessMetric[];
}

const SuccessMetrics = ({ metrics }: SuccessMetricsProps) => {
  return (
    /* Background: Subtle sophisticated gradient using brand slate tones */
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-brand-slate/[0.02] to-brand-midnight/[0.03]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          {/* Badge: Champagne Gold for a premium "elite" signal */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="TrendingUp" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Performance Audit
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-headline font-bold text-brand-midnight mb-4">
            A Proven Track Record of Success
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            Our metrics reflect an uncompromising commitment to precision. Discover why global citizens choose our architected approach to visa processing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric) => (
            <div 
              key={metric.id}
              /* Card: Slate border that glows Gold on hover */
              className="w-full min-w-0 bg-card rounded-2xl p-6 md:p-8 border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500 text-center group"
            >
              {/* Icon Container: Midnight Blue wash with Gold Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-midnight/[0.03] border border-brand-midnight/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <Icon name={metric.icon} size={28} className="text-brand-gold" />
              </div>
              
              {/* Value: Deep Midnight Blue for Authority */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-midnight mb-2 whitespace-nowrap tracking-tight">
                {metric.value}
              </div>
              
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-slate mb-3">
                {metric.label}
              </h3>
              
              <p className="text-sm text-brand-slate/80 mb-5 line-clamp-2 leading-relaxed italic">
                {metric.description}
              </p>

              {/* Trend Indicator: Champagne Gold wash */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-lg">
                <Icon name="TrendingUp" size={14} className="text-brand-gold" />
                <span className="text-[10px] font-bold text-brand-midnight uppercase tracking-wider">
                  {metric.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;