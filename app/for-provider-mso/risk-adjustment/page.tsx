import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function RiskAdjustmentPage() {
  const statistics = [
    {
      value: '700,000+',
      label: 'Charts yearly',
    },
    {
      value: '200,000+',
      label: 'Charts yearly',
    },
    {
      value: '98%',
      label: 'Accuracy',
    },
  ];

  const performanceMetrics = [
    {
      value: '100%',
      label: 'Over-read for every chart',
    },
    {
      value: '100%',
      label: 'CPC, CRC, CCS certified',
    },
    {
      value: '100%',
      label: 'HIPPA Compliant Infrastructure',
    },
  ];

  const services = [
    {
      title: 'Medical Record Coding',
      description: 'Leave medical record coding to our expert coders. Our industry-leading 98%+ coding accuracy stems from our rigorous quality-control process that includes 100% over-reading for every record.',
    },
    {
      title: 'Claims, Analytics and Reporting',
      description: `${APP_NAME} provides claim back-office data, analytical and reporting services, offering tailored solutions to handle all your administrative, data management and reporting needs.`,
    },
    {
      title: 'Medical Record Retrieval',
      description: `Whether through digital or traditional methods, ${APP_NAME} offers a comprehensive and efficient, one-stop service for all your record retrieval needs.`,
    },
    {
      title: 'Supplemental Services',
      description: `${APP_NAME} provides tailor made supplemental services which are curated based on customer needs.`,
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="End to End Risk Adjustment Solutions"
      heroDescription="Make no mistake, the success of your risk adjustment program relies on error-free data to ensure that your patient's risk score accurately reflects their underlying health conditions."
      statistics={statistics}
      partnershipTitle="15+ Years of Expertise in Risk Adjustment"
      partnershipDescription="15+ years of experience in adjusting risk for providers across various risk models and programs. Expertise across Medicare, Medicaid, RADV audits and Medical. Trust our integrated, end-to-end risk adjustment solutions to capture complete data with unmatched accuracy, and help you interpret it to close gaps, and improve patient outcomes."
      performanceMetrics={performanceMetrics}
      services={services}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-3',
        partnershipGrid: 'grid-cols-1 md:grid-cols-2',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-3', // Changed from 5 to 3 columns
        servicesGrid: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' // Adjusted breakpoint for 3 columns
      }}
    />
  );
}
