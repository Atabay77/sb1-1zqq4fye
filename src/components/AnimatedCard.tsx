import React from 'react';
import { FeatureBox } from './FeatureBox';

interface AnimatedCardProps {
  index: number;
  feature: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
  };
}

export function AnimatedCard({ index, feature }: AnimatedCardProps) {
  return (
    <div 
      className="opacity-0 transform -translate-y-12 animate-[drop_1s_ease_forwards]"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <FeatureBox {...feature} />
    </div>
  );
}