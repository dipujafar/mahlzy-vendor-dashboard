import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HOURS } from '@/types';

interface TimeSelectorProps {
  timeValue: string;
  periodValue: 'AM' | 'PM';
  onTimeChange: (value: string) => void;
  onPeriodChange: (value: 'AM' | 'PM') => void;
  placeholder?: string;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ 
  timeValue, 
  periodValue, 
  onTimeChange, 
  onPeriodChange, 
  placeholder = "00:00"
}) => {
  return (
    <div className="flex gap-2">
      <Select value={timeValue} onValueChange={onTimeChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {HOURS.map((hour) => (
            <SelectItem key={hour} value={hour} className="hover:bg-gray-100">
              {hour}:00
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select value={periodValue} onValueChange={onPeriodChange}>
        <SelectTrigger className="w-16">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <SelectItem value="AM" className="hover:bg-gray-100">AM</SelectItem>
          <SelectItem value="PM" className="hover:bg-gray-100">PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeSelector;