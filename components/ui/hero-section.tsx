import { cn } from '@/lib/utils';
import React from 'react';
import { basePath } from '@/lib/basePath';

interface HeroSectionProps {
  subtitle?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function HeroSection({ subtitle, title, description, children, className = '', contentClassName = '' }: HeroSectionProps) {
  return (
    <section 
      className={`relative py-8 ${className}`}
      style={{
        backgroundImage: `url(${basePath}/page_header_cover_1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      
      <div className={cn("px-8 py-6 w-fit bg-white/60 rounded-2xl", contentClassName)}>
        {subtitle && (
          <p className="text-primary-foreground mb-2">{subtitle}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {description && (
          <p className="text-xl mb-8 max-w-3xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}

