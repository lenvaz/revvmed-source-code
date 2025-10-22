import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function OrderManagementPage() {
  const statistics = [
    {
      value: '1,500+',
      label: 'Order daily',
    },
    {
      value: '40%+',
      label: 'Save up to in costs',
    },
    {
      value: '18M',
      label: 'Created Orders worth Annually',
    },
  ];

  const performanceMetrics = [
    {
      value: '96%',
      label: 'Order Success rate',
    },
    {
      value: '30min',
      label: 'Processing DME orders in less',
    },
    {
      value: '1,000+',
      label: 'DME Products',
    },
  ];

  const services = [
    {
      title: "Determining covered services by the patient's insurance",
      description: 'Insurance companies regularly make policy changes and updates in their health plans. Therefore it is important for the medical billing company or the provider to verify if the patient is covered under the new plan to get maximum reimbursement',
    },
    {
      title: 'Ascertaining whether pre-authorization is required',
      description: `Looking up if a pre-authorization is required for your product plays a vital role in payment. At ${APP_NAME} we make sure to go through research and collect all the necessary documents for the authorization.`,
    },
    {
      title: 'Understanding the copay, deductibles & plan exclusions',
      description: "Copay's, deductibles, lifetime maximum are is very sensitive matter for the patients our team make sure to understand the patient payment and provide a brief explanation of such payments.",
    },
    {
      title: 'STAT/Urgent Fax processing, 24x7',
      description: `${APP_NAME} understands the complexity of urgent DME orders daily, our team is available round the clock to service your needs. We can process DME orders under an hour, your team accuracy within the time limit and reduce the backlogs.`,
    },
  ];

  const equipmentList = [
    'Respiratory Therapies',
    'Durable Medical Equipment',
    'Orthotics & Prosthetics',
    'Disposable Medical Supplies',
    'Custom & Power Mobility',
    'Enteral Nutrition',
  ];

  return (
    <ProviderPageLayout
      heroTitle="Your Order, Our Priority!"
      heroDescription="With over 10+years of experience in DME Order management, our team knows how important it is to deliver the DME equipment's and supplies as it is the part of their care plan."
      statistics={statistics}
      partnershipTitle="Streamlined DME Order Management Solutions"
      partnershipDescription={`At ${APP_NAME} we believe in implementing best practices that can help streamline your DME billing process and improve outcomes. Our team makes sure to carry out tasks like Document management, claims creation and billing, Receipt and cash posting, AR management and denials, and Sales operations support and customer service to make the order management system more effective & efficient. List of durable medical equipment's & supplies our team is expertise in:\n\n${equipmentList.map(item => `• ${item}`).join('\n')}`}
      performanceMetrics={performanceMetrics}
      services={services}
      gridClasses={{
        heroStatsGrid: 'grid-cols-1 md:grid-cols-3',
        partnershipGrid: 'grid-cols-1 md:grid-cols-2',
        performanceMetricsGrid: 'grid-cols-1 md:grid-cols-3',
        servicesGrid: 'grid-cols-1 md:grid-cols-2'
      }}
    />
  );
}
