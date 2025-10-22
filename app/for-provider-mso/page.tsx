import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { basePath } from '@/lib/basePath';

export default function ProviderMSOPage() {
  const statistics = [
    {
      value: '700,000+',
      label: 'Claims yearly',
    },
    {
      value: '250,000+',
      label: 'Abstractions yearly',
    },
    {
      value: '1,200,000+',
      label: 'Claims yearly',
    },
  ];

  const performanceMetrics = [
    {
      value: '98%',
      label: 'Coding Accuracy Rate',
    },
    {
      value: '99%',
      label: 'Abstraction Accuracy Rate',
    },
    {
      value: '98%',
      label: 'Provider Satisfaction',
    },
    {
      value: '100%',
      label: 'CPC/CPC-CCS Certified Team',
    },
    {
      value: '98%',
      label: 'Customers with less than 45 days A/R',
    },
  ];

  const services = [
    {
      title: 'Revenue Cycle Management',
      description: 'End-to-end innovative and flexible RCM services to eliminate inefficiencies in the processes and improve financial outcomes resulting in AR goal savings and improve revenue margins for providers.',
      link: `${basePath}/for-provider-mso/revenue-cycle`,
    },
    {
      title: 'Risk Adjustment',
      description: 'Integrated end-to-end risk adjustment solutions to capture complete data with unmatched accuracy, and assist you interpret it to close gaps and improve patient outcomes.',
      link: `${basePath}/for-provider-mso/risk-adjustment`,
    },
    {
      title: 'Claims, Analytics and Reporting',
      description: 'Claim back-office setup, analytical and reporting services, offering tailored solutions to handle all your administrative, data management and reporting needs.',
      link: `${basePath}/for-provider-mso/claims-management`,
    },
    {
      title: 'HEDIS Quality Measures',
      description: 'High quality abstraction results that enable providers achieve high quality scores and close care gaps.',
      link: `${basePath}/for-provider-mso/hedis`,
    },
    {
      title: 'Supplemental Services',
      description: 'Tailor made supplemental services which are curated based on customer needs.',
      link: `${basePath}/for-provider-mso/supplemental-services`,
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="All of your needs - to elevate your clinical and financial performance in one place!"
      heroDescription="Partner with us to experience market leading accuracy, transparency and flexibility."
      statistics={statistics}
      partnershipTitle="20+ Years of Provider Partnerships That Deliver"
      partnershipDescription="Delivering greater value, flexibility, and partnership for the last 20+ years! Partner with us to experience market leading accuracy, transparency and flexibility. We identify and act on opportunities for improvement across your revenue cycle, risk adjustment, quality improvement, and member engagement programs. Our fast and accurate revenue recovery, claims management and coding services, billing optimization, and quality improvement programs help improve your performance while ensuring your data is reliable, care gaps are addressed, and patient care planning is more precise than ever before."
      performanceMetrics={performanceMetrics}
      services={services}
    />
  );
}
