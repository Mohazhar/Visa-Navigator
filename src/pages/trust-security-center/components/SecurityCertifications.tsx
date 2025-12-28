import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { SecurityCertification } from '../types';

interface SecurityCertificationsProps {
  certifications: SecurityCertification[];
}

const SecurityCertifications = ({ certifications }: SecurityCertificationsProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          {/* Badge: Champagne Gold for a premium "certified" signal */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="Award" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Global Compliance
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-headline font-bold text-brand-midnight mb-6">
            Industry-Leading Security Standards
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            Our infrastructure is architected to meet and exceed elite international security benchmarks, ensuring your sensitive data is guarded with absolute precision.
          </p>
        </div>

        {/* Informative Diagram: Cybersecurity Layers */}
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              /* Card: Subtle Slate border that shifts to Gold on hover */
              className="w-full min-w-0 bg-card rounded-2xl p-6 md:p-8 border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-5 mb-6">
                {/* Logo Container: Midnight Blue wash for high-contrast presentation */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-brand-midnight/[0.03] border border-brand-slate/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-300">
                  <Image 
                    src={cert.badgeUrl} 
                    alt={cert.alt}
                    className="w-full h-full object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-brand-midnight mb-1 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-slate">
                    Verified by {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-sm text-brand-slate mb-6 line-clamp-3 leading-relaxed italic">
                "{cert.description}"
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-brand-slate/10">
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-slate/60">
                  <Icon name="ShieldCheck" size={14} className="text-brand-gold" />
                  <span>Until {cert.validUntil}</span>
                </div>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Link: Deep Midnight Blue for authoritative action */
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-brand-midnight hover:text-brand-gold transition-colors duration-300"
                >
                  Verify Audit
                  <Icon name="ExternalLink" size={14} className="text-brand-gold" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCertifications;