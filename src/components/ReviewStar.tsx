import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface ReviewStarProps {
  filled: number; // 0 = empty, 0.5 = half, 1 = full
  interactive?: boolean;
  onSelect?: () => void;
}

export function ReviewStar({ filled, interactive, onSelect }: ReviewStarProps) {
  const className = `${
    interactive ? 'cursor-pointer hover:text-yellow-400' : ''
  } ${filled > 0 ? 'text-yellow-400' : 'text-gray-300'}`;

  return (
    <span onClick={onSelect} className={className}>
      {filled === 0.5 ? <StarHalf size={20} /> : <Star size={20} fill={filled ? 'currentColor' : 'none'} />}
    </span>
  );
}