import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import type { MediaMention } from '../types';

interface MediaMentionsProps {
  mentions: MediaMention[];
}

const MediaMentions = ({ mentions }: MediaMentionsProps) => {
  return (
    /* Background: Subtle Slate wash to maintain professional neutrality */
    <section className="py-12 md:py-16 lg:py-20 bg-brand-slate/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          {/* Badge: Champagne Gold to signify premium recognition */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="Newspaper" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Media Recognition
            </span>
          </div>
          {/* Header: Deep Midnight Blue for Authority */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-4">
            Featured in Leading Publications
          </h2>
          {/* Subtext: Steel Blue / Slate */}
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium leading-relaxed">
            Global recognition from industry leaders highlighting our commitment to transparency, security, and innovation in immigration technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mentions.map((mention) => (
            <a
              key={mention.id}
              href={mention.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              /* Card: Slate border that glows Gold on hover */
              className="w-full min-w-0 bg-card rounded-2xl overflow-hidden border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Logo Header: Midnight Blue wash with interactive logo opacity */}
              <div className="h-14 md:h-20 bg-brand-midnight/[0.03] border-b border-brand-slate/5 flex items-center justify-center px-6">
                <Image 
                  src={mention.logoUrl} 
                  alt={mention.alt}
                  className="max-h-6 md:max-h-8 w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="p-5 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  {/* Outlet Tag: Midnight Blue font */}
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-midnight">
                    {mention.outlet}
                  </span>
                  <span className="text-brand-gold font-bold">•</span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-slate/60">
                    {mention.date}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-brand-midnight mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors duration-300">
                  {mention.title}
                </h3>

                <p className="text-sm text-brand-slate mb-6 line-clamp-3 leading-relaxed italic">
                  "{mention.excerpt}"
                </p>

                {/* Interactive Link: Midnight Blue with Gold arrow */}
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-brand-midnight uppercase tracking-widest">
                  View Full Feature
                  <Icon name="ArrowRight" size={14} className="text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaMentions;