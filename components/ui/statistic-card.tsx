'use client';

import React from 'react';
import { Card } from './card';
import CountUp from 'react-countup';
import { useInView } from '@/hooks/useInView';

interface StatisticCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatisticCard({ value, label, className = '' }: StatisticCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true });
  
  // Extract the numeric value and suffix (e.g., "200,000+" -> [200000, "+"])
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.match(/[^0-9,]+$/)?.[0] || '';

  return (
    <Card 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col items-center justify-center p-6 text-center ${className}`}
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {inView ? (
          <CountUp
            end={numericValue}
            separator=","
            duration={2.5}
            suffix={suffix}
            useEasing={true}
          />
        ) : (
          '0'
        )}
      </div>
      <div className="text-sm text-muted-foreground animate-fade-in animate-delay-200">
        {label}
      </div>
    </Card>
  );
}

