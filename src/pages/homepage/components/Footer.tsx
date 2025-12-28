import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/trust-security-center' },
      { label: 'How It Works', path: '/homepage' },
      { label: 'Success Stories', path: '/homepage' },
      { label: 'Trust & Security', path: '/trust-security-center' }
    ],
    services: [
      { label: 'Tourist Visa', path: '/country-detail-pages' },
      { label: 'Business Visa', path: '/country-detail-pages' },
      { label: 'Student Visa', path: '/country-detail-pages' },
      { label: 'Work Visa', path: '/country-detail-pages' }
    ],
    support: [
      { label: 'Help Center', path: '/trust-security-center' },
      { label: 'Track Application', path: '/live-tracking-dashboard' },
      { label: 'Contact Us', path: '/trust-security-center' },
      { label: 'WhatsApp Support', path: 'https://wa.me/' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/trust-security-center' },
      { label: 'Terms of Service', path: '/trust-security-center' },
      { label: 'Refund Policy', path: '/trust-security-center' },
      { label: 'Cookie Policy', path: '/trust-security-center' }
    ]
  };

  const socialLinks = [
    { icon: 'Facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'Instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'Linkedin', url: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    /* Background using Deep Midnight Blue for Trust and Stability */
    <footer className=" text-white border-t border-brand-slate/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="sm:col-span-2">
            <Link 
            to="/homepage" 
            className="flex items-center gap-3 transition-smooth hover:opacity-80"
          >
            {/* 2. UPDATED: Use the absolute string path for the src */}
            <img 
              src="/assets/images/visanavigator-logo.png" 
              alt="Visanavigator Logo" 
              className="h-12 ml-0" // Adjusted size for better fit
            />
          </Link>
            <Link to="/homepage" className="flex items-center gap-3 mb-4">
               {/* Logo placeholder using Champagne Gold */}
              
              <div className="flex flex-col">
                <span className="font-headline font-semibold text-lg text-white leading-none">
                  VisaNavigator
                </span>
                <span className="font-mono text-xs text-brand-gold leading-none mt-0.5">
                  99.8% Success Rate
                </span>
              </div>
            </Link>
            {/* Tagline using Steel Blue / Slate (lighter for contrast) */}
            <p className="text-sm text-brand-slate mb-4 line-clamp-3">
              Making visa applications simple and transparent. Trusted by 10,000+ travelers worldwide with industry-leading success rates.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Hover states using Champagne Gold */
                  className="w-9 h-9 rounded-lg bg-white/10 text-white hover:bg-brand-gold hover:text-brand-midnight flex items-center justify-center transition-smooth"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-sm md:text-base text-brand-gold mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-brand-slate hover:text-brand-gold transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-sm md:text-base text-brand-gold mb-3 md:mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks?.services?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-brand-slate hover:text-brand-gold transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-sm md:text-base text-brand-gold mb-3 md:mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link) => (
                <li key={link?.label}>
                  {link?.path?.startsWith('http') ? (
                    <a
                      href={link?.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-slate hover:text-brand-gold transition-smooth"
                    >
                      {link?.label}
                    </a>
                  ) : (
                    <Link
                      to={link?.path}
                      className="text-sm text-brand-slate hover:text-brand-gold transition-smooth"
                    >
                      {link?.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold text-sm md:text-base text-brand-gold mb-3 md:mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks?.legal?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-brand-slate hover:text-brand-gold transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-brand-slate/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-brand-slate text-center md:text-left">
              © {currentYear} VisaNavigator. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-brand-slate">
              <div className="flex items-center gap-1.5">
                <Icon name="Shield" size={14} className="text-brand-gold" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="Lock" size={14} className="text-brand-gold" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-brand-gold" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;