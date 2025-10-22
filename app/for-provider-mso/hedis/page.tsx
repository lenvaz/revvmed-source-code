import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function HedisQualityPage() {
  const statistics = [
    {
      value: '250,000+',
      label: 'Charts yearly',
    },
    {
      value: '100%',
      label: 'NCQA compliant',
    },
    {
      value: '99%',
      label: 'Accuracy Rate',
    },
  ];

  const performanceMetrics = [
    {
      value: '99%',
      label: 'Abstraction Quality Accuracy Rate',
    },
    {
      value: '100%',
      label: 'Over read for every charts',
    },
    {
      value: '100%',
      label: 'Certified Nurses',
    },
    {
      value: '100%',
      label: 'HIPPA Compliant Infrastructure',
    },
  ];

  const services = [
    {
      title: 'Medical Record Retrieval',
      description: `Whether through digital or traditional methods, ${APP_NAME} offers a comprehensive and efficient, one-stop service for all your record retrieval needs.`,
      link: '/for-provider-mso/hedis/retrieval',
    },
    {
      title: 'Medical Record Coding',
      description: `${APP_NAME} delivers high quality coding results that enable providers and health plans accurately capture their population risk.`,
      link: '/for-provider-mso/hedis/coding',
    },
    {
      title: 'Medical Record Abstraction',
      description: `${APP_NAME} delivers high quality abstraction results that enable providers and health plans achieve high quality scores and close care gaps.`,
      link: '/for-provider-mso/hedis/abstraction',
    },
    {
      title: 'Reporting and Analytics',
      description: `${APP_NAME} provides comprehensive back-office data, analytical and reporting services, offering tailored solutions to handle all your administrative, data management and reporting needs.`,
      link: '/for-provider-mso/hedis/analytics',
    },
    {
      title: 'Supplemental Services',
      description: `${APP_NAME} provides tailor made supplemental services which are curated based on customer needs.`,
      link: '/for-provider-mso/hedis/supplemental',
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="Precision and Accuracy in every Coding Transaction"
      heroDescription="Conducted by our seasoned clinical staff, our HEDIS abstraction complies with the latest NCQA Technical Specifications for hybrid general guideline and administrative measure reporting."
      statistics={statistics}
      partnershipTitle="10+ Years of HEDIS Quality Measure Expertise"
      partnershipDescription="10+ years of experience in HEDIS Star Rating/Measures helping health plans and providers improve patient outcomes and reimbursements. With our unique and flexible approach, we deliver industry-leading abstraction accuracy rates."
      performanceMetrics={performanceMetrics}
      services={services}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-3',
        partnershipGrid: 'grid-cols-1 md:grid-cols-2',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-4', // Changed from 5 to 3 columns
        servicesGrid: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' // Adjusted breakpoint for 3 columns
      }}
    />
  );
}
