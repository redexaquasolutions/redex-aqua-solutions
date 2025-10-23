import React, { useState } from 'react';
import { Review } from '../types';
import { StarRating } from './StarRating';
import { StarInput } from './StarInput';

interface ReviewsProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id'>) => void;
}

const ReviewForm: React.FC<{ onAddReview: ReviewsProps['onAddReview'] }> = ({ onAddReview }) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (rating === 0) {
      setError('Please select a star rating.');
      return;
    }
    if (!author.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!comment.trim()) {
      setError('Please enter a comment.');
      return;
    }

    onAddReview({ author, rating, comment });
    setAuthor('');
    setRating(0);
    setComment('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h4 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-4">Leave a Review</h4>
      {success ? (
        <div className="bg-green-100 dark:bg-green-900/50 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg relative animate-fade-in" role="alert">
          <strong className="font-bold">Thank you! </strong>
          <span className="block sm:inline">Your review has been submitted.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Rating</label>
            <StarInput rating={rating} setRating={setRating} />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., Farmer Raju"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Review</label>
            <textarea
              id="comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Share your experience with this product..."
            />
          </div>
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};


export const Reviews: React.FC<ReviewsProps> = ({ reviews, onAddReview }) => {
  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-6">Customer Reviews</h3>
      {reviews.length > 0 ? (
        <>
          <div className="flex items-center mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <StarRating rating={averageRating} />
            <p className="ml-4 text-gray-700 dark:text-gray-300 font-semibold">
              {averageRating.toFixed(1)} out of 5 stars
            </p>
            <p className="ml-auto text-gray-600 dark:text-gray-400">{reviews.length} review{reviews.length > 1 && 's'}</p>
          </div>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 animate-fade-in">
                <div className="flex items-center mb-2">
                  <StarRating rating={review.rating} />
                  <p className="ml-4 font-bold text-gray-800 dark:text-gray-100">{review.author}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-400">No reviews yet for this product. Be the first to leave a review!</p>
        </div>
      )}
      <ReviewForm onAddReview={onAddReview} />
    </div>
  );
};
