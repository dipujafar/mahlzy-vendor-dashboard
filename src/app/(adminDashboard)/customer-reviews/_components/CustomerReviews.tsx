import React from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  id: string;
  customerName: string;
  date: string;
  rating: number;
  reviewText: string;
  avatarUrl?: string;
}

const CustomerReviews = () => {
  const reviews: Review[] = [
    {
      id: '1',
      customerName: 'Shahid Hasan',
      date: '26 May 2025',
      rating: 5,
      reviewText: "I recently visited The Green Lounge in Dhaka, and I was really impressed! The ambiance was cozy yet modern, with a lovely rooftop view that made the evening extra special. I ordered the grilled chicken platter and a mojito — both were delicious and well-presented.",
      avatarUrl: "/user-profile2.png"
    },
    {
      id: '2',
      customerName: 'Shahid Hasan',
      date: '26 May 2025',
      rating: 4,
      reviewText: "I recently visited The Green Lounge in Dhaka, and I was really impressed! The ambiance was cozy yet modern, with a lovely rooftop view that made the evening extra special. I ordered the grilled chicken platter and a mojito — both were delicious and well-presented.",
       avatarUrl: "/user-profile.png"
    },
    {
      id: '3',
      customerName: 'Shahid Hasan',
      date: '26 May 2025',
      rating: 5,
      reviewText: "I recently visited The Green Lounge in Dhaka, and I was really impressed! The ambiance was cozy yet modern, with a lovely rooftop view that made the evening extra special. I ordered the grilled chicken platter and a mojito — both were delicious and well-presented."
    },
    {
      id: '4',
      customerName: 'Shahid Hasan',
      date: '26 May 2025',
      rating: 4,
      reviewText: "I recently visited The Green Lounge in Dhaka, and I was really impressed! The ambiance was cozy yet modern, with a lovely rooftop view that made the evening extra special. I ordered the grilled chicken platter and a mojito — both were delicious and well-presented.",
        avatarUrl: "/user-profile2.png"
    },
    {
      id: '5',
      customerName: 'Shahid Hasan',
      date: '26 May 2025',
      rating: 5,
      reviewText: "I recently visited The Green Lounge in Dhaka, and I was really impressed! The ambiance was cozy yet modern, with a lovely rooftop view that made the evening extra special. I ordered the grilled chicken platter and a mojito — both were delicious and well-presented.",
        avatarUrl: "/user-profile2.png"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className='bg-white p-4 rounded'>
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;