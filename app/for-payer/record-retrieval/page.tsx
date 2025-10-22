import React from 'react';
import { PayerPageLayout } from '@/components/layouts/PayerPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function RecordRetrievalPage() {
  const statistics = [
    { value: '250,000+', label: 'Charts yearly' },
    { value: '100%', label: 'NCQA compliant' },
    { value: '99%', label: 'Accuracy Rate' },
  ];

  const performanceMetrics = [
    { value: '99%', label: 'Retrieval Quality Accuracy Rate' },
    { value: '100%', label: 'Over read for every charts' },
    { value: '100%', label: 'Certified Staff' },
    { value: '100%', label: 'HIPAA Compliant Infrastructure' },
  ];

  const processes = [
    {
      title: 'Provider Focused Approach',
      description: 'We understand the unique challenges providers face and work closely with them to ensure smooth and efficient record retrieval. Our team is trained to minimize disruption to provider workflows while maximizing retrieval success.',
    },
    {
      title: 'Nation Wide Staffing',
      description: 'With our extensive network of trained professionals across the country, we can efficiently handle record retrieval requests in any location. This nationwide presence ensures quick turnaround times and high success rates.',
    },
    {
      title: 'Quality Control',
      description: 'Our comprehensive quality control process ensures that all retrieved records are complete, accurate, and meet the specific requirements of each request. We maintain strict quality standards throughout the retrieval process.',
    },
    {
      title: 'Wide Ranging Retrieval Methods',
      description: "Whether through digital platforms, EMR integration, or traditional methods, we adapt our approach to match provider capabilities and preferences. This flexibility ensures successful retrieval across diverse healthcare settings.",
    },
  ];

  return (
    <PayerPageLayout
      heroTitle="Comprehensive Medical Record Retrieval Services"
      heroDescription={`Whether through digital or traditional methods, ${APP_NAME} offers a comprehensive and efficient, one-stop service for all your record retrieval needs.`}
      statistics={statistics}
      sectionTitle="Expert Medical Record Retrieval Services"
      sectionDescription="Nationwide coverage with local expertise, ensuring efficient and compliant medical record retrieval for all your needs."
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