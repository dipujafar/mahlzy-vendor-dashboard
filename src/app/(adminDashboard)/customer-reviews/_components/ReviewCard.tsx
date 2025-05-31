import React from 'react';
import { CalendarDays, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Review {
  id: string;
  customerName: string;
  date: string;
  rating: number;
  reviewText: string;
  avatarUrl?: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="bg-[#F6F6F6]   rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={review?.avatarUrl}></AvatarImage>
          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium">
            {getInitials(review.customerName)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-sm font-medium text-gray-900">{review.customerName}</h3>
              <p className="text-xs text-gray-500 flex gap-x-1"><CalendarDays color='#505050' size={14} />{review.date}</p>
            </div>
            <div className="flex items-center space-x-1">
              {renderStars(review.rating)}
            </div>
          </div>
          
          <p className="text-sm text-gray-700 leading-relaxed">
            {review.reviewText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;