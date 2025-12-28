import { DocumentStatus } from '../types';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface DocumentStatusCardProps {
  documents: DocumentStatus[];
  onResubmit: (documentId: string) => void;
}

const DocumentStatusCard = ({ documents, onResubmit }: DocumentStatusCardProps) => {
  const getStatusColor = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'verified':
        /* Champagne Gold for the premium success path */
        return 'text-brand-gold bg-brand-gold/10 border-brand-gold/20';
      case 'rejected':
        return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'expired':
        /* Bronze for Heritage/Attention signals */
        return 'text-brand-bronze bg-brand-bronze/10 border-brand-bronze/20';
      default:
        return 'text-brand-slate bg-brand-slate/10 border-brand-slate/20';
    }
  };

  const getStatusIcon = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'verified':
        return 'CheckCircle2';
      case 'rejected':
        return 'XCircle';
      case 'expired':
        return 'AlertCircle';
      default:
        return 'Clock';
    }
  };

  const getStatusText = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'rejected':
        return 'Rejected';
      case 'expired':
        return 'Expired';
      default:
        return 'Pending Review';
    }
  };

  const isExpiringSoon = (expiryDate?: Date) => {
    if (!expiryDate) return false;
    const daysUntilExpiry = Math.floor((expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  };

  return (
    <div className="w-full space-y-3 md:space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          /* Card border using brand-slate for professional structure */
          className="w-full min-w-0 p-4 md:p-6 rounded-xl border border-brand-slate/10 bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex-1 min-w-0">
              {/* Document Name: Deep Midnight Blue for Authority */}
              <h4 className="font-bold text-sm md:text-base text-brand-midnight line-clamp-2 mb-1">
                {doc.name}
              </h4>
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-slate/60">
                <Icon name="Calendar" size={12} className="text-brand-gold" />
                <span className="whitespace-nowrap">
                  Uploaded: {doc.uploadDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>

            <div className={`
              flex items-center gap-1.5 px-2 md:px-3 py-1 rounded-lg border text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap
              ${getStatusColor(doc.status)}
            `}>
              <Icon name={getStatusIcon(doc.status)} size={12} />
              <span className="hidden sm:inline">{getStatusText(doc.status)}</span>
            </div>
          </div>

          {doc.expiryDate && (
            <div className={`
              flex items-center gap-2 p-2 md:p-3 rounded-lg mb-3 text-xs font-medium
              ${isExpiringSoon(doc.expiryDate)
                ? 'bg-brand-gold/5 text-brand-gold border border-brand-gold/20' 
                : 'bg-brand-midnight/[0.03] text-brand-slate border border-brand-slate/5'
              }
            `}>
              <Icon name="Shield" size={14} className={isExpiringSoon(doc.expiryDate) ? 'text-brand-gold' : 'text-brand-slate'} />
              <span className="line-clamp-1">
                {isExpiringSoon(doc.expiryDate)
                  ? `Immediate Attention: Expires ${doc.expiryDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}`
                  : `Secured until: ${doc.expiryDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}`
                }
              </span>
            </div>
          )}

          {doc.rejectionReason && (
            <div className="p-3 md:p-4 rounded-lg bg-destructive/[0.03] border border-destructive/20 mb-4">
              <p className="text-xs md:text-sm text-destructive leading-relaxed">
                <strong className="uppercase tracking-tighter mr-1">Compliance Error:</strong> {doc.rejectionReason}
              </p>
            </div>
          )}

          {(doc.status === 'rejected' || doc.status === 'expired') && (
            <Button
              variant="outline"
              size="sm"
              iconName="Upload"
              iconPosition="left"
              iconSize={16}
              fullWidth
              onClick={() => onResubmit(doc.id)}
              /* Button uses Deep Midnight Blue for authoritative action */
              className="mt-2 border-brand-midnight text-brand-midnight hover:bg-brand-midnight hover:text-white transition-all font-bold uppercase tracking-wider text-[10px]"
            >
              Update Documentation
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentStatusCard;