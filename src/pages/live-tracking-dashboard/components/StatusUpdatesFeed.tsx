import { StatusUpdate } from '../types';
import Icon from '../../../components/AppIcon';

interface StatusUpdatesFeedProps {
  updates: StatusUpdate[];
}

const StatusUpdatesFeed = ({ updates }: StatusUpdatesFeedProps) => {
  const getUpdateColor = (type: StatusUpdate['type']) => {
    switch (type) {
      case 'success':
        /* Champagne Gold for successful milestones */
        return 'bg-brand-gold/10 border-brand-gold/20 text-brand-midnight';
      case 'warning':
        return 'bg-warning/10 border-warning/20 text-warning';
      case 'error':
        return 'bg-destructive/10 border-destructive/20 text-destructive';
      default:
        /* Slate background for standard logs */
        return 'bg-brand-slate/[0.03] border-brand-slate/10 text-brand-midnight';
    }
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {updates.map((update) => (
        <div
          key={update.id}
          className={`
            flex gap-3 md:gap-4 p-4 md:p-6 rounded-2xl border transition-all duration-300
            ${update.isFromSystem ? 'ml-0 mr-6 md:mr-10' : 'ml-6 md:ml-10 mr-0 shadow-sm'}
            ${getUpdateColor(update.type)}
          `}
        >
          <div className="flex-shrink-0">
            <div className={`
              w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center border
              ${update.isFromSystem 
                ? 'bg-brand-midnight border-brand-midnight text-white shadow-brand-midnight/20' 
                : 'bg-white border-brand-slate/20 text-brand-slate shadow-sm'
              }
            `}>
              <Icon
                name={update.icon}
                size={16}
                className="md:w-5 md:h-5"
                /* Icon color set dynamically by the container's text color */
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {/* Message Header: Distinguish between System and User */}
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
              {update.isFromSystem ? 'Official Update' : 'Applicant Message'}
            </p>
            
            <p className="text-sm md:text-base text-inherit mb-3 leading-relaxed">
              {update.message}
            </p>
            
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold opacity-50 uppercase tracking-wider">
              <Icon name="Clock" size={12} className="text-brand-gold" />
              <span className="whitespace-nowrap">
                {update.timestamp.toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusUpdatesFeed;