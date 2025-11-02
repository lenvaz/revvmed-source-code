import React from 'react';
import { Card } from './card';
import ImageWithBasePath from '../ImageWithBasePath';

interface ProcessCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function ProcessCard({ icon, title, description, className = '' }: ProcessCardProps) {
  return (
    <Card className={`p-6 flex flex-col items-start gap-4 ${className}`}>
      <div className="w-12 h-12 relative">
        <ImageWithBasePath
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

