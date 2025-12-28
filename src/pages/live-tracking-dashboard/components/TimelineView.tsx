import { TimelineStage } from '../types';
import Icon from '../../../components/AppIcon';

interface TimelineViewProps {
  stages: TimelineStage[];
}

const TimelineView = ({ stages }: TimelineViewProps) => {
  const getStageStyles = (status: TimelineStage['status']) => {
    switch (status) {
      case 'completed':
        /* Deep Midnight Blue for authoritative, completed milestones */
        return 'text-white bg-brand-midnight border-brand-midnight shadow-md shadow-brand-midnight/10';
      case 'in-progress':
        /* Champagne Gold for the high-value current active stage */
        return 'text-brand-midnight bg-brand-gold border-brand-gold animate-pulse shadow-md shadow-brand-gold/20';
      case 'failed':
        return 'text-white bg-destructive border-destructive';
      default:
        /* Steel Blue / Slate for pending/secondary stages */
        return 'text-brand-slate bg-brand-slate/10 border-brand-slate/20';
    }
  };

  const getStageIcon = (status: TimelineStage['status']) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle2';
      case 'in-progress':
        return 'Clock';
      case 'failed':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1;
        const isCompleted = stage.status === 'completed';

        return (
          <div key={stage.id} className="relative">
            {/* Connecting Line: Slate for pending, Midnight for completed path */}
            {!isLast && (
              <div
                className={`
                  absolute left-4 md:left-6 top-10 md:top-14 w-[1px] h-[calc(100%-1rem)]
                  ${isCompleted ? 'bg-brand-midnight' : 'bg-brand-slate/20'}
                `}
              />
            )}

            <div className="flex gap-4 md:gap-6">
              {/* Icon Container */}
              <div className={`
                flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-xl border flex items-center justify-center z-10 transition-all duration-500
                ${getStageStyles(stage.status)}
              `}>
                <Icon
                  name={getStageIcon(stage.status)}
                  size={16}
                  className="md:w-6 md:h-6"
                />
              </div>

              {/* Content Area */}
              <div className={`flex-1 min-w-0 ${!isLast ? 'pb-8 md:pb-12' : 'pb-0'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className={`font-bold text-base md:text-lg transition-colors ${stage.status === 'pending' ? 'text-brand-slate' : 'text-brand-midnight'}`}>
                    {stage.title}
                  </h4>
                  {stage.timestamp && (
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-slate/60">
                      {stage.timestamp.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  )}
                </div>

                <p className="text-sm md:text-base text-brand-slate leading-relaxed mb-4 max-w-2xl">
                  {stage.description}
                </p>

                {/* Estimated Date Badge: Highlighted in Champagne Gold wash */}
                {stage.estimatedDate && stage.status === 'pending' && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-[10px] md:text-xs font-bold uppercase tracking-wide text-brand-gold">
                    <Icon name="Calendar" size={14} />
                    <span>
                      Target: {stage.estimatedDate.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                )}

                {/* Detailed Checklist: Midnight and Gold details */}
                {stage.details && stage.details.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {stage.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-brand-midnight/70 font-medium bg-brand-midnight/[0.02] p-2 rounded-lg border border-brand-midnight/5"
                      >
                        <Icon name="Check" size={14} className="flex-shrink-0 mt-0.5 text-brand-gold" />
                        <span className="line-clamp-2">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineView;