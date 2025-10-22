import React from 'react';
import { PayerPageLayout } from '@/components/layouts/PayerPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function AbstractionPage() {
  const statistics = [
    { value: '250,000+', label: 'Charts yearly' },
    { value: '100%', label: 'NCQA compliant' },
    { value: '99%', label: 'Accuracy Rate' },
  ];

  const performanceMetrics = [
    { value: '99%', label: 'Abstraction Quality Accuracy Rate' },
    { value: '100%', label: 'Over read for every charts' },
    { value: '100%', label: 'Certified Nurses' },
    { value: '100%', label: 'HIPAA Compliant Infrastructure' },
  ];

  const processes = [
    {
      title: 'People at Core',
      description: 'We recruit top-tier talent and provide comprehensive training to our abstractors and nurses. The average experience of our abstractors and nurses is 3 years which enables us to deliver the highest level of accuracy and compliance in every aspect of our abstraction process.',
    },
    {
      title: 'Client specific and Custom Abstraction Guidelines',
      description: `${APP_NAME} offers flexibility with abstraction projects, utilizing either our standard guidelines or custom guidelines provided by the health plan and providers.`,
    },
    {
      title: 'Robust Quality Assurance',
      description: 'Our audit team consists of highly skilled quality auditors certified in quality management systems and six sigma. We use robust sampling methods, knowledge attribute analysis and effective 5-why analysis and remediation plans.',
    },
    {
      title: 'Flexible to match scale',
      description: "We'll tap into our network of experienced nurses and abstractors and resources that scale up and down as demand fluctuates. We complete thorough reviews quickly and correctly while providing staffing and project flexibility.",
    },
  ];

  return (
    <PayerPageLayout
      heroTitle="Precision and Accuracy in every Abstraction"
      heroDescription={`${APP_NAME} delivers high quality abstraction results that enable providers and health plans achieve high quality scores and close care gaps.`}
      statistics={statistics}
      sectionTitle="15+ Years of Excellence in Medical Record Abstraction"
      sectionDescription="15+ years of experience in medical record abstraction, expertise across Medicare, Medicaid, and commercial health plans."
      performanceMetrics={performanceMetrics}
      processes={processes}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-3',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-4',
        servicesGrid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
      }}
    />
  );
}