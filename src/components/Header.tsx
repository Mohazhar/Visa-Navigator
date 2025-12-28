import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from './AppIcon';
import Button from './ui/Button';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Countries', path: '/country-detail-pages', icon: 'Globe' },
    { label: 'Apply Now', path: '/application-portal', icon: 'FileText' },
    { label: 'Track Application', path: '/live-tracking-dashboard', icon: 'Activity' },
    { label: 'Trust & Security', path: '/trust-security-center', icon: 'Shield' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-glass border-b border-border ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          <Link 
            to="/homepage" 
            className="flex items-center gap-3 transition-smooth hover:opacity-80"
          >
            <img 
              src="/assets/images/visanavigator-logo.png" 
              alt="Visanavigator Logo" 
              className="w-auto h-12 ml-4 lg:ml-10" 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                  transition-smooth hover:bg-muted
                  ${isActivePath(item.path) 
                    ? 'text-brand-gold bg-brand-gold/10' // Active: Champagne Gold
                    : 'text-brand-midnight' // Normal: Deep Midnight Blue
                  }
                `}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="default"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
              onClick={() => window.open('https://wa.me/', '_blank')}
              /* WhatsApp uses Steel Blue / Slate for professional support feel */
              className="text-brand-slate hover:text-brand-slate hover:bg-brand-slate/10"
            >
              WhatsApp
            </Button>
            <Button
              variant="default"
              size="default"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={18}
              onClick={() => navigate('/application-portal')}
              /* Primary CTA uses Deep Midnight Blue for Authority */
              className="bg-brand-midnight hover:bg-brand-midnight/90 text-white"
            >
              Start Application
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth text-brand-midnight"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <nav className="flex flex-col p-4 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base
                    transition-smooth hover:bg-muted
                    ${isActivePath(item.path) 
                      ? 'text-brand-gold bg-brand-gold/10' 
                      : 'text-brand-midnight'
                    }
                  `}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;