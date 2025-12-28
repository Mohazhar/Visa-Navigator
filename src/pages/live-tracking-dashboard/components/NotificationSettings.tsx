import { useState } from 'react';
import { NotificationPreferences } from '../types';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

interface NotificationSettingsProps {
  preferences: NotificationPreferences;
  onSave: (preferences: NotificationPreferences) => void;
}

const NotificationSettings = ({ preferences, onSave }: NotificationSettingsProps) => {
  const [localPreferences, setLocalPreferences] = useState<NotificationPreferences>(preferences);
  const [isSaving, setIsSaving] = useState(false);

  const handleToggle = (key: keyof NotificationPreferences) => {
    setLocalPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSave(localPreferences);
    setIsSaving(false);
  };

  const notificationOptions = [
    {
      key: 'email' as keyof NotificationPreferences,
      icon: 'Mail',
      label: 'Email Notifications',
      description: 'Receive updates via secure email'
    },
    {
      key: 'sms' as keyof NotificationPreferences,
      icon: 'MessageSquare',
      label: 'SMS Notifications',
      description: 'Get prioritized text message alerts'
    },
    {
      key: 'whatsapp' as keyof NotificationPreferences,
      icon: 'MessageCircle',
      label: 'WhatsApp Updates',
      description: 'Concierge-level WhatsApp notifications'
    },
    {
      key: 'pushNotifications' as keyof NotificationPreferences,
      icon: 'Bell',
      label: 'Push Notifications',
      description: 'Instant mobile & browser alerts'
    }
  ];

  return (
    <div className="w-full min-w-0 p-4 md:p-6 lg:p-8 rounded-2xl border border-brand-slate/10 bg-card shadow-sm">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        {/* Settings Icon: Champagne Gold to represent high-value configuration */}
        <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
          <Icon name="Settings" size={20} className="text-brand-gold" />
        </div>
        <h3 className="font-headline font-bold text-lg md:text-xl text-brand-midnight">
          Notification Preferences
        </h3>
      </div>

      <div className="space-y-4 md:space-y-6">
        {notificationOptions.map((option) => (
          <div
            key={option.key}
            /* Row Styling: Midnight Blue wash on hover */
            className="flex items-start gap-3 md:gap-4 p-4 rounded-xl border border-transparent hover:border-brand-slate/10 hover:bg-brand-midnight/[0.02] transition-all duration-300 group"
          >
            {/* Category Icon: Steel Blue / Slate */}
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-slate/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
              <Icon name={option.icon} size={20} className="text-brand-slate group-hover:text-brand-gold transition-colors" />
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <Checkbox
                label={option.label}
                labelClassName="text-brand-midnight font-bold"
                description={option.description}
                descriptionClassName="text-brand-slate"
                checked={localPreferences[option.key]}
                onChange={() => handleToggle(option.key)}
                /* The Checkbox internally should be configured to use brand-gold as its primary fill color */
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-10 pt-8 border-t border-brand-slate/10">
        <Button
          variant="default"
          size="lg"
          iconName="Save"
          iconPosition="left"
          iconSize={18}
          fullWidth
          loading={isSaving}
          onClick={handleSave}
          /* Button uses Deep Midnight Blue for authoritative action with Gold focus */
          className="bg-brand-midnight hover:bg-brand-midnight/90 text-white font-bold shadow-lg shadow-brand-midnight/20 py-6"
        >
          Confirm Settings
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettings;