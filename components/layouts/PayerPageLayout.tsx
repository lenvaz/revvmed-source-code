import React from 'react';
import { HeroSection } from '@/components/ui/hero-section';
import { StatisticCard } from '@/components/ui/statistic-card';
import AnimatedCard from '@/components/ui/animated-card';
import { cn } from '@/lib/utils';

interface Statistic {
  value: string;
  label: string;
}

interface Process {
  title: string;
  description: string;
  link?: string;
}
interface GridClasses {
  heroStatsGrid?: string;
  partnershipGrid?: string;
  performanceMetricsGrid?: string;
  servicesGrid?: string;
}
interface PayerPageLayoutProps {
  heroTitle: string;
  heroDescription: string;
  statistics: Statistic[];
  sectionTitle: string;
  sectionDescription: string;
  performanceMetrics?: Statistic[];
  processes: Process[];
  gridClasses?: GridClasses;
}

export function PayerPageLayout({
  heroTitle,
  heroDescription,
  statistics,
  sectionTitle,
  sectionDescription,
  performanceMetrics,
  processes,
  gridClasses = {},
}: PayerPageLayoutProps) {
  const {
    heroStatsGrid = "grid-cols-1 md:grid-cols-3",
    performanceMetricsGrid = "grid-cols-1 md:grid-cols-3",
    servicesGrid = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  } = gridClasses;
  return (
    <main className="min-h-screen">
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        className="mb-16 px-8"
      >
      </HeroSection>
        <div className={cn("grid gap-8 my-12 mx-8", heroStatsGrid)}>
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              value={stat.value}
              label={stat.label}
              className='rounded-sm'
            />
          ))}
        </div>

      <section className="px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-muted-foreground">
            {sectionDescription}
          </p>
        </div>

        {performanceMetrics && (
          <div className={cn("grid gap-8 mb-16", performanceMetricsGrid)}>
            {performanceMetrics.map((metric, index) => (
              <StatisticCard
                key={index}
                value={metric.value}
                label={metric.label}
                className='rounded-sm'
              />
            ))}
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What Makes Our Process Better</h2>
        </div>

        <div className={cn("grid gap-8", servicesGrid)}>
          {processes.map((process, index) => (
            <AnimatedCard
              key={index}
              {...process}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
