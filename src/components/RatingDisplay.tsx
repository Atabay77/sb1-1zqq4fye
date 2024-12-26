import React from 'react';
import { ReviewStar } from './ReviewStar';

interface RatingDisplayProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

export function RatingDisplay({ rating, size = 'md' }: RatingDisplayProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = Math.max(0, Math.min(1, rating - i));
    return <ReviewStar key={i} filled={filled} />;
  });

  return (
    <div className="flex gap-1">
      {stars}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}