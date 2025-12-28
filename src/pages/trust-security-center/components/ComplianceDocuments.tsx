import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { ComplianceDocument } from '../types';

interface ComplianceDocumentsProps {
  documents: ComplianceDocument[];
}

const ComplianceDocuments = ({ documents }: ComplianceDocumentsProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge: Using Midnight Blue and Gold for a prestigious "Official" feel */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Icon name="ShieldCheck" size={18} className="text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight">
              Compliance Framework
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-4">
            Transparency Through Documentation
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-brand-slate max-w-3xl mx-auto font-medium">
            Access our complete compliance documentation, security audits, and global policy standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              /* Card: Subtle Slate border with Gold focus on hover */
              className="w-full min-w-0 bg-card rounded-2xl p-5 md:p-8 border border-brand-slate/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                {/* Icon Container: Midnight Blue grounding with Gold Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-brand-midnight/5 rounded-xl flex items-center justify-center border border-brand-midnight/5 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/20 transition-colors">
                  <Icon name={doc.icon} size={24} className="text-brand-midnight group-hover:text-brand-gold transition-colors" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base md:text-lg font-bold text-brand-midnight line-clamp-2">
                      {doc.title}
                    </h3>
                    <span className="px-2 py-1 bg-brand-slate/5 border border-brand-slate/10 rounded text-[10px] font-bold uppercase tracking-wider text-brand-slate whitespace-nowrap flex-shrink-0">
                      {doc.type}
                    </span>
                  </div>

                  <p className="text-sm text-brand-slate mb-4 line-clamp-2 leading-relaxed italic">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-slate/10">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-slate/60">
                      <Icon name="Calendar" size={14} className="text-brand-gold" />
                      <span>Updated {doc.lastUpdated}</span>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Download"
                      iconPosition="left"
                      iconSize={14}
                      onClick={() => window.open(doc.fileUrl, '_blank')}
                      /* Button: Midnight Blue for authoritative action */
                      className="border-brand-midnight text-brand-midnight hover:bg-brand-midnight hover:text-white transition-all font-bold uppercase tracking-widest text-[10px]"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceDocuments;