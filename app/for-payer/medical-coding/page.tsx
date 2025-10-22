import React from 'react';
import { PayerPageLayout } from '@/components/layouts/PayerPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function MedicalCodingPage() {
  const statistics = [
    { value: '700,000+', label: 'Charts yearly' },
    { value: '98%', label: 'Accuracy' },
    { value: '15+', label: 'Years of experience' },
  ];

  const performanceMetrics = [
    { value: '100%', label: 'Over-read for every chart' },
    { value: '100%', label: 'CPC, CRC, CCS certified' },
    { value: '100%', label: 'HIPPA Compliant Infrastructure' },
  ];

  const processes = [
    {
      title: 'People at Core',
      description: 'We recruit top-tier talent and provide comprehensive training to our coders, ensuring they gain a deep understanding of risk adjustment coding standards as well as the specific rules and guidelines set forth by the Centers for Medicare & Medicaid Services (CMS). This expertise enables us to deliver the highest level of accuracy and compliance in every aspect of our coding process.'
    },
    {
      title: 'Client specific and Custom Coding Guidelines',
      description: `${APP_NAME} offers flexibility with coding projects, utilizing either our standard guidelines—based on AHA Coding Clinic recommendations—or custom guidelines provided by the health plan and providers.`
    },
    {
      title: 'Robust Quality Assurance',
      description: 'Our audit team consists of highly skilled quality auditors certified in quality management systems and six sigma. We use robust sampling methods, knowledge attribute analysis and effective 5-why analysis and remediation plans.'
    },
    {
      title: 'Flexible to match scale',
      description: "We'll tap into our network of experienced coders and resources that scale up and down as demand fluctuates. We complete thorough reviews quickly and correctly while providing staffing and project flexibility."
    },
  ];

  return (
    <PayerPageLayout
      heroTitle="Precision and Accuracy in every Coding Transaction"
      heroDescription={`${APP_NAME} delivers high quality coding results that enable providers and health plans accurately capture their population risk and improve clinical and financial outcomes.`}
      statistics={statistics}
      sectionTitle="15 Years of Excellence in Medical Record Coding"
      sectionDescription="15+ years of experience in medical record coding, expertise across Medicare, Medicaid, RADV audits."
      performanceMetrics={performanceMetrics}
      processes={processes}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-3',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-3',
        servicesGrid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
      }}
    />
  );
}
