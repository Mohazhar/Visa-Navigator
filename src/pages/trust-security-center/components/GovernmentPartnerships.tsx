import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { GovernmentPartnership } from '../types';

interface GovernmentPartnershipsProps {
  partnerships: GovernmentPartnership[];
}

const GovernmentPartnerships = ({ partnerships }: GovernmentPartnershipsProps) => {
  return (
    /* Background: Subtle Slate wash to anchor the section without visual clutter */
    <section className="py-12 md:py-16 lg:py-20 bg-brand-slate/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge: Champagne Gold to represent high-value/elite status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="Globe" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Global Network
            </span>
          </div>
          {/* Header: Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-4">
            Authorized Government Alliances
          </h2>
          {/* Subtext: Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            We maintain official diplomatic and technical partnerships with embassies and regulatory agencies worldwide to facilitate expedited processing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {partnerships.map((partnership) => (
            <div 
              key={partnership.id}
              /* Card: Subtle Slate border that shifts to Gold on hover */
              className="w-full min-w-0 bg-card rounded-2xl p-5 md:p-8 border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Logo Container: Midnight Blue wash for high-contrast presentation */}
                <div className="w-16 h-16 flex-shrink-0 bg-brand-midnight/[0.03] border border-brand-slate/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-300">
                  <Image 
                    src={partnership.logoUrl} 
                    alt={partnership.alt}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-brand-midnight mb-1 line-clamp-1">
                    {partnership.country}
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-slate line-clamp-1">
                    {partnership.agency}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="ShieldCheck" size={16} className="text-brand-gold flex-shrink-0" />
                  <span className="text-xs md:text-sm font-bold text-brand-midnight/80">
                    {partnership.partnershipType}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-brand-slate flex-shrink-0" />
                  <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-brand-slate/60">
                    Established Since {partnership.establishedDate}
                  </span>
                </div>
              </div>

              <p className="text-sm text-brand-slate mb-6 line-clamp-3 leading-relaxed">
                {partnership.description}
              </p>

              <a
                href={partnership.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                /* Primary Link: Deep Midnight Blue for trust */
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-brand-midnight hover:text-brand-gold transition-colors duration-300"
              >
                Inspect Official Mandate
                <Icon name="ExternalLink" size={14} className="text-brand-gold" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentPartnerships;