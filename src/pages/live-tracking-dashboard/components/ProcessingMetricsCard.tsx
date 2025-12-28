import { ProcessingMetrics } from '../types';
import Icon from '../../../components/AppIcon';

interface ProcessingMetricsCardProps {
  metrics: ProcessingMetrics;
}

const ProcessingMetricsCard = ({ metrics }: ProcessingMetricsCardProps) => {
  return (
    <div className="w-full min-w-0 p-4 md:p-6 lg:p-8 rounded-2xl border border-brand-slate/10 bg-card shadow-sm">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        {/* Header Icon: Champagne Gold to signify high performance */}
        <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
          <Icon name="TrendingUp" size={20} className="text-brand-gold" />
        </div>
        <h3 className="font-headline font-bold text-lg md:text-xl text-brand-midnight">
          Processing Performance
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {/* Your Processing Time: Grounded in Midnight Blue for Trust */}
        <div className="p-4 md:p-6 rounded-xl bg-brand-midnight/[0.03] border border-brand-midnight/5 transition-all hover:bg-brand-midnight/[0.05]">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Clock" size={16} className="text-brand-midnight/60" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-midnight/60">
              Personal Time
            </span>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-midnight whitespace-nowrap">
            {metrics.yourProcessingTime} <span className="text-sm font-medium">days</span>
          </p>
        </div>

        {/* Average Time: Professional Slate/Steel Blue */}
        <div className="p-4 md:p-6 rounded-xl bg-brand-slate/[0.03] border border-brand-slate/10">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="BarChart3" size={16} className="text-brand-slate" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-slate">
              Global Average
            </span>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-slate whitespace-nowrap">
            {metrics.averageProcessingTime} <span className="text-sm font-medium">days</span>
          </p>
        </div>

        {/* Processing Speed: Highlighted in Champagne Gold for Success */}
        <div className="p-4 md:p-6 rounded-xl bg-brand-gold/5 border border-brand-gold/20 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Zap" size={16} className="text-brand-gold" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
              Navigator Speed
            </span>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-gold whitespace-nowrap">
            {metrics.percentageFaster}% <span className="text-sm font-medium">faster</span>
          </p>
        </div>

        {/* Queue Position: Midnight Blue with Gold Accent */}
        <div className="p-4 md:p-6 rounded-xl bg-brand-midnight text-white shadow-lg shadow-brand-midnight/20">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Users" size={16} className="text-brand-gold" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-slate/50">
              Queue Milestone
            </span>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">
            {metrics.applicationsAhead} <span className="text-sm font-medium text-brand-slate/50">processed</span>
          </p>
        </div>
      </div>

      {/* Insight Footer: Professional Slate background with subtle Midnight text */}
      <div className="mt-6 md:mt-8 p-4 rounded-xl bg-brand-slate/5 border border-brand-slate/10">
        <div className="flex items-start gap-3">
          <Icon name="Shield" size={18} className="flex-shrink-0 mt-0.5 text-brand-midnight" />
          <p className="text-xs md:text-sm text-brand-midnight/70 font-medium leading-relaxed">
            Your application is currently being prioritized. Our automated systems and human specialists are working to maintain your 
            <span className="text-brand-gold font-bold"> {metrics.percentageFaster}% </span> 
            efficiency advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingMetricsCard;