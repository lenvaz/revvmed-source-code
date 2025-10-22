import React from 'react';
import { PayerPageLayout } from '../layouts/PayerPageLayout';
import { APP_NAME } from '@/lib/constants';

export default function SupplementalServicesPage() {
    const statistics = [
      { value: '250,000+', label: 'Charts yearly' },
      { value: '100%', label: 'NCQA compliant' },
      { value: '99%', label: 'Accuracy Rate' },
    ];
  
    const processes = [
      {
        title: 'Provider Education',
        description: 'We recruit top-tier talent and provide comprehensive training to our coders, ensuring they gain a deep understanding of risk adjustment coding standards as well as the specific rules and guidelines set forth by the Centers for Medicare & Medicaid Services (CMS). This expertise enables us to deliver the highest level of accuracy and compliance in every aspect of our coding process.',
      },
      {
        title: 'Member Education',
        description: `${APP_NAME} offers flexibility with coding projects, utilizing either our standard guidelines—based on AHA Coding Clinic recommendations—or custom guidelines provided by the health plan and providers.`,
      },
      {
        title: 'Prospective Data Mining',
        description: 'Our audit team consists of highly skilled quality auditors certified in quality management systems and six sigma. We use robust sampling methods, knowledge attribute analysis and effective 5-why analysis and remediation plans.',
      },
      {
        title: 'Contact Center',
        description: "We'll tap into our network of experienced coders and resources that scale up and down as demand fluctuates. We complete thorough reviews quickly and correctly while providing staffing and project flexibility.",
      },
      {
        title: 'Back office Services',
        description: 'Our audit team consists of highly skilled quality auditors certified in quality management systems and six sigma. We use robust sampling methods, knowledge attribute analysis and effective 5-why analysis and remediation plans.',
      },
      {
        title: 'Data Analysis and Reporting',
        description: "We'll tap into our network of experienced coders and resources that scale up and down as demand fluctuates. We complete thorough reviews quickly and correctly while providing staffing and project flexibility.",
      },
      {
        title: 'Stars/Quality Measures Education',
        description: 'Our audit team consists of highly skilled quality auditors certified in quality management systems and six sigma. We use robust sampling methods, knowledge attribute analysis and remediation plans.', 
      },
      {
        title: 'Made to Order/Bespoke Services',
        description: "We'll tap into our network of experienced coders and resources that scale up and down as demand fluctuates. We complete thorough reviews quickly and correctly while providing staffing and project flexibility.",
      }
    ];
  
    return (
      <PayerPageLayout
        heroTitle="Our tailor made and affordable supplemental services"
        heroDescription={`At ${APP_NAME}, we specialize in providing a comprehensive range of tailored services designed to meet the specific needs of our clients.`}
        statistics={statistics}
        sectionTitle="Our Supplemental Services"
        sectionDescription="Comprehensive range of services designed to enhance your healthcare operations"
        processes={processes}
      />
    );
  }