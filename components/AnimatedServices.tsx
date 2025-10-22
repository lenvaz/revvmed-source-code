"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { useRouter } from "next/navigation";

export function AnimatedServices() {
  const [servicesRef, servicesInView] = useInView();
  const { push } = useRouter();

  return (
    <section 
      ref={servicesRef}
      data-animate={servicesInView}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* For Payer Card */}
          <Card className="group h-full border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 py-0 animate-slide-up hover:scale-105">
            <div className="p-6 h-full flex flex-col bg-white group-hover:bg-primary">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transform transition-transform group-hover:translate-x-1">
                For Payer
              </h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                All of your needs - to improve clinical, financial and
                reimbursement outcomes in one place!
              </p>
              <Button
                variant="outline"
                className="self-start border-gray-200 text-gray-700 hover:bg-accent hover:text-white hover:border-white/50 transform transition-transform hover:translate-x-1"
                onClick={() => push("/for-payer")}
              >
                Learn More &gt;&gt;
              </Button>
            </div>
          </Card>

          {/* For Provider/MSO Card */}
          <Card className="group h-full border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 py-0 animate-slide-up animate-delay-100 hover:scale-105">
            <div className="p-6 h-full flex flex-col bg-white group-hover:bg-primary">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transform transition-transform group-hover:translate-x-1">
                For Provider/MSO
              </h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                All of your needs - to elevate your clinical and financial
                performance in one place!
              </p>
              <Button
                variant="outline"
                className="self-start border-gray-200 text-gray-700 hover:bg-accent hover:text-white hover:border-white/50 transform transition-transform hover:translate-x-1"
                onClick={() => push("/for-provider-mso")}
              >
                Learn More &gt;&gt;
              </Button>
            </div>
          </Card>

          {/* For DME Card */}
          <Card className="group h-full border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 py-0 animate-slide-up animate-delay-200 hover:scale-105">
            <div className="p-6 h-full flex flex-col bg-white group-hover:bg-primary">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transform transition-transform group-hover:translate-x-1">
                For DME
              </h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                Healthcare Excellence that craft's your Revenue, perfectly!
              </p>
              <Button
                variant="outline"
                className="self-start border-gray-200 text-gray-700 hover:bg-accent hover:text-white hover:border-white/50 transform transition-transform hover:translate-x-1"
                onClick={() => push("/for-dme")}
              >
                Learn More &gt;&gt;
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
