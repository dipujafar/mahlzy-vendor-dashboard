export type TInstrumentsData = {
  name: string;
  image: string;
};


export type TProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  sales: number;
  imageUrl: string;
}


export type TActivityItem = {
  id: string;
  type: 'order' | 'shipped' | 'product' | 'favorited' | 'rated' | 'discount' | 'inquiry';
  activity: string;
  order_id?: string;
  product?: string;
  time_ago: string;
  details: string;
  color: string;
  icon: string;
}


export interface BusinessHour {
  id: string;
  day: string;
  openingTime: string;
  closingTime: string;
  openingPeriod: 'AM' | 'PM';
  closingPeriod: 'AM' | 'PM';
}

export const DAYS_OF_WEEK = [
  'Sunday',
  'Monday', 
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const HOURS = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
];
