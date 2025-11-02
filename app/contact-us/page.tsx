'use client';

import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { HeroSection } from '@/components/ui/hero-section';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaPaperPlane } from "react-icons/fa";
import { APP_NAME, COMPANY_EMAIL } from '@/lib/constants';

const ContactUsFormSpreeKey = process.env.NEXT_PUBLIC_CONTACT_US_FORM_SPREE_KEY || "";

const ContactUsPage = () => {
  const [state, handleSubmit] = useForm(ContactUsFormSpreeKey);
  
  // Handle missing form key gracefully
  if (!ContactUsFormSpreeKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Contact form configuration missing.');
    }
  }

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
            {!ContactUsFormSpreeKey ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Contact form is currently unavailable. Please email us directly at <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">{COMPANY_EMAIL}</a></p>
              </div>
            ) : state.succeeded ? (
              <div className="py-8">
                <p className="text-lg font-semibold text-green-600">Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="bg-white"
                    required
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-white"
                    required
                  />
                  <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="bg-white"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="bg-white"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="bg-white"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                <div>
                  <Input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    className="bg-white"
                  />
                  <ValidationError prefix="Zip Code" field="zipCode" errors={state.errors} />
                </div>
              </div>

              {/* Solutions of Interest */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Solutions of Interest:</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="solutionsOfInterest" value="Managed Care Solutions" className="form-checkbox text-orange-500" />
                    <span>Managed Care Solutions</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="solutionsOfInterest" value="Risk Adjustment Solutions" className="form-checkbox text-orange-500" />
                    <span>Risk Adjustment Solutions</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="solutionsOfInterest" value="DME Home Health" className="form-checkbox text-orange-500" />
                    <span>DME Home Health</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="solutionsOfInterest" value="Revenue Cycle Management" className="form-checkbox text-orange-500" />
                    <span>Revenue Cycle Management</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="solutionsOfInterest" value="Healthcare Quality measures Solutions" className="form-checkbox text-orange-500" />
                    <span>Healthcare Quality measures Solutions</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" name="solutionsOfInterest" value="Accounts Receivable Management" className="form-checkbox text-orange-500" />
                    <span>Accounts Receivable Management</span>
                  </label>
                </div>
                <ValidationError prefix="Solutions of Interest" field="solutionsOfInterest" errors={state.errors} />
              </div>

              {/* Message */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  className="bg-white"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <FaPaperPlane size={16} className="mr-2" />
                {state.submitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
