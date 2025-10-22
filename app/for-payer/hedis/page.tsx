import React from 'react';
import { PayerPageLayout } from '@/components/layouts/PayerPageLayout';
import { APP_NAME } from '@/lib/constants';
import { basePath } from '@/lib/basePath';

export default function HedisPage() {
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
      description: 'We recruit top-tier talent and provide comprehensive training to our HEDIS abstractors and nurses. This average experience of our abstractors and nurses is 3 years which enables us to deliver the highest level of accuracy and compliance on every aspect of our HEDIS process.',
      link: `${basePath}/for-payer/hedis`
    },
    {
      title: 'Client specific and NCQA compliant Guidelines',
      description: `${APP_NAME} offers flexibility with quality projects, utilizing NCQA standard guidelines—or custom guidelines provided by the health plan and providers.`,
      link: `${basePath}/for-payer/hedis`
    },
    {
      title: 'Robust Quality Assurance',
      description: 'Our audit team consists of highly skilled quality auditors certified in quality management systems and six sigma. We use robust sampling methods, knowledge attribute analysis and effective 5-why analysis and remediation plans.',
      link: `${basePath}/for-payer/hedis`
    },
    {
      title: 'Flexible to match scale',
      description: "We'll tap into our network of experienced nurses and coders and resources that scale up and down as demand fluctuates. We complete thorough reviews quickly and correctly while providing staffing and project flexibility.",
      link: `${basePath}/for-payer/hedis`
    },
  ];

  return (
    <PayerPageLayout
      heroTitle="Precision and Accuracy in every Coding Transaction"
      heroDescription={`${APP_NAME} delivers success of your quality improvement programs with the proven performance of our expert clinical team and flexible, transparent technology.`}
      statistics={statistics}
      sectionTitle="HEDIS Expertise: 10+ Years of Better Outcomes"
      sectionDescription="10+ years of experience in HEDIS Star Rating/Measures helping health plans and providers improve patient outcomes and reimbursements."
      performanceMetrics={performanceMetrics}
      processes={processes}
    />
  );
}