import { ProviderPageLayout } from '@/components/layouts/ProviderPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function RevenueCyclePage() {
  const statistics = [
    {
      value: '100%',
      label: 'Certified Claims and Coding experts',
    },
    {
      value: '$50M',
      label: 'Revenue realized for our customers',
    },
    {
      value: '70%',
      label: 'Reduction in operational denials',
    },
  ];

  const performanceMetrics = [
    {
      value: '96%',
      label: 'Successful Charge posting ratio',
    },
    {
      value: '95%',
      label: 'Collection ratio',
    },
    {
      value: '35+',
      label: 'Served over specialties',
    },
    {
      value: '98%',
      label: 'Claims with less the 45 days of A/R',
    },
    {
      value: '40%',
      label: 'Cost Reduction',
    },
  ];

  const services = [
    {
      title: 'Patient Pre-authorization',
      description: 'Initiating the revenue cycle with pre-authorization ensures smooth billing process, minimizing delays and denials down the line.',
    },
    {
      title: 'Insurance Eligibility & Verification',
      description: `Insurance eligibility verification is the most important and the first step in the medical billing process. ${APP_NAME}'s dedicated insurance eligibility verification team delivers a thorough verification, thereby aiding dramatic reduction of the claims\' accounts receivable cycle.`,
    },
    {
      title: 'Medical Billing',
      description: 'Our experts handle the entire claims submission process, from accurate coding to timely submissions, optimizing your reimbursement potential.',
    },
    {
      title: 'ERA/EOR Payment Posting',
      description: `Payment posting is vital to the revenue cycle. At ${APP_NAME}, our expert team of payment posting system helps identify opportunities to increase the bottom line by creating daily inputs in your organization.`,
    },
    {
      title: 'Denial management',
      description: 'Denial management is all about figuring out why insurance claims get denied, fixing those issues, and preventing them from happening again. Our dedicated denial management team works on denials promptly, maximizing revenue collection.',
    },
    {
      title: 'Reporting',
      description: `In order to gain valuable insights into your revenue cycle performance we at ${APP_NAME} provide comprehensive reporting, enabling data-driven decision-making and revenue improvement in your organization.`,
    },
  ];

  return (
    <ProviderPageLayout
      heroTitle="Customized Revenue Recovery solutions to elevate reimbursement for your specialty!"
      heroDescription="Healthcare organizations are ridden with several challenges in revenue cycle management, leading to loss of income, inefficiencies in the patient to payment cycle have resulted in late payments, underpaid claims, claim denials and other leakages severely impacting the financial health of the care provider organization."
      statistics={statistics}
      partnershipTitle="Transforming Revenue Cycles for 18 Years"
      partnershipDescription="${APP_NAME} provides an end-to-end innovative RCM solution to identify and eliminate inefficiencies in the processes and achieve the triple aim of saving cost, while increasing revenue and improving processes."
      performanceMetrics={performanceMetrics}
      services={services}
    />
  );
}