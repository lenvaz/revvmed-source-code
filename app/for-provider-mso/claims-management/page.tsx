import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function ClaimsManagementPage() {
  const statistics = [
    {
      value: '1,200,000+',
      label: 'Claims',
    },
    {
      value: '500+',
      label: 'Health care specialists',
    },
    {
      value: '50%',
      label: 'Savings on operational costs',
    },
  ];

  const performanceMetrics = [
    {
      value: '98%',
      label: 'Encounter Success Rate',
    },
    {
      value: '30+',
      label: 'IPA\'s & MSO\'s',
    },
    {
      value: '98%',
      label: 'Provider Satisfaction',
    },
  ];

  const services = [
    {
      title: 'Claims Adjudication',
      description: 'Claims Adjudication ensures that medical claims are accurate, valid and necessary. These claims are also important source of data for healthcare organizations to monitor the trends of rejections and prepare the strategies accordingly.',
    },
    {
      title: 'Insurance Eligibility & Verification',
      description: `Insurance eligibility verification is the most important and the first step in the medical billing process. ${APP_NAME}'s dedicated insurance eligibility verification team delivers a thorough verification, thereby aiding dramatic reduction of the claims\' accounts receivable cycle.`,
    },
    {
      title: 'Encounter Submissions',
      description: 'Encounter submissions are important because they help ensure accurate claim processing, reduce risk, and minimize financial impact. Our team makes sure to submit the encounters on a timely manner and also follow up on these submissions.',
    },
    {
      title: 'Credentialing',
      description: `Maintaining up-to-date credentials for a physician across all contracted payers is an ongoing endeavor that can be as time-consuming as first-time credentialing. At ${APP_NAME} we make sure to gather accurate provider information, complete the application, and verify all documentation before submitting it to the payer.`,
    },
    {
      title: 'Reporting and Analytics',
      description: `${APP_NAME} provides comprehensive back-office data, analytical and reporting services, offering tailored solutions to handle all your administrative, data management and reporting needs.`,
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="The Professional Touch for your claims with comprehensive analytics in a comprehendible format."
      heroDescription="Our expert team provides solutions that help your healthcare organization process claims efficiently and safely. We can handle claim denials and rejections, measure metrics for healthcare providers, improve efficiency for insurance companies, and help customers in the best possible manner."
      statistics={statistics}
      partnershipTitle="Simplifying Claims with Data-Driven Analytics"
      partnershipDescription="Making your claim processes as seamless as possible & elevating customer experiences."
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