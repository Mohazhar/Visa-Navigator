import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import SecurityCertifications from './components/SecurityCertifications';
import GovernmentPartnerships from './components/GovernmentPartnerships';
import ExpertTeam from './components/ExpertTeam';
import SecurityMeasures from './components/SecurityMeasures';
import ProcessTransparency from './components/ProcessTransparency';
import SuccessMetrics from './components/SuccessMetrics';
import MediaMentions from './components/MediaMentions';
import ComplianceDocuments from './components/ComplianceDocuments';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import type {
  SecurityCertification,
  GovernmentPartnership,
  ExpertProfile,
  SecurityMeasure,
  ProcessStep,
  SuccessMetric,
  MediaMention,
  ComplianceDocument,
  FAQItem 
} from './types';

const TrustSecurityCenter = () => {
  /* Logic: Use Champagne Gold for high-value validation badges */
  const certifications: SecurityCertification[] = [
  {
    id: "cert-1",
    name: "ISO 27001:2013 Certification",
    issuer: "International Organization for Standardization",
    validUntil: "December 2025",
    badgeUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_195489c66-1764667420316.png",
    verificationUrl: "https://www.iso.org/",
    description: "International standard for information security management systems, ensuring the highest level of data protection and security practices.",
    alt: "ISO 27001 certification badge with blue and white shield design"
  },
  {
    id: "cert-2",
    name: "GDPR Compliance Certification",
    issuer: "European Data Protection Board",
    validUntil: "Ongoing",
    badgeUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1803b52d2-1764669839249.png",
    verificationUrl: "https://edpb.europa.eu/",
    description: "Full compliance with EU General Data Protection Regulation, protecting user privacy and data rights across all operations.",
    alt: "GDPR compliance badge with European Union stars and data protection symbol"
  },
  {
    id: "cert-3",
    name: "PCI DSS Level 1 Compliance",
    issuer: "PCI Security Standards Council",
    validUntil: "June 2025",
    badgeUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9628dbc-1765643626829.png",
    verificationUrl: "https://www.pcisecuritystandards.org/",
    description: "Highest level of payment card industry data security standard compliance for secure payment processing.",
    alt: "PCI DSS Level 1 certification badge with credit card security icon"
  },
  {
    id: "cert-4",
    name: "SOC 2 Type II Certification",
    issuer: "American Institute of CPAs",
    validUntil: "March 2025",
    badgeUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5c9883-1765031639088.png",
    verificationUrl: "https://www.aicpa.org/",
    description: "Demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy of customer data.",
    alt: "SOC 2 Type II certification badge with AICPA logo and security shield"
  },
  {
    id: "cert-5",
    name: "SSL/TLS Encryption Certificate",
    issuer: "DigiCert",
    validUntil: "September 2025",
    badgeUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdfcd310-1764765773000.png",
    verificationUrl: "https://www.digicert.com/",
    description: "256-bit SSL encryption protecting all data transmission between users and our servers.",
    alt: "SSL certificate badge with green padlock and encryption symbol"
  },
  {
    id: "cert-6",
    name: "Cyber Essentials Plus",
    issuer: "UK National Cyber Security Centre",
    validUntil: "November 2025",
    badgeUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_186735275-1766059746668.png",
    verificationUrl: "https://www.ncsc.gov.uk/",
    description: "UK government-backed certification demonstrating robust cyber security practices and controls.",
    alt: "Cyber Essentials Plus badge with UK government logo and security checkmark"
  }];

  /* Logic: Use Deep Midnight Blue for institutional partnerships */
  const partnerships: GovernmentPartnership[] = [
  {
    id: "partner-1",
    country: "United States",
    agency: "U.S. Department of State",
    partnershipType: "Authorized Visa Application Center",
    establishedDate: "2019",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1bca5e0eb-1765742132996.png",
    officialUrl: "https://travel.state.gov/",
    description: "Official partnership with the U.S. Department of State for processing visa applications and providing consular services.",
    alt: "United States Department of State official seal with eagle and shield"
  },
  {
    id: "partner-2",
    country: "United Kingdom",
    agency: "UK Visas and Immigration",
    partnershipType: "Premium Application Centre Partner",
    establishedDate: "2020",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_194573b4f-1766147593623.png",
    officialUrl: "https://www.gov.uk/government/organisations/uk-visas-and-immigration",
    description: "Authorized partner for UK visa applications with direct access to UKVI systems and priority processing channels.",
    alt: "UK Visas and Immigration logo with British crown and government crest"
  },
  {
    id: "partner-3",
    country: "Canada",
    agency: "Immigration, Refugees and Citizenship Canada",
    partnershipType: "Recognized Service Provider",
    establishedDate: "2018",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa41edaa-1764808653659.png",
    officialUrl: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    description: "Official recognition from IRCC for providing visa application services and immigration consultation.",
    alt: "Immigration, Refugees and Citizenship Canada logo with maple leaf"
  },
  {
    id: "partner-4",
    country: "Australia",
    agency: "Department of Home Affairs",
    partnershipType: "Migration Agent Partner",
    establishedDate: "2021",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_152cd6dc3-1764655229231.png",
    officialUrl: "https://www.homeaffairs.gov.au/",
    description: "Registered migration agent partnership with Australian Department of Home Affairs for visa processing.",
    alt: "Australian Department of Home Affairs logo with Commonwealth coat of arms"
  },
  {
    id: "partner-5",
    country: "European Union",
    agency: "Schengen Visa Information System",
    partnershipType: "Authorized Application Center",
    establishedDate: "2020",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1221fa52c-1765057096374.png",
    officialUrl: "https://ec.europa.eu/home-affairs/",
    description: "Authorized center for processing Schengen visa applications across 26 European countries.",
    alt: "European Union flag with circle of yellow stars on blue background"
  },
  {
    id: "partner-6",
    country: "Singapore",
    agency: "Immigration & Checkpoints Authority",
    partnershipType: "Approved Visa Agent",
    establishedDate: "2022",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5f07a70-1764748279131.png",
    officialUrl: "https://www.ica.gov.sg/",
    description: "Approved agent for Singapore visa applications with direct submission access to ICA systems.",
    alt: "Singapore Immigration & Checkpoints Authority logo with lion emblem"
  }];

  const experts: ExpertProfile[] = [
  {
    id: "expert-1",
    name: "Dr. Sarah Mitchell",
    role: "Chief Immigration Counsel",
    credentials: ["JD", "LLM Immigration Law", "Bar Certified"],
    experience: "15+ years in immigration law with specialization in complex visa cases and appeals",
    specialization: ["US Immigration", "Business Visas", "Appeals & Litigation"],
    photoUrl: "https://images.unsplash.com/photo-1712217559097-cc2aaf698767",
    linkedIn: "https://www.linkedin.com/",
    alt: "Professional woman with brown hair in navy blue blazer smiling at camera in modern office"
  },
  {
    id: "expert-2",
    name: "James Chen",
    role: "Senior Visa Specialist",
    credentials: ["MARN", "RCIC", "Certified Migration Agent"],
    experience: "12+ years processing visas for Australia, Canada, and New Zealand with 99.5% success rate",
    specialization: ["Australian Visas", "Canadian Immigration", "Skilled Migration"],
    photoUrl: "https://images.unsplash.com/photo-1712217559097-cc2aaf698767",
    linkedIn: "https://www.linkedin.com/",
    alt: "Asian man in gray suit and glasses sitting at desk with laptop in professional office"
  },
  {
    id: "expert-3",
    name: "Maria Rodriguez",
    role: "European Visa Director",
    credentials: ["LLB", "EU Immigration Specialist", "Multilingual"],
    experience: "10+ years specializing in Schengen visas and European work permits across 26 countries",
    specialization: ["Schengen Visas", "EU Work Permits", "Student Visas"],
    photoUrl: "https://images.unsplash.com/photo-1712217559097-cc2aaf698767",
    linkedIn: "https://www.linkedin.com/",
    alt: "Hispanic woman with long dark hair in white blouse smiling confidently in bright office"
  },
  {
    id: "expert-4",
    name: "David Thompson",
    role: "UK Immigration Advisor",
    credentials: ["OISC Level 3", "Immigration Solicitor", "Home Office Accredited"],
    experience: "14+ years handling UK visa applications including Tier 1, Tier 2, and settlement visas",
    specialization: ["UK Work Visas", "Settlement Applications", "Spouse Visas"],
    photoUrl: "https://images.unsplash.com/photo-1712217559097-cc2aaf698767",
    linkedIn: "https://www.linkedin.com/",
    alt: "British man with beard in charcoal suit and tie standing in modern law office"
  },
  {
    id: "expert-5",
    name: "Priya Sharma",
    role: "Student Visa Specialist",
    credentials: ["ICEF Certified", "Education Counselor", "NAFSA Member"],
    experience: "8+ years helping students secure study visas for top universities worldwide",
    specialization: ["Student Visas", "F-1 Visas", "Education Counseling"],
    photoUrl: "https://images.unsplash.com/photo-1712217559097-cc2aaf698767",
    linkedIn: "https://www.linkedin.com/",
    alt: "Indian woman in burgundy blazer with warm smile sitting at consultation desk"
  },
  {
    id: "expert-6",
    name: "Michael O'Brien",
    role: "Business Immigration Lead",
    credentials: ["MBA", "AILA Member", "Corporate Immigration Expert"],
    experience: "11+ years managing corporate visa programs for Fortune 500 companies",
    specialization: ["Corporate Visas", "L-1 Transfers", "H-1B Applications"],
    photoUrl: "https://images.unsplash.com/photo-1712217559097-cc2aaf698767",
    linkedIn: "https://www.linkedin.com/",
    alt: "Caucasian man in navy suit with red tie in corporate boardroom setting"
  }];

  const securityMeasures: SecurityMeasure[] = [
  {
    id: "measure-1",
    title: "End-to-End Encryption",
    description: "All data transmitted between your device and our servers is protected with military-grade 256-bit AES encryption.",
    icon: "Lock",
    details: [
    "TLS 1.3 protocol for secure data transmission",
    "Zero-knowledge encryption for sensitive documents",
    "Encrypted database storage with regular key rotation",
    "Secure API endpoints with certificate pinning"]
  },
  {
    id: "measure-2",
    title: "Multi-Factor Authentication",
    description: "Enhanced account security with multiple verification layers to prevent unauthorized access.",
    icon: "ShieldCheck",
    details: [
    "SMS and email verification codes",
    "Biometric authentication support (fingerprint/face ID)",
    "Time-based one-time passwords (TOTP)",
    "Device recognition and trusted device management"]
  },
  {
    id: "measure-3",
    title: "Secure Document Storage",
    description: "Your sensitive documents are stored in encrypted, geographically distributed data centers with redundant backups.",
    icon: "Database",
    details: [
    "AWS S3 with server-side encryption",
    "Automatic daily backups with 30-day retention",
    "Geographic redundancy across multiple regions",
    "Access logging and audit trails for all document operations"]
  },
  {
    id: "measure-4",
    title: "Regular Security Audits",
    description: "Independent third-party security assessments and penetration testing to identify and address vulnerabilities.",
    icon: "Search",
    details: [
    "Quarterly penetration testing by certified ethical hackers",
    "Annual SOC 2 Type II audits",
    "Continuous vulnerability scanning and patching",
    "Bug bounty program with responsible disclosure policy"]
  },
  {
    id: "measure-5",
    title: "Access Control & Monitoring",
    description: "Strict role-based access controls and 24/7 monitoring to detect and prevent unauthorized activities.",
    icon: "Eye",
    details: [
    "Role-based access control (RBAC) for all systems",
    "Real-time intrusion detection and prevention",
    "Automated alerts for suspicious activities",
    "Comprehensive audit logs with tamper-proof storage"]
  },
  {
    id: "measure-6",
    title: "Data Privacy Compliance",
    description: "Full compliance with international data protection regulations including GDPR, CCPA, and local privacy laws.",
    icon: "FileCheck",
    details: [
    "Data minimization and purpose limitation principles",
    "Right to access, rectification, and erasure",
    "Data portability and transparent processing",
    "Privacy by design and default in all systems"]
  }];

  const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Initial Consultation & Assessment",
    description: "Our experts review your profile, travel history, and visa requirements to determine the best application strategy and identify potential challenges.",
    timeline: "30-60 minutes",
    icon: "UserCheck"
  },
  {
    id: "step-2",
    step: 2,
    title: "Document Collection & Verification",
    description: "We provide a personalized checklist and guide you through gathering all required documents, verifying authenticity and completeness before submission.",
    timeline: "3-5 days",
    icon: "FileText"
  },
  {
    id: "step-3",
    step: 3,
    title: "Application Preparation",
    description: "Our team meticulously prepares your application forms, ensuring accuracy and consistency across all documents to maximize approval chances.",
    timeline: "2-3 days",
    icon: "Edit"
  },
  {
    id: "step-4",
    step: 4,
    title: "Quality Assurance Review",
    description: "A senior immigration specialist conducts a comprehensive review of your complete application package, checking for errors or missing information.",
    timeline: "1-2 days",
    icon: "CheckCircle"
  },
  {
    id: "step-5",
    step: 5,
    title: "Official Submission",
    description: "We submit your application through official government channels with priority processing where available, providing you with tracking information.",
    timeline: "Same day",
    icon: "Send"
  },
  {
    id: "step-6",
    step: 6,
    title: "Real-Time Tracking & Updates",
    description: "Monitor your application status through our live dashboard with instant notifications for any updates or additional requirements from authorities.",
    timeline: "Ongoing",
    icon: "Activity"
  },
  {
    id: "step-7",
    step: 7,
    title: "Approval & Delivery",
    description: "Once approved, we coordinate visa collection or delivery, provide travel guidance, and offer post-approval support for your journey.",
    timeline: "1-2 days",
    icon: "Award"
  }];

  const successMetrics: SuccessMetric[] = [
  {
    id: "metric-1",
    label: "Success Rate",
    value: "99.8%",
    description: "Visa applications approved on first submission",
    icon: "TrendingUp",
    trend: "+2.3% vs last year"
  },
  {
    id: "metric-2",
    label: "Applications Processed",
    value: "10,000+",
    description: "Successful visa applications since 2018",
    icon: "Users",
    trend: "+45% growth"
  },
  {
    id: "metric-3",
    label: "Average Processing Time",
    value: "7 Days",
    description: "From submission to approval notification",
    icon: "Clock",
    trend: "-30% faster"
  },
  {
    id: "metric-4",
    label: "Customer Satisfaction",
    value: "4.9/5",
    description: "Based on 2,500+ verified reviews",
    icon: "Star",
    trend: "98% recommend us"
  }];

  const mediaMentions: MediaMention[] = [
  {
    id: "media-1",
    outlet: "TechCrunch",
    title: "VisaNavigator Revolutionizes Visa Processing with AI-Powered Platform",
    date: "November 15, 2023",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1799a4d6a-1764680137708.png",
    articleUrl: "https://techcrunch.com/",
    excerpt: "The startup's innovative approach to visa applications combines artificial intelligence with human expertise, achieving a remarkable 99.8% success rate and transforming a traditionally frustrating process into a seamless experience.",
    alt: "TechCrunch logo with green background and white text"
  },
  {
    id: "media-2",
    outlet: "Forbes",
    title: "How This Startup is Making International Travel More Accessible",
    date: "October 8, 2023",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_142c9e478-1764667044472.png",
    articleUrl: "https://www.forbes.com/",
    excerpt: "VisaNavigator's transparent pricing and 100% government fee refund guarantee are disrupting the visa processing industry, making international travel dreams more attainable for thousands of people worldwide.",
    alt: "Forbes magazine logo with black text on white background"
  },
  {
    id: "media-3",
    outlet: "The Wall Street Journal",
    title: "Travel Tech: The Future of Visa Applications",
    date: "September 22, 2023",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_19a8a23d1-1766511196517.png",
    articleUrl: "https://www.wsj.com/",
    excerpt: "Industry analysts predict that platforms like VisaNavigator will become the standard for visa processing, with their combination of technology, transparency, and customer-centric approach setting new benchmarks.",
    alt: "The Wall Street Journal logo with serif font and newspaper styling"
  },
  {
    id: "media-4",
    outlet: "BBC News",
    title: "Digital Innovation Simplifies Complex Visa Processes",
    date: "August 30, 2023",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6640352-1764708424932.png",
    articleUrl: "https://www.bbc.com/news",
    excerpt: "The platform's real-time tracking and expert support system has helped over 10,000 travelers navigate the complexities of international visa requirements with unprecedented ease and confidence.",
    alt: "BBC News logo with white letters on black background"
  },
  {
    id: "media-5",
    outlet: "Travel + Leisure",
    title: "The Best Visa Processing Services for International Travelers",
    date: "July 18, 2023",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1b320dd9b-1764790359650.png",
    articleUrl: "https://www.travelandleisure.com/",
    excerpt: "VisaNavigator tops our list with its comprehensive service, transparent pricing, and impressive success rate. Their team of immigration experts and user-friendly platform make visa applications stress-free.",
    alt: "Travel + Leisure magazine logo with elegant serif typography"
  },
  {
    id: "media-6",
    outlet: "Business Insider",
    title: "Why Corporate Travel Managers are Switching to VisaNavigator",
    date: "June 5, 2023",
    logoUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_197cda00e-1764693308870.png",
    articleUrl: "https://www.businessinsider.com/",
    excerpt: "Fortune 500 companies are increasingly turning to VisaNavigator for their business travel visa needs, citing time savings, reduced rejection rates, and superior customer support as key differentiators.",
    alt: "Business Insider logo with red and white color scheme"
  }];

  const complianceDocuments: ComplianceDocument[] = [
  {
    id: "doc-1",
    title: "Privacy Policy",
    type: "Policy",
    lastUpdated: "December 1, 2023",
    fileUrl: "#",
    icon: "FileText",
    description: "Comprehensive privacy policy detailing how we collect, use, protect, and share your personal information in compliance with GDPR and international privacy laws."
  },
  {
    id: "doc-2",
    title: "Terms of Service",
    type: "Legal",
    lastUpdated: "November 15, 2023",
    fileUrl: "#",
    icon: "Scale",
    description: "Complete terms and conditions governing the use of our platform, including user rights, responsibilities, and service limitations."
  },
  {
    id: "doc-3",
    title: "Security White Paper",
    type: "Technical",
    lastUpdated: "October 20, 2023",
    fileUrl: "#",
    icon: "Shield",
    description: "Detailed technical documentation of our security architecture, encryption methods, and data protection measures."
  },
  {
    id: "doc-4",
    title: "SOC 2 Type II Report",
    type: "Audit",
    lastUpdated: "September 30, 2023",
    fileUrl: "#",
    icon: "Award",
    description: "Independent audit report verifying our security, availability, processing integrity, confidentiality, and privacy controls."
  },
  {
    id: "doc-5",
    title: "GDPR Compliance Statement",
    type: "Compliance",
    lastUpdated: "August 15, 2023",
    fileUrl: "#",
    icon: "CheckCircle",
    description: "Detailed statement of our GDPR compliance measures, including data subject rights, processing activities, and international data transfers."
  },
  {
    id: "doc-6",
    title: "Data Processing Agreement",
    type: "Legal",
    lastUpdated: "July 1, 2023",
    fileUrl: "#",
    icon: "FileSignature",
    description: "Standard data processing agreement for business clients, outlining data handling responsibilities and security commitments."
  }];

  const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do you protect my personal information and documents?",
    answer: "We use military-grade 256-bit AES encryption for all data transmission and storage. Your documents are stored in secure, geographically distributed data centers with multiple layers of security including firewalls, intrusion detection systems, and 24/7 monitoring. We're fully compliant with GDPR, SOC 2, and ISO 27001 standards.",
    category: "Security & Privacy"
  },
  {
    id: "faq-2",
    question: "What happens to my data after my visa is processed?",
    answer: "After your visa is processed, we retain your data for the legally required period (typically 7 years for immigration records). You can request deletion of your data at any time, subject to legal retention requirements. All data is encrypted and access is strictly controlled and logged.",
    category: "Security & Privacy"
  },
  {
    id: "faq-3",
    question: "Do you share my information with third parties?",
    answer: "We only share your information with government authorities as required for visa processing and with our verified partners who assist in the application process. We never sell your data to third parties. All partners are bound by strict confidentiality agreements and data protection standards.",
    category: "Security & Privacy"
  },
  {
    id: "faq-4",
    question: "How does your 100% government fee refund guarantee work?",
    answer: "If your visa application is rejected, we refund 100% of the government fees you paid (not including our service fees). Simply notify us within 48 hours of rejection with official documentation, and we'll process your refund within 5-7 business days. No hidden conditions or exclusions apply.",
    category: "Guarantee & Refunds"
  },
  {
    id: "faq-5",
    question: "What's not covered by the refund guarantee?",
    answer: "Our service fees are non-refundable as they cover the expert consultation, document preparation, and submission services already provided. However, government fees are fully refundable if your application is rejected. We also offer a free resubmission service if rejection was due to correctable issues.",
    category: "Guarantee & Refunds"
  },
  {
    id: "faq-6",
    question: "How long does the refund process take?",
    answer: "Once we receive your rejection notification and verify the documentation, refunds are processed within 5-7 business days. The time for funds to appear in your account depends on your bank or payment provider, typically 3-5 additional business days.",
    category: "Guarantee & Refunds"
  },
  {
    id: "faq-7",
    question: "What makes your success rate so high (99.8%)?",
    answer: "Our high success rate comes from thorough initial assessments, expert document review, quality assurance checks, and our team's deep knowledge of visa requirements. We only accept applications we're confident will succeed, and we guide clients through every step to avoid common mistakes.",
    category: "Process & Success"
  },
  {
    id: "faq-8",
    question: "How do you verify your partnerships with government agencies?",
    answer: "All our government partnerships are publicly verifiable through official embassy and consulate websites. We provide direct links to verification pages, and our partnership certificates are available for review. You can also contact the relevant authorities directly to confirm our authorized status.",
    category: "Process & Success"
  },
  {
    id: "faq-9",
    question: "What qualifications do your immigration experts have?",
    answer: "Our team includes licensed immigration lawyers, certified migration agents (MARN, RCIC), and visa specialists with 10+ years of experience. All team members undergo continuous training on immigration law changes and maintain professional certifications from recognized bodies like AILA, OISC, and NAFSA.",
    category: "Process & Success"
  },
  {
    id: "faq-10",
    question: "Are you certified by any security or compliance organizations?",
    answer: "Yes, we hold multiple certifications including ISO 27001:2013 (information security), SOC 2 Type II (security controls), PCI DSS Level 1 (payment security), and GDPR compliance. We undergo regular third-party audits and maintain Cyber Essentials Plus certification from the UK National Cyber Security Centre.",
    category: "Certifications"
  },
  {
    id: "faq-11",
    question: "How often are your security measures audited?",
    answer: "We conduct quarterly penetration testing by certified ethical hackers, annual SOC 2 Type II audits, and continuous vulnerability scanning. We also participate in a bug bounty program and maintain a responsible disclosure policy for security researchers.",
    category: "Certifications"
  },
  {
    id: "faq-12",
    question: "Can I verify your certifications independently?",
    answer: "Absolutely. All our certifications include verification URLs where you can independently confirm their validity. We also provide certificate numbers and issuing authority contact information. Our compliance documents section includes links to official verification portals.",
    category: "Certifications"
  }];

  return (
    <>
      <Helmet>
        <title>Trust & Security Center | VisaNavigator — Secured Global Mobility</title>
        <meta
          name="description"
          content="Discover how VisaNavigator protects your data with institutional-grade security, maintains a 99.8% success rate, and guarantees official government fee protection." />
        <meta name="keywords" content="visa security, data protection, GDPR compliance, visa guarantee, immigration experts, secure visa processing" />
      </Helmet>

      {/* Main Container: Utilizing Midnight Blue as the authoritative grounding color */}
      <div className="min-h-screen bg-background text-brand-midnight selection:bg-brand-gold/20">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          
          {/* Section: Logic utilizes Champagne Gold for elite certifications */}
          <SecurityCertifications certifications={certifications} />
          
          {/* Section: Logic uses Deep Midnight Blue for authoritative partnerships */}
          <GovernmentPartnerships partnerships={partnerships} />
          
          <ExpertTeam experts={experts} />
          
          {/* Section: Highlights technical precision with Slate and Midnight Blue */}
          <SecurityMeasures measures={securityMeasures} />
          
          <ProcessTransparency steps={processSteps} />
          
          <SuccessMetrics metrics={successMetrics} />
          
          <MediaMentions mentions={mediaMentions} />
          
          {/* Section: Uses Slate for professional compliance documentation */}
          <ComplianceDocuments documents={complianceDocuments} />
          
          <GuaranteeSection />
          
          <FAQSection faqs={faqs} />
          
          <CTASection />
        </main>

        <footer className="bg-brand-midnight text-white border-t border-white/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-2">VisaNavigator</p>
                <p className="text-xs text-brand-slate/40 max-w-sm">
                  The global gold standard in secure, architected visa processing and immigration navigation.
                </p>
              </div>
              <div className="text-center md:text-right text-xs text-brand-slate/40">
                <p>&copy; {new Date().getFullYear()} VisaNavigator Global. All rights reserved.</p>
                <div className="flex gap-4 mt-3 justify-center md:justify-end font-bold text-brand-slate">
                   <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> 99.8% Success Rate</span>
                   <span>ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>);
};

export default TrustSecurityCenter;