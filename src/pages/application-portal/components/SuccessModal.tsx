import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

interface SuccessModalProps {
  isOpen: boolean;
  applicationId: string;
  onClose: () => void;
  onTrackApplication: () => void;
}

const SuccessModal = ({ 
  isOpen, 
  applicationId, 
  onClose, 
  onTrackApplication 
}: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-midnight/40 backdrop-blur-md">
      <div className="w-full max-w-md bg-card rounded-2xl border border-brand-gold/20 p-6 md:p-8 animate-fade-in shadow-2xl">
        <div className="text-center">
          {/* Celebratory Icon: Using Champagne Gold for Success */}
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
            <Icon name="CheckCircle" size={40} className="text-brand-gold" />
          </div>

          <h2 className="font-headline font-bold text-2xl md:text-3xl text-brand-midnight mb-2">
            Application Submitted!
          </h2>
          
          <p className="text-sm md:text-base text-brand-slate mb-8">
            Your visa application has been securely received and is now being prioritized by our expert team.
          </p>

          {/* ID Box: Deep Midnight Blue wash with high-contrast text */}
          <div className="p-4 bg-brand-midnight/[0.03] border border-brand-slate/10 rounded-xl mb-8 shadow-inner">
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-slate mb-1">
              Application Reference ID
            </p>
            <p className="font-mono font-bold text-lg md:text-xl text-brand-midnight">
              {applicationId}
            </p>
          </div>

          <div className="space-y-4 text-left mb-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={18} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-midnight">
                  Confirmation Email Sent
                </p>
                <p className="text-xs text-brand-slate font-medium">
                  We've sent a complete copy of your application to your inbox.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-midnight/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Bell" size={18} className="text-brand-midnight" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-midnight">
                  Real-time Tracking Active
                </p>
                <p className="text-xs text-brand-slate font-medium">
                  Follow every milestone of your journey from your dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={18} className="text-success" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-midnight">
                  Expert Concierge Support
                </p>
                <p className="text-xs text-brand-slate font-medium">
                  Our specialists are ready on WhatsApp for any immediate questions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant="default"
              size="lg"
              iconName="Activity"
              iconPosition="left"
              fullWidth
              onClick={onTrackApplication}
              /* Primary Action: Authoritative Midnight Blue */
              className="bg-brand-midnight hover:bg-brand-midnight/90 text-white font-bold py-4 shadow-lg shadow-brand-midnight/20"
            >
              Track Progress Live
            </Button>
            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={onClose}
              /* Secondary Action: Professional Slate */
              className="text-brand-slate border-brand-slate hover:bg-brand-slate/5 font-bold"
            >
              Return to Portal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;