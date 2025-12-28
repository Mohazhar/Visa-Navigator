import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { ExpertProfile } from '../types';

interface ExpertTeamProps {
  experts: ExpertProfile[];
}

const ExpertTeam = ({ experts }: ExpertTeamProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge: Using Champagne Gold to signify premium expertise */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="Users" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Expert Council
            </span>
          </div>
          {/* Header: Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-4">
            Meet Our Immigration Specialists
          </h2>
          {/* Subtext: Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            Our team of elite immigration lawyers and global mobility specialists are dedicated to navigating your application to success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {experts.map((expert) => (
            <div 
              key={expert.id}
              /* Card: Subtle Slate border that glows Gold on hover */
              className="w-full min-w-0 bg-card rounded-2xl overflow-hidden border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-midnight/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={expert.photoUrl} 
                  alt={expert.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-8">
                {/* Name in Midnight Blue */}
                <h3 className="text-lg md:text-xl font-bold text-brand-midnight mb-1">
                  {expert.name}
                </h3>
                {/* Role in Slate with Gold accent dot */}
                <p className="text-sm md:text-base text-brand-slate font-bold mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {expert.role}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Award" size={16} className="text-brand-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-midnight">
                        Credentials
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {expert.credentials.map((cred, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-brand-slate/5 border border-brand-slate/10 rounded text-[10px] font-bold text-brand-slate"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Briefcase" size={16} className="text-brand-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-midnight">
                        Tenure
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-brand-slate leading-relaxed italic">
                      "{expert.experience}"
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Target" size={16} className="text-brand-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-midnight">
                        Focus Area
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {expert.specialization.map((spec, index) => (
                        <span 
                          key={index}
                          /* Specialization in Midnight Blue wash */
                          className="px-2 py-1 bg-brand-midnight/5 border border-brand-midnight/10 rounded text-[10px] font-bold text-brand-midnight"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {expert.linkedIn && (
                  <a
                    href={expert.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* Link in Midnight Blue with Gold icon */
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-brand-midnight hover:text-brand-gold transition-colors duration-300"
                  >
                    <Icon name="Linkedin" size={16} className="text-brand-gold" />
                    Professional Profile
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;