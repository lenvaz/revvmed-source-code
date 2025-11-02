import { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us | ${APP_NAME}`,
  description: `Get in touch with ${APP_NAME}. Reach out to us to explore healthcare solutions for your organization. We have offices in USA and India.`,
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

