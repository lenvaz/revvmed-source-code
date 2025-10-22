import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function CustomerServicePage() {
  const statistics = [
    {
      value: '95%+',
      label: 'Customer retention rate',
    },
    {
      value: '10 AHT',
      label: '(in minutes)',
    },
  ];

  const performanceMetrics = [
    {
      value: '250+',
      label: 'Trusted Providers',
    },
    {
      value: '40%',
      label: 'Upto savings on cost',
    },
    {
      value: '24+',
      label: 'Years of experience',
    },
  ];

  const services = [
    {
      title: 'Developing loyalty & reputation',
      description: `${APP_NAME}'s customer service is only expert in providing quality customer support, but they always build loyalty when they communicate with customers, which brings loyalty and reputation to your organization.`,
    },
    {
      title: 'Communication Efficiency',
      description: 'With more than 20+ years of experience in customer service our team prioritizes two-way communication which delivers positivity & confidence to the customers.',
    },
    {
      title: 'Prompt Assistance',
      description: `To engage with customers in an active way prompt assistance plays a vital part and can set a huge reputation for the business. We at ${APP_NAME} are therefore available 24/7 for the customers`,
    },
    {
      title: 'Retention of customers',
      description: 'Customers who have a good experience with a company are more likely to return. Retaining customers is cheaper than trying to gain new ones.',
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="Experience the difference with our customer service."
      heroDescription={`We are a top-rated Customer services company, delivering consistent customer support services to our clients since 1999.`}
      statistics={statistics}
      partnershipTitle="Exceptional Customer Support Services"
      partnershipDescription="We excel in delivering top-tier inbound, outbound, and non-voice support services, including live chat and email. Over the years, we have partnered with diverse businesses to elevate customer satisfaction, enhance loyalty, and maximize brand lifetime value through tailored and dedicated customer service solutions. This comprehensive approach solidifies our reputation as an expert customer service provider, dedicated to exceeding your expectations."
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
