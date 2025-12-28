import { Application } from '../types';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

interface ApplicationCardProps {
  application: Application;
  isSelected: boolean;
  onClick: () => void;
}

const ApplicationCard = ({ application, isSelected, onClick }: ApplicationCardProps) => {
  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'approved':
        return 'text-success bg-success/10 border-success/20';
      case 'in-progress':
        /* Champagne Gold for the premium progress signal */
        return 'text-brand-gold bg-brand-gold/10 border-brand-gold/20';
      case 'rejected':
        return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'additional-docs-required':
        /* Bronze for Heritage/Urgency signals */
        return 'text-brand-bronze bg-brand-bronze/10 border-brand-bronze/20';
      default:
        return 'text-brand-slate bg-brand-slate/10 border-brand-slate/20';
    }
  };

  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'approved':
        return 'CheckCircle2';
      case 'in-progress':
        return 'Clock';
      case 'rejected':
        return 'XCircle';
      case 'additional-docs-required':
        return 'AlertCircle';
      default:
        return 'Circle';
    }
  };

  const getStatusText = (status: Application['status']) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'in-progress':
        return 'In Progress';
      case 'rejected':
        return 'Rejected';
      case 'additional-docs-required':
        return 'Action Required';
      default:
        return 'Pending';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`
        w-full min-w-0 p-4 md:p-6 rounded-xl border-2 cursor-pointer
        transition-all duration-300 hover:shadow-lg
        ${isSelected 
          ? 'border-brand-gold bg-brand-gold/[0.03]' 
          : 'border-brand-slate/10 bg-card hover:border-brand-midnight/30'
        }
      `}
    >
      <div className="flex items-start gap-3 md:gap-4">
        {/* Country Image with subtle brand border */}
        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border border-brand-slate/10 shadow-sm">
          <Image
            src={application.flagUrl}
            alt={application.flagAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex-1 min-w-0">
              {/* Title: Deep Midnight Blue for Trust */}
              <h3 className="font-bold text-base md:text-lg text-brand-midnight line-clamp-1 uppercase tracking-tight">
                {application.country}
              </h3>
              {/* Subtitle: Steel Blue / Slate */}
              <p className="text-xs md:text-sm text-brand-slate font-medium line-clamp-1">
                {application.visaType}
              </p>
            </div>
            {/* Status Badge: Mapped to brand impact colors */}
            <div className={`
              flex items-center gap-1.5 px-2 md:px-3 py-1 rounded-lg border text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap
              ${getStatusColor(application.status)}
            `}>
              <Icon name={getStatusIcon(application.status)} size={12} />
              <span className="hidden sm:inline">{getStatusText(application.status)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono text-brand-slate font-semibold tracking-wider">
              <Icon name="Hash" size={14} className="text-brand-gold" />
              <span className="line-clamp-1">{application.applicationNumber}</span>
            </div>

            {/* Progress Bar: Using Gold for active completion */}
            <div className="w-full bg-brand-slate/10 rounded-full h-1.5">
              <div
                className="bg-brand-gold h-full rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(197,160,89,0.3)]"
                style={{ width: `${application.progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
              <span className="text-brand-slate">Completion</span>
              <span className="text-brand-midnight whitespace-nowrap">
                {application.progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;