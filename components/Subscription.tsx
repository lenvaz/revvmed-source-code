import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
const SubscriptionFormSpreeKey = process.env.NEXT_PUBLIC_FORM_SPREE_SUBSCRIPTION_KEY || "";

const SubscriptionForm = () => {
  const [state, handleSubmit] = useForm(SubscriptionFormSpreeKey);
  
  // Handle missing form key gracefully
  if (!SubscriptionFormSpreeKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Subscription form configuration missing. Please set NEXT_PUBLIC_FORM_SPREE_SUBSCRIPTION_KEY environment variable.');
    }
    return (
      <div className="space-y-4 max-w-md">
        <p className="text-sm text-muted-foreground">Newsletter subscription is currently unavailable.</p>
      </div>
    );
  }
  if (state.succeeded) {
    return <p className="py-4 font-semibold">Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-1">
        <label htmlFor="subscription-email" className="block text-sm font-medium">
          Email Address
        </label>
        <div className="flex items-center gap-2">
          <Input
            id="subscription-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="border-white bg-white text-black"
          />
          <Button
            type="submit"
            disabled={state.submitting}
            className="bg-secondary hover:bg-secondary/80"
          >
            <FaPaperPlane size={16} />
          </Button>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
    </form>
  );
};
export default SubscriptionForm;
