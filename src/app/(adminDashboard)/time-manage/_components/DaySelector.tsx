
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DAYS_OF_WEEK } from '@/types';


interface DaySelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ value, onValueChange }) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select day" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg z-50">
        {DAYS_OF_WEEK.map((day) => (
          <SelectItem key={day} value={day} className="hover:bg-gray-100">
            {day}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DaySelector;