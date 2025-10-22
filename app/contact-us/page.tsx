import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/ui/hero-section';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { APP_NAME, COMPANY_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us | ${APP_NAME}`,
  description: `Get in touch with ${APP_NAME}. We would love to collaborate on your next project.`,
};

const ContactUsPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Locate Us"
        description="Our team is driven by passion, we would love to collaborate on your next project, reach out to us today to explore the possibilities."
        className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-white mb-16 px-8"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              {/* USA Office */}
              <div>
                <h3 className="text-xl font-semibold mb-2">USA</h3>
                <p className="text-gray-600">
                  {APP_NAME} 17595 Harvard Ave., Ste C -676, Irvine, CA-92614, USA
                </p>
              </div>
              
              {/* India Office */}
              <div>
                <h3 className="text-xl font-semibold mb-2">INDIA</h3>
                <p className="text-gray-600">
                  {APP_NAME} A-407/408/409, Navratna Corporate Park, Iskon-Ambli Road, Ashok Vatika, Ahmedabad, Gujarat-380058, India
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-2">
                <p className="text-gray-600">
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary">{COMPANY_EMAIL}</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+19092662667" className="hover:text-primary">+1 909 266 2667</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+19499464344" className="hover:text-primary">+1 949 946 4344</a>
                </p>
              </div>
              
              <p className="text-sm text-gray-500">
                (If you initiate contact by texting us at the above number, you consent to receiving promotional messages from us. You can opt out by sending a message with the keyword "STOP" at any time). Check our Privacy Policy at <a href="#" className="text-primary hover:underline">here</a>.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-white"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-white"
                />
                <Input
                  type="text"
                  placeholder="Company"
                  className="bg-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="bg-white"
                />
                <Input
                  type="text"
                  placeholder="Zip Code"
                  className="bg-white"
                />
              </div>

              {/* Solutions of Interest */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Solutions of Interest:</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-orange-500" />
                    <span>Managed Care Solutions</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-orange-500" />
                    <span>Risk Adjustment Solutions</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-orange-500" />
                    <span>DME Home Health</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-orange-500" />
                    <span>Revenue Cycle Management</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-orange-500" />
                    <span>Healthcare Quality measures Solutions</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-orange-500" />
                    <span>Accounts Receivable Management</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  placeholder="Your message"
                  rows={4}
                  className="bg-white"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
