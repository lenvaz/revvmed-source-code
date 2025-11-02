import React from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { StatisticCard } from "@/components/ui/statistic-card";
import AnimatedCard from "@/components/ui/animated-card";
import { cn } from "@/lib/utils";
import ImageWithBasePath from "../ImageWithBasePath";

interface Statistic {
  value: string;
  label: string;
}

interface Service {
  title: string;
  description: string;
  icon?: string;
  link?: string;
}

interface GridClasses {
  heroStatsGrid?: string;
  partnershipGrid?: string;
  performanceMetricsGrid?: string;
  servicesGrid?: string;
}

interface ProviderPageLayoutProps {
  heroTitle: string;
  heroDescription: string;
  statistics: Statistic[];
  partnershipTitle: string;
  partnershipDescription: string;
  performanceMetrics: Statistic[];
  services: Service[];
  gridClasses?: GridClasses;
}

export function ProviderPageLayout({
  heroTitle,
  heroDescription,
  statistics,
  partnershipTitle,
  partnershipDescription,
  performanceMetrics,
  services,
  gridClasses = {},
}: ProviderPageLayoutProps) {
  const {
    heroStatsGrid = "grid-cols-1 md:grid-cols-3",
    partnershipGrid = "grid-cols-1 md:grid-cols-2",
    performanceMetricsGrid = "grid-cols-1 md:grid-cols-5",
    servicesGrid = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  } = gridClasses;

  return (
    <main className="min-h-screen">
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        className="mb-16 px-8"
      ></HeroSection>

      <div className={cn("grid gap-8 my-12 mx-8", heroStatsGrid)}>
        {statistics.map((stat, index) => (
          <StatisticCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>

      <section className="px-8 py-16 bg-muted/50">
        <div className="container mx-auto">
          <div className={cn("grid gap-12 items-center", partnershipGrid)}>
            <div>
              <h2 className="text-3xl font-bold mb-4">{partnershipTitle}</h2>
              <p className="text-xl text-muted-foreground">
                {partnershipDescription}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <ImageWithBasePath
                src="/patient_doctor_talking_1.jpg"
                alt="Provider Partnership"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-background">
        <div className="container mx-auto">
          <div className={cn("grid gap-8 mb-16", performanceMetricsGrid)}>
            {performanceMetrics.map((metric, index) => (
              <StatisticCard
                key={index}
                value={metric.value}
                label={metric.label}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className={cn("grid gap-8", servicesGrid)}>
          {services.map((service, index) => (
            <AnimatedCard key={index} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}
