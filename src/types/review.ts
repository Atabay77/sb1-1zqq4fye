export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  featureId: string;
  createdAt: Date;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
}