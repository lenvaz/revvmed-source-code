import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function DMEPage() {
  const statistics = [
    {
      value: '12,000+',
      label: 'DME Orders annually',
    },
    {
      value: '100,000+',
      label: 'Authorizations monthly',
    },
    {
      value: '100+',
      label: 'Health plans',
    },
  ];

  const performanceMetrics = [
    {
      value: '96%',
      label: 'Order Success Rate',
    },
    {
      value: '20+',
      label: 'Served over DME Providers',
    },
    {
      value: '98%',
      label: 'Provider Satisfaction',
    },
    {
      value: '25%',
      label: 'Rise in revenue',
    },
    {
      value: '12M',
      label: 'Managed Orders over yearly',
    },
  ];

  const services = [
    {
      title: 'Order Management',
      description: "With over 10+years of experience in DME Order management, our team knows how important it is to deliver the DME equipment's and supplies as it is the part of your care plan.",
      link: '/for-dme/order-management',
    },
    {
      title: 'Authorization Management',
      description: `Correct coding and documenting the required procedure before the treatment is the key for timely authorization. This is often a challenging task. At ${APP_NAME}, We collect the necessary documents and file prior authorization which reduces the chances of denials.`,
      link: '/for-dme/authorization',
    },
    {
      title: 'Medical Billing Solutions',
      description: 'Our specialized team handles from completing necessary DME documentation to claims follow-up and A/R management. We are home to certified professional coders (CPC) and billers (CPB) who bring the required expertise needed to ensure faster payments, fewer errors, fewer claims denials, and reduced risk of compliance issues.',
      link: '/for-dme/medical-billing',
    },
    {
      title: 'Customer Support',
      description: 'Customer support & revenue cycle management (RCM) is a key part of the process of tracking a patient\'s interactions with a healthcare provider from start to finish. Our expertise team make sure to understand the customer, Communicate effectively and provide good customer experience.',
      link: '/for-dme/customer-service',
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="Healthcare Excellence that crafts your Revenue, perfectly!"
      heroDescription="We have a proven track record of simplifying durable medical equipment order management & billing services for our clients."
      statistics={statistics}
      partnershipTitle="Simplifying DME Order Management & Billing"
      partnershipDescription={`Every DME supplier faces challenges in medical billing and coding. Professional Billing and Coding expertise is necessary to code and bill DME claims. DME Billing and Coding is complex and requires experienced, trained and certified coders to accurately code the rentals and sales of equipment's that provides therapeutic benefits to a patient in need. ${APP_NAME} is home to professional individuals, who bring the required expertise needed to ensure faster payments, fewer errors, fewer claims' denials, and reduced risk of compliance issues.`}
      performanceMetrics={performanceMetrics}
      services={services}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-3',
        partnershipGrid: 'grid-cols-1 md:grid-cols-2',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-5',
        servicesGrid: 'grid-cols-1 md:grid-cols-2'
      }}
    />
  );
}