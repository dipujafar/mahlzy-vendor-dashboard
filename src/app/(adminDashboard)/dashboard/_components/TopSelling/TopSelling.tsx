"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FoodItem from './FoodItem';

interface TimeFilter {
  label: string;
  value: string;
}

interface FoodData {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const TopSelling = () => {
  const timeFilters: TimeFilter[] = [
    { label: 'Today', value: 'today' },
    { label: 'This Week', value: 'week' },
    { label: 'This Month', value: 'month' }
  ];

  const [selectedFilter, setSelectedFilter] = useState<TimeFilter>(timeFilters[1]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const foodItems: FoodData[] = [
    { id: 1, name: 'Hamburger Burger', price: 52.00, image: '/item_image.png', description: 'first food' },
    { id: 2, name: 'Hamburger Burger', price: 52.00, image: '/item_image.png' },
    { id: 3, name: 'Hamburger Burger', price: 52.00, image: '/item_image.png', description: 'first food' },
    { id: 4, name: 'Hamburger Burger', price: 52.00, image: '/item_image.png' },
    { id: 5, name: 'Hamburger Burger', price: 52.00, image: '/item_image.png', description: 'first food' },
    { id: 6, name: 'Pizza', price: 52.00, image: '/item_image.png', description: 'first food' },
    { id: 7, name: 'Hamburger Burger', price: 52.00, image: '/item_image.png', description: 'first food' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-full border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Top Selling</h2>
        
        <div className="relative">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center text-sm text-gray-500 gap-1"
          >
            {selectedFilter.label}
            <ChevronDown size={16} />
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md py-1 z-10 w-32">
              {timeFilters.map((filter) => (
                <button
                  key={filter.value}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => {
                    setSelectedFilter(filter);
                    setIsFilterOpen(false);
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-1">
        {foodItems.map((item) => (
          <FoodItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
