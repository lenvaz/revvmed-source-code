import React from 'react';
import { PayerPageLayout } from '@/components/layouts/PayerPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function PayerServicesPage() {
  const statistics = [
    { value: '200,000+', label: 'Charts yearly' },
    { value: '700,000+', label: 'Codes yearly' },
    { value: '250,000+', label: 'Charts yearly' },
  ];

  const services = [
    {
      title: 'Medical Record Retrieval',
      description: `Whether through digital or traditional methods, ${APP_NAME} offers a comprehensive and efficient, one-stop service for all your record retrieval needs.`,
      link: '/for-payer/record-retrieval'
    },
    {
      title: 'Medical Record Coding',
      description: `${APP_NAME} delivers high quality coding results that enable providers and health plans accurately capture their population risk.`,
      link: '/for-payer/medical-coding'
    },
    {
      title: 'Medical Record Abstraction',
      description: `${APP_NAME} delivers high quality abstraction results that enable providers and health plans achieve high quality scores and close care gaps.`,
      link: '/for-payer/abstraction'
    },
    {
      title: 'Reporting and Analytics',
      description: `${APP_NAME} provides comprehensive back-office data and analytical and reporting services, offering tailored solutions to handle all your data management and reporting needs.`,
      link: '/for-payer/analytics'
    },
    {
      title: 'Supplemental Services',
      description: `${APP_NAME} provides value-added supplemental services which are curated based on customer needs.`,
      link: '/for-payer/supplemental-services'
    }
  ];

  return (
    <PayerPageLayout
      heroTitle="All of your needs - to improve clinical, financial and reimbursement outcomes in one place!"
      heroDescription="Comprehensive solutions for healthcare payers to enhance quality, efficiency, and outcomes."
      statistics={statistics}
      sectionTitle="25 Years of Payer Solutions You Can Trust"
      sectionDescription="Delivering greater value, flexibility, and partnership for the last 25 years!"
      processes={services}
    />
  );
}