import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import CountryHero from './components/CountryHero';
import VisaTypeCard from './components/VisaTypeCard';
import AnimatedTimeline from './components/AnimatedTimeline';
import RequirementsSection from './components/RequirementsSection';
import TestimonialCard from './components/TestimonialCard';
import FAQSection from './components/FAQSection';
import EmbassyInfoCard from './components/EmbassyInfoCard';
import PolicyUpdates from './components/PolicyUpdates';
import SimilarDestinations from './components/SimilarDestinations';
import StickySidebar from './components/StickySidebar';
import Icon from '../../components/AppIcon';
import { Country, Currency, VisaType } from './types';

const CountryDetailPages = () => {
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    code: 'USD',
    symbol: '$',
    rate: 1
  });

  const mockCountry: Country = {
    id: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    heroImage: "https://images.unsplash.com/photo-1569521862953-e999a7f8b1e5",
    heroImageAlt: 'Aerial view of New York City skyline with Empire State Building and Manhattan skyscrapers at sunset',
    tagline: 'Land of Opportunities',
    description: 'Experience the American dream with our streamlined visa application process. From tourist visas to work permits, we handle everything with 99.8% success rate.',
    visaTypes: [
    {
      id: 'b1-b2',
      name: 'B-1/B-2 Tourist Visa',
      description: 'Perfect for tourism, business meetings, or visiting family. Valid for up to 10 years with multiple entries.',
      duration: 'Up to 10 years',
      price: 299,
      processingTime: '15-20 business days',
      icon: 'Plane'
    },
    {
      id: 'h1b',
      name: 'H-1B Work Visa',
      description: 'For skilled professionals seeking employment in the US. Includes premium processing options.',
      duration: '3 years (renewable)',
      price: 899,
      processingTime: '3-6 months',
      icon: 'Briefcase'
    },
    {
      id: 'f1',
      name: 'F-1 Student Visa',
      description: 'Study at accredited US institutions. Includes work authorization options during and after studies.',
      duration: 'Duration of study',
      price: 499,
      processingTime: '4-8 weeks',
      icon: 'GraduationCap'
    },
    {
      id: 'k1',
      name: 'K-1 Fiancé Visa',
      description: 'For foreign nationals engaged to US citizens. Includes adjustment of status support.',
      duration: '90 days to marry',
      price: 1299,
      processingTime: '6-9 months',
      icon: 'Heart'
    }],

    processingTime: '15-20 business days',
    successRate: 99.8,
    pricing: {
      governmentFee: 160,
      serviceFee: 139,
      totalFee: 299,
      currency: 'USD',
      refundPolicy: '100% government fee refund if visa is rejected'
    },
    requirements: [
    {
      id: 'req1',
      category: 'Identity Documents',
      title: 'Valid Passport',
      description: 'Passport must be valid for at least 6 months beyond your intended stay',
      mandatory: true,
      icon: 'FileText'
    },
    {
      id: 'req2',
      category: 'Identity Documents',
      title: 'Passport-size Photos',
      description: '2 recent color photographs (2x2 inches) with white background',
      mandatory: true,
      icon: 'Camera'
    },
    {
      id: 'req3',
      category: 'Financial Documents',
      title: 'Bank Statements',
      description: 'Last 6 months bank statements showing sufficient funds',
      mandatory: true,
      icon: 'CreditCard'
    },
    {
      id: 'req4',
      category: 'Financial Documents',
      title: 'Employment Letter',
      description: 'Letter from employer confirming employment and salary',
      mandatory: true,
      icon: 'Building2'
    },
    {
      id: 'req5',
      category: 'Travel Documents',
      title: 'Travel Itinerary',
      description: 'Flight bookings and accommodation reservations',
      mandatory: false,
      icon: 'MapPin'
    },
    {
      id: 'req6',
      category: 'Travel Documents',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance covering medical emergencies',
      mandatory: false,
      icon: 'Shield'
    },
    {
      id: 'req7',
      category: 'Supporting Documents',
      title: 'Purpose of Visit Letter',
      description: 'Detailed letter explaining the purpose of your visit',
      mandatory: true,
      icon: 'Mail'
    },
    {
      id: 'req8',
      category: 'Supporting Documents',
      title: 'Previous Visa Copies',
      description: 'Copies of previous US visas if applicable',
      mandatory: false,
      icon: 'Copy'
    }],

    timeline: [
    {
      id: 'step1',
      step: 1,
      title: 'Document Submission',
      description: 'Upload all required documents through our secure portal. Our AI system validates documents instantly.',
      duration: '1-2 days',
      status: 'completed',
      icon: 'Upload'
    },
    {
      id: 'step2',
      step: 2,
      title: 'Application Review',
      description: 'Our visa experts review your application for completeness and accuracy. We contact you if any clarifications needed.',
      duration: '2-3 days',
      status: 'completed',
      icon: 'FileSearch'
    },
    {
      id: 'step3',
      step: 3,
      title: 'Embassy Submission',
      description: 'We submit your application to the US Embassy with all supporting documents and schedule your interview.',
      duration: '3-5 days',
      status: 'current',
      icon: 'Send'
    },
    {
      id: 'step4',
      step: 4,
      title: 'Interview Preparation',
      description: 'Receive comprehensive interview preparation guide and mock interview session with our experts.',
      duration: '1 week',
      status: 'upcoming',
      icon: 'MessageSquare'
    },
    {
      id: 'step5',
      step: 5,
      title: 'Embassy Interview',
      description: 'Attend your scheduled interview at the US Embassy. We provide real-time support via WhatsApp.',
      duration: '1 day',
      status: 'upcoming',
      icon: 'Users'
    },
    {
      id: 'step6',
      step: 6,
      title: 'Visa Processing',
      description: 'Embassy processes your visa application. Track status in real-time through our dashboard.',
      duration: '5-10 days',
      status: 'upcoming',
      icon: 'Clock'
    },
    {
      id: 'step7',
      step: 7,
      title: 'Passport Collection',
      description: 'Collect your passport with visa stamp. We arrange courier delivery to your doorstep.',
      duration: '2-3 days',
      status: 'upcoming',
      icon: 'Package'
    }],

    testimonials: [
    {
      id: 'test1',
      name: 'Sarah Johnson',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18811c304-1763296452128.png",
      avatarAlt: 'Professional woman with blonde hair in business attire smiling at camera',
      country: 'United Kingdom',
      visaType: 'B-1/B-2 Tourist Visa',
      rating: 5,
      date: 'December 15, 2024',
      content: 'VisaFlow Pro made my US visa application incredibly smooth. The document checklist was comprehensive, and their team guided me through every step. Got my 10-year visa approved in just 18 days!',
      image: "https://images.unsplash.com/photo-1683222493311-c863a2075c55",
      imageAlt: 'Woman holding US visa approval letter standing in front of American flag',
      processingTime: '18 days'
    },
    {
      id: 'test2',
      name: 'Rajesh Kumar',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_102ac5f98-1763293351071.png",
      avatarAlt: 'Indian man in formal shirt with glasses smiling professionally',
      country: 'India',
      visaType: 'H-1B Work Visa',
      rating: 5,
      date: 'November 28, 2024',
      content: 'The H-1B process seemed daunting, but VisaFlow Pro handled everything professionally. Their interview preparation was excellent, and the real-time tracking kept me informed throughout. Highly recommend!',
      processingTime: '4 months'
    },
    {
      id: 'test3',
      name: 'Maria Garcia',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_169d4bcc8-1763300337623.png",
      avatarAlt: 'Hispanic woman with dark hair in casual attire smiling warmly',
      country: 'Mexico',
      visaType: 'F-1 Student Visa',
      rating: 5,
      date: 'October 10, 2024',
      content: 'As an international student, getting my F-1 visa was stress-free with VisaFlow Pro. They helped me understand all requirements and prepared me well for the interview. Now studying at my dream university!',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1acd62d09-1765093869028.png",
      imageAlt: 'Student holding acceptance letter on university campus with backpack',
      processingTime: '6 weeks'
    }],

    faqs: [
    {
      id: 'faq1',
      question: 'How long does the US visa application process take?',
      answer: 'The processing time varies by visa type. Tourist visas (B-1/B-2) typically take 15-20 business days, while work visas (H-1B) can take 3-6 months. We provide real-time updates throughout the process and offer premium processing options for faster turnaround.',
      category: 'Processing Time'
    },
    {
      id: 'faq2',
      question: 'What is your success rate for US visa applications?',
      answer: 'We maintain a 99.8% success rate for US visa applications. Our expert team reviews every application thoroughly before submission, and we provide comprehensive interview preparation to maximize your chances of approval.',
      category: 'Success Rate'
    },
    {
      id: 'faq3',
      question: 'What happens if my visa application is rejected?',
      answer: 'In the rare event of rejection, we provide a 100% refund of government fees as per our guarantee. Additionally, we analyze the rejection reasons and help you reapply with a stronger application at no extra service charge.',
      category: 'Refund Policy'
    },
    {
      id: 'faq4',
      question: 'Do I need to visit the embassy in person?',
      answer: 'Yes, most US visa types require an in-person interview at the embassy. However, we handle all document submissions and schedule your interview at a convenient time. We also provide comprehensive interview preparation and real-time support on interview day.',
      category: 'Embassy Interview'
    },
    {
      id: 'faq5',
      question: 'Can I track my application status in real-time?',
      answer: 'Absolutely! Our live tracking dashboard provides real-time updates on your application status. You will receive notifications at every stage, from document submission to visa approval. You can also chat with our support team anytime.',
      category: 'Application Tracking'
    },
    {
      id: 'faq6',
      question: 'What documents do I need for a US tourist visa?',
      answer: 'Required documents include a valid passport, passport-size photos, bank statements (last 6 months), employment letter, travel itinerary, and purpose of visit letter. Our document checklist provides detailed specifications for each requirement.',
      category: 'Required Documents'
    },
    {
      id: 'faq7',
      question: 'How much does a US visa cost?',
      answer: 'The total cost includes government fees ($160) and our service fee ($139), totaling $299 for tourist visas. Work visas and other categories have different pricing. We support multiple currencies and provide transparent pricing with no hidden charges.',
      category: 'Pricing'
    },
    {
      id: 'faq8',
      question: 'Can you help with visa extensions or renewals?',
      answer: 'Yes, we assist with visa extensions and renewals. The process is often simpler than initial applications, and we handle all paperwork and submissions. Contact our team for personalized guidance on your specific situation.',
      category: 'Extensions & Renewals'
    }],

    embassyInfo: {
      name: 'Embassy of the United States',
      address: '24 Grosvenor Square, Mayfair, London W1K 6AH, United Kingdom',
      phone: '+44 20 7499 9000',
      email: 'support@usembassy.gov',
      website: 'https://uk.usembassy.gov',
      workingHours: 'Monday - Friday: 8:30 AM - 5:30 PM (Closed on US and UK holidays)',
      latitude: 51.5129,
      longitude: -0.1509
    },
    recentUpdates: [
    {
      id: 'update1',
      title: 'Extended Visa Validity Period',
      date: 'December 20, 2024',
      description: 'Tourist visas now valid for 10 years instead of 5 years for eligible applicants from select countries.',
      impact: 'positive',
      icon: 'TrendingUp'
    },
    {
      id: 'update2',
      title: 'New Interview Waiver Program',
      date: 'December 10, 2024',
      description: 'Certain visa renewal applicants may qualify for interview waiver, reducing processing time significantly.',
      impact: 'positive',
      icon: 'CheckCircle'
    },
    {
      id: 'update3',
      title: 'Updated Financial Requirements',
      date: 'November 25, 2024',
      description: 'Minimum bank balance requirements increased for tourist visa applicants to ensure sufficient travel funds.',
      impact: 'neutral',
      icon: 'DollarSign'
    },
    {
      id: 'update4',
      title: 'Enhanced Security Screening',
      date: 'November 15, 2024',
      description: 'Additional security checks implemented for certain visa categories, may extend processing time by 5-7 days.',
      impact: 'neutral',
      icon: 'Shield'
    },
    {
      id: 'update5',
      title: 'Digital Document Submission',
      date: 'October 30, 2024',
      description: 'All supporting documents can now be submitted digitally, eliminating need for physical document courier.',
      impact: 'positive',
      icon: 'Upload'
    },
    {
      id: 'update6',
      title: 'Holiday Season Delays',
      date: 'December 1, 2024',
      description: 'Embassy processing may be slower during December holidays. Apply early to avoid delays.',
      impact: 'negative',
      icon: 'AlertCircle'
    }],

    similarDestinations: [
    {
      id: 'canada',
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      image: "https://images.unsplash.com/photo-1657065155756-69df7b3d75e7",
      imageAlt: 'Toronto CN Tower skyline with modern buildings reflected in Lake Ontario at dusk',
      processingTime: '10-15 days',
      successRate: 98.5,
      price: 249
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      code: 'GB',
      flag: '🇬🇧',
      image: "https://images.unsplash.com/photo-1671890217001-fadd792eb660",
      imageAlt: 'London Big Ben clock tower and Westminster Bridge over Thames River at sunset',
      processingTime: '15-20 days',
      successRate: 97.8,
      price: 279
    },
    {
      id: 'australia',
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      image: "https://images.unsplash.com/photo-1671606359907-9c5f914b9789",
      imageAlt: 'Sydney Opera House with Harbour Bridge in background on sunny day',
      processingTime: '20-25 days',
      successRate: 96.9,
      price: 299
    },
    {
      id: 'schengen',
      name: 'Schengen Area',
      code: 'EU',
      flag: '🇪🇺',
      image: "https://images.unsplash.com/photo-1724472538350-1fa84d061929",
      imageAlt: 'Eiffel Tower in Paris with Seine River and historic buildings at golden hour',
      processingTime: '15-20 days',
      successRate: 98.2,
      price: 269
    }],

    stats: {
      totalApplications: 12450,
      averageProcessingDays: 18,
      approvalRate: 99.8,
      rejectionReasons: [
      {
        reason: 'Insufficient financial documents',
        percentage: 35,
        prevention: 'Provide 6 months bank statements with consistent balance'
      },
      {
        reason: 'Incomplete application forms',
        percentage: 28,
        prevention: 'Use our AI-powered form validator before submission'
      },
      {
        reason: 'Weak ties to home country',
        percentage: 22,
        prevention: 'Include employment letter, property documents, family ties proof'
      },
      {
        reason: 'Poor interview performance',
        percentage: 15,
        prevention: 'Complete our comprehensive interview preparation program'
      }]

    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in applying for a ${mockCountry.name} visa. Can you help me with the process?`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleApplyClick = () => {
    navigate('/application-portal');
  };

  const handleVisaTypeApply = (visaType: VisaType) => {
    navigate('/application-portal', { state: { visaType, country: mockCountry } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <CountryHero country={mockCountry} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8 space-y-8 md:space-y-12 lg:space-y-16">
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 md:mb-12">
                  {/* Heading in Deep Midnight Blue */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
                    Available Visa Types
                  </h2>
                  {/* Subtitle in Steel Blue / Slate */}
                  <p className="text-sm md:text-base lg:text-lg text-brand-slate">
                    Choose the visa type that best suits your travel purpose
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {mockCountry.visaTypes.map((visaType, index) =>
                  <VisaTypeCard
                    key={visaType.id}
                    visaType={visaType}
                    index={index}
                    onApply={handleVisaTypeApply} />
                  )}
                </div>
              </section>

              <section>
                <AnimatedTimeline steps={mockCountry.timeline} />
              </section>

              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
                    Success Stories
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-brand-slate">
                    Real experiences from travelers who got their visas approved
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {mockCountry.testimonials.map((testimonial, index) =>
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    index={index} />
                  )}
                </div>
              </section>

              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-brand-midnight mb-3 md:mb-4">
                    Rejection Prevention Guide
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-brand-slate">
                    Learn from common rejection reasons and how to avoid them
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {mockCountry.stats.rejectionReasons.map((reason, index) =>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    /* Using Slate for the prevention card background */
                    className="bg-brand-slate/[0.03] border border-brand-slate/20 rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-md">

                      <div className="flex items-start gap-3 mb-3">
                        {/* Bronze Icon for heritage/caution feel */}
                        <div className="w-10 h-10 rounded-lg bg-brand-bronze/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="AlertCircle" size={20} className="text-brand-bronze" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm md:text-base font-bold text-brand-midnight mb-1 line-clamp-2">
                            {reason.reason}
                          </h3>
                          <p className="text-xs font-semibold text-brand-bronze">{reason.percentage}% of rejections</p>
                        </div>
                      </div>
                      {/* Success Box using Champagne Gold background tint */}
                      <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <Icon name="Lightbulb" size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                          <p className="text-xs md:text-sm text-brand-midnight/80">
                            <span className="font-bold text-brand-gold">Prevention: </span>
                            {reason.prevention}
                          </p>
                        </div>
                      </div>
                  </motion.div>
                  )}
                </div>
              </section>

              <section>
                <EmbassyInfoCard embassyInfo={mockCountry.embassyInfo} />
              </section>
            </div>

            <div className="lg:col-span-4">
              <StickySidebar
                country={mockCountry}
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
                onWhatsAppClick={handleWhatsAppClick}
                onApplyClick={handleApplyClick} />
            </div>
          </div>
        </div>

        <RequirementsSection requirements={mockCountry.requirements} />
        <PolicyUpdates updates={mockCountry.recentUpdates} />
        <FAQSection faqs={mockCountry.faqs} />
        <SimilarDestinations destinations={mockCountry.similarDestinations} />

        {/* CTA Section using Deep Midnight Blue and Champagne Gold accents */}
        <div className="bg-brand-slate/10 text-white py-8 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>

              <Icon name="Shield" size={48} className="text-brand-gold mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold mb-4">
                Ready to Start Your Application?
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-brand-slate/30 mb-6 md:mb-8 text-slate-300">
                Join 12,450+ travelers who trusted us with their {mockCountry.name} visa applications
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleApplyClick}
                  /* High-contrast Gold Button for primary action */
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-brand-gold text-brand-midnight rounded-lg font-bold text-sm md:text-base hover:bg-brand-gold/90 transition-all shadow-lg flex items-center justify-center gap-2">
                  <Icon name="FileText" size={20} />
                  <span>Start Application</span>
                  <Icon name="ArrowRight" size={20} />
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  /* Professional Slate Outline for secondary action */
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-brand-gold text-brand-midnight rounded-lg font-bold text-sm md:text-base hover:bg-brand-gold/90 transition-all shadow-lg flex items-center justify-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  <span>WhatsApp Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden h-20" />
      </main>
    </div>);
};

export default CountryDetailPages;