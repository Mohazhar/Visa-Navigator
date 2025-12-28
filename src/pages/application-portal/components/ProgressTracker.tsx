import { FormSection } from '../types';
import Icon from '../../../components/AppIcon';

interface ProgressTrackerProps {
  sections: FormSection[];
  currentSection: string;
  completionPercentage: number;
  onSectionClick: (sectionId: string) => void;
}

const ProgressTracker = ({ 
  sections, 
  currentSection, 
  completionPercentage,
  onSectionClick 
}: ProgressTrackerProps) => {
  return (
    <div className="w-full bg-card rounded-xl border border-brand-slate/10 p-4 md:p-6 lg:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        {/* Heading: Deep Midnight Blue for Authority */}
        <h3 className="font-headline font-bold text-lg md:text-xl text-brand-midnight">
          Application Progress
        </h3>
        <div className="flex items-center gap-2">
          {/* Percentage: Highlighted in Champagne Gold */}
          <div className="text-2xl md:text-3xl font-bold text-brand-gold">
            {completionPercentage}%
          </div>
          <Icon name="TrendingUp" size={20} className="text-brand-gold" />
        </div>
      </div>

      {/* Main Progress Bar: Slate background with Gold fill */}
      <div className="w-full bg-brand-slate/10 rounded-full h-3 mb-6 md:mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-brand-midnight to-brand-gold rounded-full transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      <div className="space-y-3 md:space-y-4">
        {sections.map((section) => {
          const isActive = section.id === currentSection;
          const isCompleted = section.completed;
          const progress = (section.completedFields / section.fields) * 100;

          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`
                w-full text-left p-4 rounded-lg border transition-all duration-300
                ${isActive 
                  ? 'border-brand-gold bg-brand-gold/5 shadow-sm' 
                  : isCompleted 
                    ? 'border-brand-midnight/20 bg-brand-midnight/[0.02] hover:bg-brand-midnight/[0.05]' 
                    : 'border-brand-slate/10 bg-card hover:bg-brand-slate/5'
                }
              `}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className={`
                  flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors
                  ${isCompleted 
                    ? 'bg-brand-midnight text-white' 
                    : isActive 
                      ? 'bg-brand-gold text-brand-midnight' 
                      : 'bg-brand-slate/10 text-brand-slate'
                  }
                `}>
                  {isCompleted ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    <Icon name={section.icon} size={20} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    {/* Section Titles in Midnight Blue */}
                    <h4 className={`font-bold text-sm md:text-base ${isActive ? 'text-brand-midnight' : 'text-brand-midnight/70'}`}>
                      {section.title}
                    </h4>
                    <span className="text-xs md:text-sm text-brand-slate font-semibold whitespace-nowrap ml-2">
                      {section.completedFields}/{section.fields}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-brand-slate mb-2 line-clamp-1">
                    {section.description}
                  </p>
                  
                  {!isCompleted && (
                    <div className="w-full bg-brand-slate/10 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-brand-gold rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Achievement Box: Refined Gold/Midnight color grade */}
      <div className="mt-6 md:mt-8 p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-xl">
        <div className="flex items-start gap-3">
          <Icon name="Award" size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm md:text-base text-brand-midnight mb-1">
              {completionPercentage >= 100 ? "Ready to Submit!" : "Application Status"}
            </h4>
            <p className="text-xs md:text-sm text-brand-slate font-medium">
              {completionPercentage >= 75 
                ? "Excellent progress! You are nearly finished." 
                : completionPercentage >= 50 
                  ? "You've crossed the halfway mark. Well done!" 
                  : completionPercentage >= 25 
                    ? "Great start! Your information is being saved." 
                    : "Welcome. Let's begin your visa journey."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;