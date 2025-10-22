import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import { COMPANY_EMAIL } from "@/lib/constants";
const ContactUsFormSpreeKey = process.env.NEXT_PUBLIC_CONTACT_US_FORM_SPREE_KEY || "";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(ContactUsFormSpreeKey);
  
  // Handle missing form key gracefully
  if (!ContactUsFormSpreeKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Contact form configuration missing. Please set NEXT_PUBLIC_CONTACT_US_FORM_SPREE_KEY environment variable.');
    }
    return (
      <div className="space-y-4 max-w-md mx-auto">
        <p className="text-sm text-muted-foreground">Contact form is currently unavailable. Please email us directly at {COMPANY_EMAIL}</p>
      </div>
    );
  }
  if (state.succeeded) {
    return <p className="py-4 font-semibold">Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-1">
        <label htmlFor="contact-email" className="block text-sm font-medium">
          Email Address
        </label>
        <Input
          id="contact-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="border-white bg-white text-black"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          required
          className="border-white bg-white text-black"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-secondary hover:bg-secondary/80"
      >
        <FaPaperPlane size={16} /> Submit
      </Button>
    </form>
  );
};
export default ContactForm;
