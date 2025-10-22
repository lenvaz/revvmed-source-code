"use client";

import { useInView } from "@/hooks/useInView";

export function AnimatedStatistics() {
  const [statsRef, statsInView] = useInView();

  return (
    <section 
      ref={statsRef}
      data-animate={statsInView}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/70 to-primary/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          <div className="animate-slide-up">
            <div className="text-sm font-medium mb-2 animate-fade-in">Relationship</div>
            <div className="text-4xl lg:text-5xl font-bold mb-2 animate-count-up">30,000+</div>
            <div className="text-sm opacity-90 animate-fade-in animate-delay-200">Providers</div>
          </div>
          <div className="animate-slide-up animate-delay-100">
            <div className="text-sm font-medium mb-2 animate-fade-in">Coding</div>
            <div className="text-4xl lg:text-5xl font-bold mb-2 animate-count-up animate-delay-100">98%</div>
            <div className="text-sm opacity-90 animate-fade-in animate-delay-300">Accuracy</div>
          </div>
          <div className="animate-slide-up animate-delay-200">
            <div className="text-sm font-medium mb-2 animate-fade-in">Retrieval</div>
            <div className="text-4xl lg:text-5xl font-bold mb-2 animate-count-up animate-delay-200">90%+</div>
            <div className="text-sm opacity-90 animate-fade-in animate-delay-400">Rate</div>
          </div>
          <div className="animate-slide-up animate-delay-300">
            <div className="text-sm font-medium mb-2 animate-fade-in">Members</div>
            <div className="text-4xl lg:text-5xl font-bold mb-2 animate-count-up animate-delay-300">
              1,000,000+
            </div>
            <div className="text-sm opacity-90 animate-fade-in animate-delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
