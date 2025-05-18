import Image from 'next/image';
import React from 'react';

interface FoodItemProps {
  name: string;
  price: number;
  image: string;
  description?: string;
}

const FoodItem = ({ name, price, description, image }: FoodItemProps) => {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
      <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
        <Image src={image} alt={name} width={1200}
        height={1200} className="w-14 h-14  object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-sm">{name}</h3>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
      <div className="text-sm font-medium">€{price.toFixed(2)}</div>
    </div>
  );
};

export default FoodItem;