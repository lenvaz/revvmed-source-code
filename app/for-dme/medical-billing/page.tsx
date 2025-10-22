import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function MedicalBillingPage() {
  const statistics = [
    {
      value: '98%',
      label: 'Claims filed in a timely manner',
    },
    {
      value: '40%',
      label: 'Cost savings',
    },
    {
      value: '3X',
      label: 'Coding capacity',
    },
  ];

  const performanceMetrics = [
    {
      value: '99%',
      label: 'Clean Claims',
    },
    {
      value: '500,000+',
      label: 'Billed Over Charges',
    },
    {
      value: '2M',
      label: 'Billed Over Revenue',
    },
  ];

  const services = [
    {
      title: 'Clean Claims',
      description: 'Claims that are free of errors move through the accounts receivable process faster, resulting in quicker payments. Our team make sure that none of your claims go unattended before it reaches to the insurance.',
    },
    {
      title: 'Claim Content & Coding',
      description: 'Claims include medical codes, such as Current Procedural Terminology (CPT) codes, HCPCS Codes & ICD codes that reflect the services provided. Our expertise team makes sure to use to right codes for the claim to proceed further.',
    },
    {
      title: 'Patient Information is a crucial component of a claim submission',
      description: `To ensure clean claims & smooth payment transitions, providers need to verify patient information, including name, address, and insurance details. At ${APP_NAME}, we also verify copays, deductibles, and the effective dates of the patient's insurance policy.`,
    },
    {
      title: 'Supporting Documentation',
      description: 'Supporting documentation is essential in claim submission to provide evidence of the services provided and their medical necessity. This may include medical records, test results, and any other relevant documentation that supports the claim.',
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="Your Claim, Our Priority"
      heroDescription="Our experts handle the entire claims submission process, from accurate coding to timely submissions, optimizing your reimbursement potential."
      statistics={statistics}
      partnershipTitle="Scalable Medical Billing Solutions Since 1999"
      partnershipDescription="Delivering on cost management and quality at scale since 1999. Our billing team has extensive experience and understanding of the US healthcare industry. Feel free to get in touch with our billing experts to know more about Charge Entry at revenue cycle management. We can help your practice to enhance your charge entry process. Get in touch with us today to boost your collection"
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
