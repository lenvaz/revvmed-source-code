import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function AuthorizationPage() {
  const statistics = [
    {
      value: '500+',
      label: 'Authorizations daily',
    },
    {
      value: '1,000+',
      label: 'Prior authorization documents',
    },
  ];

  const performanceMetrics = [
    {
      value: '97%',
      label: 'Data Accuracy',
    },
    {
      value: '500,000+',
      label: 'Authorization Submitted',
    },
    {
      value: '150+',
      label: 'Expertise in health plans',
    },
  ];

  const services = [
    {
      title: "Effective Eligibility Verification",
      description: 'Cross-checking during the verification process to have an idea about the services to be covered by the insurance company.',
    },
    {
      title: 'Documentation',
      description: `${APP_NAME} helps in having a detailed and perfectly documented record of all necessary information which increases the authorization approval rate by 95%.`,
    },
    {
      title: 'Expertise Staff for authorization',
      description: 'Our authorization team make sure to understand the services and how the insurance company works to provide a successful outcome.',
    },
    {
      title: 'Impactful training & tools',
      description: `We at ${APP_NAME} understand that authorizations can be vital in day-to-day life, providing impactful and resourceful training to our team ensures that the team is ready to handle any kind of situations`,
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="Management of Authorization can be a hassle, well not for us!"
      heroDescription={`Correct coding and documenting the required procedure before the treatment is the key for timely authorization. This is often a challenging task. At ${APP_NAME}, We collect the necessary documents and file prior authorization which reduces the chances of denials.`}
      statistics={statistics}
      partnershipTitle="Authorization Approvals for 200+ Providers"
      partnershipDescription="Successfully providing Approved authorizations to 200+ providers for more than 2 decades. The complex world of DME billing can be difficult to navigate, but with the correct information and strategy, providers can achieve favorable reimbursement results. Our team gathers required documentation, submits requests to payer & follow up on the authorizations until its approved."
      performanceMetrics={performanceMetrics}
      services={services}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-2',
        partnershipGrid: 'grid-cols-1 md:grid-cols-2',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-3',
        servicesGrid: 'grid-cols-1 md:grid-cols-2'
      }}
    />
  );
}
