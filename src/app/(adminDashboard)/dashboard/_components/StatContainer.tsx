import React from 'react';
import StatCard from './StatCard';

const StatContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard 
        title="Total Order" 
        value="4,520k" 
        change={2.2} 
        type="order"
      />
      <StatCard 
        title="Total Customer" 
        value="520k" 
        change={-2.7} 
        type="customer"
      />
      <StatCard 
        title="Total Revenue" 
        value="€4,520k" 
        change={-2.7} 
        type="revenue"
      />
    </div>
  );
};

export default StatContainer;