import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ApplicationCard from './components/ApplicationCard';
import TimelineView from './components/TimelineView';
import StatusUpdatesFeed from './components/StatusUpdatesFeed';
import DocumentStatusCard from './components/DocumentStatusCard';
import ProcessingMetricsCard from './components/ProcessingMetricsCard';
import NotificationSettings from './components/NotificationSettings';
import {
  Application,
  TimelineStage,
  StatusUpdate,
  DocumentStatus,
  ProcessingMetrics,
  NotificationPreferences } from
'./types';

const LiveTrackingDashboard = () => {
  const [selectedApplicationId, setSelectedApplicationId] = useState<string>('APP-2024-001');
  const [activeTab, setActiveTab] = useState<'timeline' | 'updates' | 'documents' | 'metrics' | 'settings'>('timeline');
  const [notificationPreferences, setNotificationPreferences] = useState<NotificationPreferences>({
    email: true,
    sms: true,
    whatsapp: true,
    pushNotifications: true
  });

  const mockApplications: Application[] = [
  {
    id: 'APP-2024-001',
    applicationNumber: 'US-VISA-2024-12345',
    country: 'United States',
    countryCode: 'US',
    visaType: 'B1/B2 Tourist Visa',
    applicantName: 'John Smith',
    submissionDate: new Date('2024-12-15'),
    estimatedCompletion: new Date('2025-01-20'),
    currentStage: 'Government Processing',
    status: 'in-progress',
    progress: 65,
    flagUrl: "https://images.unsplash.com/photo-1665075144427-f32bd8f44c55",
    flagAlt: 'United States flag with red and white stripes and blue canton with white stars'
  },
  {
    id: 'APP-2024-002',
    applicationNumber: 'UK-VISA-2024-67890',
    country: 'United Kingdom',
    countryCode: 'GB',
    visaType: 'Standard Visitor Visa',
    applicantName: 'John Smith',
    submissionDate: new Date('2024-12-10'),
    estimatedCompletion: new Date('2025-01-15'),
    currentStage: 'Document Review',
    status: 'additional-docs-required',
    progress: 45,
    flagUrl: "https://images.unsplash.com/photo-1590407499464-be68a7d8ec88",
    flagAlt: 'United Kingdom flag with red, white and blue Union Jack design'
  },
  {
    id: 'APP-2024-003',
    applicationNumber: 'CA-VISA-2024-11223',
    country: 'Canada',
    countryCode: 'CA',
    visaType: 'Temporary Resident Visa',
    applicantName: 'John Smith',
    submissionDate: new Date('2024-11-20'),
    estimatedCompletion: new Date('2024-12-25'),
    currentStage: 'Approved',
    status: 'approved',
    progress: 100,
    flagUrl: "https://images.unsplash.com/photo-1581465304683-f55a09acac8c",
    flagAlt: 'Canadian flag with red borders and white center featuring red maple leaf'
  }];


  const mockTimelineStages: TimelineStage[] = [
  {
    id: 'stage-1',
    title: 'Application Submitted',
    description: 'Your visa application has been successfully submitted to our processing team.',
    status: 'completed',
    timestamp: new Date('2024-12-15T10:30:00'),
    icon: 'CheckCircle2',
    details: [
    'Application form validated',
    'Payment confirmed',
    'Initial document review completed']

  },
  {
    id: 'stage-2',
    title: 'Document Verification',
    description: 'Our team is verifying all submitted documents for completeness and accuracy.',
    status: 'completed',
    timestamp: new Date('2024-12-16T14:20:00'),
    icon: 'FileCheck',
    details: [
    'Passport verified',
    'Financial documents reviewed',
    'Supporting documents validated']

  },
  {
    id: 'stage-3',
    title: 'Government Processing',
    description: 'Your application is currently being processed by the US Embassy. This stage typically takes 15-20 business days.',
    status: 'in-progress',
    timestamp: new Date('2024-12-18T09:15:00'),
    icon: 'Clock',
    details: [
    'Application forwarded to embassy',
    'Background verification in progress',
    'Interview scheduling pending']

  },
  {
    id: 'stage-4',
    title: 'Interview Scheduled',
    description: 'Your visa interview will be scheduled once the initial processing is complete.',
    status: 'pending',
    estimatedDate: new Date('2025-01-10'),
    icon: 'Calendar',
    details: [
    'Interview date will be confirmed via email',
    'Prepare required documents',
    'Review interview guidelines']

  },
  {
    id: 'stage-5',
    title: 'Final Decision',
    description: 'The embassy will make the final decision on your visa application.',
    status: 'pending',
    estimatedDate: new Date('2025-01-20'),
    icon: 'Award',
    details: [
    'Decision communicated within 5 business days',
    'Passport returned with visa stamp',
    'Travel authorization granted']

  }];


  const mockStatusUpdates: StatusUpdate[] = [
  {
    id: 'update-1',
    message: 'Your application has been forwarded to the US Embassy for processing. Current processing time is 18 days.',
    timestamp: new Date('2024-12-23T10:30:00'),
    type: 'info',
    isFromSystem: true,
    icon: 'Info'
  },
  {
    id: 'update-2',
    message: 'Background verification is in progress. This is a standard procedure and typically takes 5-7 business days.',
    timestamp: new Date('2024-12-22T15:45:00'),
    type: 'info',
    isFromSystem: true,
    icon: 'Shield'
  },
  {
    id: 'update-3',
    message: 'All submitted documents have been verified and approved. Your application is progressing smoothly.',
    timestamp: new Date('2024-12-20T11:20:00'),
    type: 'success',
    isFromSystem: true,
    icon: 'CheckCircle2'
  },
  {
    id: 'update-4',
    message: 'Thank you for the quick response! I have uploaded the additional bank statement as requested.',
    timestamp: new Date('2024-12-19T16:30:00'),
    type: 'info',
    isFromSystem: false,
    icon: 'User'
  },
  {
    id: 'update-5',
    message: 'We need an updated bank statement from the last 3 months. Please upload it in the documents section.',
    timestamp: new Date('2024-12-19T14:15:00'),
    type: 'warning',
    isFromSystem: true,
    icon: 'AlertCircle'
  }];


  const mockDocuments: DocumentStatus[] = [
  {
    id: 'doc-1',
    name: 'Passport Copy',
    status: 'verified',
    uploadDate: new Date('2024-12-15'),
    expiryDate: new Date('2028-06-15')
  },
  {
    id: 'doc-2',
    name: 'Bank Statement',
    status: 'verified',
    uploadDate: new Date('2024-12-19'),
    expiryDate: new Date('2025-03-19')
  },
  {
    id: 'doc-3',
    name: 'Employment Letter',
    status: 'verified',
    uploadDate: new Date('2024-12-15'),
    expiryDate: new Date('2025-06-15')
  },
  {
    id: 'doc-4',
    name: 'Travel Insurance',
    status: 'pending',
    uploadDate: new Date('2024-12-15')
  },
  {
    id: 'doc-5',
    name: 'Hotel Booking',
    status: 'expired',
    uploadDate: new Date('2024-12-10'),
    expiryDate: new Date('2024-12-20'),
    rejectionReason: 'The booking confirmation has expired. Please provide an updated booking that covers your intended travel dates.'
  }];


  const mockMetrics: ProcessingMetrics = {
    averageProcessingTime: 25,
    yourProcessingTime: 18,
    percentageFaster: 28,
    applicationsAhead: 142
  };

  const selectedApplication = mockApplications.find((app) => app.id === selectedApplicationId);

  const handleDocumentResubmit = (documentId: string) => {
    console.log('Resubmitting document:', documentId);
  };

  const handleSaveNotificationPreferences = (preferences: NotificationPreferences) => {
    setNotificationPreferences(preferences);
    console.log('Notification preferences saved:', preferences);
  };

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/?text=Hello, I need help with my visa application', '_blank');
  };

  const tabs = [
  { id: 'timeline' as const, label: 'Timeline', icon: 'GitBranch' },
  { id: 'updates' as const, label: 'Updates', icon: 'MessageSquare' },
  { id: 'documents' as const, label: 'Documents', icon: 'FileText' },
  { id: 'metrics' as const, label: 'Metrics', icon: 'BarChart3' },
  { id: 'settings' as const, label: 'Settings', icon: 'Settings' }];


  return (
    <>
      <Helmet>
        <title>Live Tracking Dashboard - VisaNavigator</title>
        <meta
          name="description"
          content="Track your visa application in real-time with transparent updates, timeline visualization, and instant expert support. 99.8% success rate." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <div className="w-full mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
            <div className="mb-6 md:mb-8 lg:mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-midnight mb-2">
                Application Tracking Dashboard
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-brand-slate line-clamp-2">
                Monitor your visa applications in real-time with complete transparency
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-4 space-y-4 md:space-y-6">
                <div className="w-full min-w-0 p-4 md:p-6 rounded-xl border border-brand-slate/10 bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg md:text-xl text-brand-midnight">
                      Your Applications
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium whitespace-nowrap">
                      <Icon name="FileText" size={14} />
                      <span>{mockApplications.length}</span>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {mockApplications.map((application) =>
                    <ApplicationCard
                      key={application.id}
                      application={application}
                      isSelected={application.id === selectedApplicationId}
                      onClick={() => setSelectedApplicationId(application.id)} />

                    )}
                  </div>
                </div>

                <div className="w-full min-w-0 p-4 md:p-6 rounded-xl border border-brand-gold/20 bg-brand-midnight/[0.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Headphones" size={20} className="text-brand-gold" />
                    <h3 className="font-semibold text-base md:text-lg text-brand-midnight">
                      Need Help?
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-brand-slate mb-4 line-clamp-3">
                    Our visa experts are available 24/7 to answer your questions and provide guidance.
                  </p>

                  <div className="space-y-2">
                    <Button
                      variant="default"
                      size="default"
                      iconName="MessageCircle"
                      iconPosition="left"
                      iconSize={18}
                      fullWidth
                      onClick={handleWhatsAppSupport}
                      className="bg-success hover:bg-success/90">

                      WhatsApp Support
                    </Button>

                    <Button
                      variant="outline"
                      size="default"
                      iconName="Mail"
                      iconPosition="left"
                      iconSize={18}
                      fullWidth
                      onClick={() => window.location.href = 'mailto:support@visanavigator.com'}
                      className="border-brand-midnight text-brand-midnight hover:bg-brand-midnight/5">

                      Email Support
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                {selectedApplication &&
                <div className="w-full min-w-0 p-4 md:p-6 lg:p-8 rounded-xl border border-brand-slate/10 bg-card mb-6 md:mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-midnight line-clamp-2 mb-2">
                          {selectedApplication.country} - {selectedApplication.visaType}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-brand-slate">
                          <div className="flex items-center gap-2">
                            <Icon name="Hash" size={16} className="text-brand-gold" />
                            <span className="line-clamp-1">{selectedApplication.applicationNumber}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Calendar" size={16} className="text-brand-gold" />
                            <span className="whitespace-nowrap">
                              Est. {selectedApplication.estimatedCompletion.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-gold/10 border border-brand-gold/20">
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-sm md:text-base font-medium text-brand-gold whitespace-nowrap uppercase tracking-wider">
                          {selectedApplication.currentStage}
                        </span>
                      </div>
                    </div>

                    <div className="overflow-x-auto -mx-4 md:mx-0">
                      <div className="flex gap-2 px-4 md:px-0 pb-2 border-b border-brand-slate/10 min-w-max">
                        {tabs.map((tab) =>
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                              flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm md:text-base
                              transition-smooth whitespace-nowrap flex-shrink-0
                              ${activeTab === tab.id ?
                        'bg-brand-midnight text-white' :
                        'text-brand-slate hover:bg-brand-midnight/5'}
                            `
                        }>

                            <Icon name={tab.icon} size={18} />
                            <span>{tab.label}</span>
                          </button>
                      )}
                      </div>
                    </div>
                  </div>
                }

                <div className="w-full">
                  {activeTab === 'timeline' &&
                  <div className="w-full min-w-0 p-4 md:p-6 lg:p-8 rounded-xl border border-brand-slate/10 bg-card shadow-sm">
                      <div className="flex items-center gap-2 mb-6 md:mb-8">
                        <Icon name="GitBranch" size={20} className="text-brand-gold" />
                        <h3 className="font-semibold text-lg md:text-xl text-brand-midnight">
                          Application Timeline
                        </h3>
                      </div>
                      <TimelineView stages={mockTimelineStages} />
                    </div>
                  }

                  {activeTab === 'updates' &&
                  <div className="w-full min-w-0 p-4 md:p-6 lg:p-8 rounded-xl border border-brand-slate/10 bg-card shadow-sm">
                      <div className="flex items-center gap-2 mb-6 md:mb-8">
                        <Icon name="MessageSquare" size={20} className="text-brand-gold" />
                        <h3 className="font-semibold text-lg md:text-xl text-brand-midnight">
                          Status Updates
                        </h3>
                      </div>
                      <StatusUpdatesFeed updates={mockStatusUpdates} />
                    </div>
                  }

                  {activeTab === 'documents' &&
                  <div className="w-full min-w-0 p-4 md:p-6 lg:p-8 rounded-xl border border-brand-slate/10 bg-card shadow-sm">
                      <div className="flex items-center gap-2 mb-6 md:mb-8">
                        <Icon name="FileText" size={20} className="text-brand-gold" />
                        <h3 className="font-semibold text-lg md:text-xl text-brand-midnight">
                          Document Status
                        </h3>
                      </div>
                      <DocumentStatusCard
                      documents={mockDocuments}
                      onResubmit={handleDocumentResubmit} />

                    </div>
                  }

                  {activeTab === 'metrics' &&
                  <ProcessingMetricsCard metrics={mockMetrics} />
                  }

                  {activeTab === 'settings' &&
                  <NotificationSettings
                    preferences={notificationPreferences}
                    onSave={handleSaveNotificationPreferences} />

                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>);

};

export default LiveTrackingDashboard;