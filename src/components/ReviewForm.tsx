import React, { useState } from 'react';
import { ReviewStar } from './ReviewStar';

interface ReviewFormProps {
  featureId: string;
  onSubmit: (review: { rating: number; comment: string; author: string }) => void;
}

export function ReviewForm({ featureId, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ rating, comment, author });
    setRating(0);
    setComment('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <ReviewStar
            key={value}
            filled={value <= rating ? 1 : 0}
            interactive
            onSelect={() => setRating(value)}
          />
        ))}
      </div>
      
      <div>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          rows={3}
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}