
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { HandCoins } from 'lucide-react';
import { IncomeGrowthIcon, OrderIcon, PeopleIcon } from '@/icons';

type StatCardProps = {
  title: string;
  value: string;
  change: number;
  type: 'order' | 'customer' | 'revenue';
  className?: string;
};

const StatCard = ({ title, value, change, type, className }: StatCardProps) => {
  const isPositive = change >= 0;
  
  const getIcon = () => {
    switch (type) {
      case 'order':
        return <OrderIcon/>;
      case 'customer':
        return <PeopleIcon/>;
      case 'revenue':
        return <IncomeGrowthIcon/>;
      default:
        return null;
    }
  };

  return (
    <Card className={cn("p-4 flex items-center justify-between border-none", className)}>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md">
          {getIcon()}
        </div>
        <div className="flex flex-col">
          <span className="text-black">{title}</span>
          <span className="text-2xl font-bold">{value}</span>
        </div>
      </div>
      <div className={cn(
        "text-xs px-3 py-1 rounded-full",
        isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      )}>
        {isPositive ? "+" : ""}{change}%
      </div>
    </Card>
  );
};

export default StatCard;