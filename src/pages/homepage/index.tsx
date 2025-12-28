import { useState } from 'react';
import Header from '../../components/Header';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import FeaturedDestinations from './components/FeaturedDestinations';
import ProcessTimeline from './components/ProcessTimeline';
import TestimonialCarousel from './components/TestimonialCarousel';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import { Testimonial, TrustMetric, ProcessStep, FeaturedDestination, SearchSuggestion } from './types/indes';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchSuggestions: SearchSuggestion[] = [
  {
    country: 'United States',
    code: 'US',
    flag: '🇺🇸',
    visaTypes: ['Tourist', 'Business', 'Student'],
    processingTime: '15-30 days'
  },
  {
    country: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    visaTypes: ['Tourist', 'Business', 'Work'],
    processingTime: '10-20 days'
  },
  {
    country: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    visaTypes: ['Tourist', 'Study', 'Work'],
    processingTime: '20-40 days'
  },
  {
    country: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    visaTypes: ['Tourist', 'Work', 'Student'],
    processingTime: '15-25 days'
  },
  {
    country: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    visaTypes: ['Schengen', 'Business', 'Student'],
    processingTime: '10-15 days'
  },
  {
    country: 'France',
    code: 'FR',
    flag: '🇫🇷',
    visaTypes: ['Schengen', 'Tourist', 'Business'],
    processingTime: '10-15 days'
  },
  {
    country: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    visaTypes: ['Tourist', 'Business', 'Work'],
    processingTime: '5-10 days'
  },
  {
    country: 'Singapore',
    code: 'SG',
    flag: '🇸🇬',
    visaTypes: ['Tourist', 'Business', 'Work'],
    processingTime: '3-5 days'
  }];


  const trustMetrics: TrustMetric[] = [
  {
    id: '1',
    label: 'Success Rate',
    value: '99.8%',
    icon: 'TrendingUp',
    description: 'Industry-leading approval rate'
  },
  {
    id: '2',
    label: 'Applications Processed',
    value: '10,000+',
    icon: 'Users',
    description: 'Trusted by travelers worldwide'
  },
  {
    id: '3',
    label: 'Average Processing',
    value: '12 Days',
    icon: 'Clock',
    description: 'Faster than industry average'
  },
  {
    id: '4',
    label: 'Customer Satisfaction',
    value: '4.9/5',
    icon: 'Star',
    description: 'Based on 2,500+ reviews'
  }];


  const featuredDestinations: FeaturedDestination[] = [
  {
    id: '1',
    country: 'United States',
    code: 'US',
    flag: '🇺🇸',
    image: "https://images.unsplash.com/photo-1569521862953-e999a7f8b1e5",
    alt: 'Aerial view of New York City skyline with Empire State Building and Manhattan skyscrapers at sunset',
    visaTypes: ['Tourist B1/B2', 'Business', 'Student F1'],
    processingTime: '15-30 days',
    successRate: 98,
    startingPrice: 299,
    currency: '$',
    popular: true
  },
  {
    id: '2',
    country: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    image: "https://images.unsplash.com/photo-1671890217001-fadd792eb660",
    alt: 'Iconic Big Ben clock tower and Westminster Palace along Thames River in London during golden hour',
    visaTypes: ['Tourist', 'Business', 'Work Tier 2'],
    processingTime: '10-20 days',
    successRate: 97,
    startingPrice: 249,
    currency: '£',
    popular: true
  },
  {
    id: '3',
    country: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    image: "https://images.unsplash.com/photo-1714228719117-d924ac838c9b",
    alt: 'Stunning turquoise waters of Lake Louise surrounded by snow-capped Rocky Mountains in Banff National Park',
    visaTypes: ['Tourist eTA', 'Study Permit', 'Work Permit'],
    processingTime: '20-40 days',
    successRate: 96,
    startingPrice: 199,
    currency: '$',
    popular: false
  },
  {
    id: '4',
    country: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    image: "https://images.unsplash.com/photo-1604750228184-0b7b53758919",
    alt: 'Sydney Opera House with its distinctive white sail-shaped shells against harbor waters and blue sky',
    visaTypes: ['Tourist', 'Work Holiday', 'Student'],
    processingTime: '15-25 days',
    successRate: 98,
    startingPrice: 279,
    currency: '$',
    popular: true
  },
  {
    id: '5',
    country: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    image: "https://images.unsplash.com/photo-1583516660004-3214b1ee5968",
    alt: 'Historic Brandenburg Gate illuminated at night with neoclassical columns in Berlin city center',
    visaTypes: ['Schengen', 'Business', 'Student'],
    processingTime: '10-15 days',
    successRate: 97,
    startingPrice: 189,
    currency: '€',
    popular: false
  },
  {
    id: '6',
    country: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    image: "https://images.unsplash.com/photo-1685607619502-70973b89c496",
    alt: 'Mount Fuji snow-capped peak with cherry blossom trees in full bloom in foreground during spring season',
    visaTypes: ['Tourist', 'Business', 'Work'],
    processingTime: '5-10 days',
    successRate: 99,
    startingPrice: 159,
    currency: '¥',
    popular: true
  }];


  const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: 'Choose Your Destination',
    description: 'Search and select your destination country from our comprehensive list. View detailed visa requirements, processing times, and success rates for your chosen destination.',
    icon: 'Globe',
    duration: '2 minutes'
  },
  {
    id: '2',
    title: 'Complete Application',
    description: 'Fill out our streamlined application form and upload required documents. Our intelligent system validates your information in real-time to ensure accuracy and completeness.',
    icon: 'FileText',
    duration: '15-20 minutes'
  },
  {
    id: '3',
    title: 'Expert Review',
    description: 'Our visa specialists review your application thoroughly, checking for any issues or missing information. We ensure your application meets all embassy requirements before submission.',
    icon: 'UserCheck',
    duration: '1-2 business days'
  },
  {
    id: '4',
    title: 'Track & Receive',
    description: 'Monitor your application status in real-time through our live tracking dashboard. Receive instant notifications at every stage until your visa is approved and delivered.',
    icon: 'Package',
    duration: 'Varies by country'
  }];


  const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'United States',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb6cf439-1763299224286.png",
    alt: 'Professional woman with blonde hair wearing blue blazer smiling at camera in modern office setting',
    rating: 5,
    comment: 'VisaFlow Pro made my US visa application incredibly smooth. The real-time tracking feature kept me informed throughout the process, and their expert team answered all my questions promptly. I received my visa in just 18 days!',
    visaType: 'Tourist B1/B2',
    processingDays: 18,
    date: 'December 2024'
  },
  {
    id: '2',
    name: 'Michael Chen',
    country: 'Canada',
    avatar: "https://images.unsplash.com/photo-1665111912062-87bde7daedc7",
    alt: 'Young Asian man with glasses wearing casual shirt smiling confidently in outdoor urban environment',
    rating: 5,
    comment: 'I was worried about my study permit application, but VisaFlow Pro handled everything professionally. Their document checklist was comprehensive, and the WhatsApp support was incredibly helpful. Highly recommended for students!',
    visaType: 'Study Permit',
    processingDays: 35,
    date: 'November 2024'
  },
  {
    id: '3',
    name: 'Emma Williams',
    country: 'United Kingdom',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_177386fdc-1763300171982.png",
    alt: 'Elegant woman with brown hair in professional attire smiling warmly in contemporary office space',
    rating: 5,
    comment: 'The 100% government fee refund guarantee gave me peace of mind. The entire process was transparent, and I could track every step. My UK business visa was approved without any issues. Excellent service!',
    visaType: 'Business Visa',
    processingDays: 14,
    date: 'December 2024'
  },
  {
    id: '4',
    name: 'David Martinez',
    country: 'Australia',
    avatar: "https://images.unsplash.com/photo-1706381063750-cc97ac6a4ba8",
    alt: 'Friendly man with dark hair wearing casual polo shirt smiling broadly in bright outdoor setting',
    rating: 5,
    comment: 'VisaFlow Pro exceeded my expectations. The application process was straightforward, and their team caught a potential issue with my documents before submission. Their attention to detail is impressive!',
    visaType: 'Work Holiday Visa',
    processingDays: 21,
    date: 'November 2024'
  }];


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    window.location.href = '/country-detail-pages';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection
          onSearch={handleSearch}
          suggestions={searchSuggestions} />

        
        <TrustBar metrics={trustMetrics} />
        
        <FeaturedDestinations destinations={featuredDestinations} />
        
        <ProcessTimeline steps={processSteps} />
        
        <TestimonialCarousel testimonials={testimonials} />
        
        <GuaranteeSection />
      </main>

      <Footer />
    </div>);

};

export default Homepage;