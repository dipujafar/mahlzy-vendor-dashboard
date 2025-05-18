import { Card } from '@/components/ui/card';
import { CoinIcon, IncomeGrowthIcon } from '@/icons';



const DailyEarnings= () => {
  return (
    <Card className="p-5 rounded-lg shadow-sm w-full border">
      <h2 className="text-2xl font-medium text-gray-800 mb-4">Daily Earning</h2>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Card className="flex-1 p-4 flex flex-col items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <CoinIcon></CoinIcon>
          </div>
          <p className="text-2xl font-bold text-[#606060]">€2.648k</p>
          <p className="text-gray-600">Yesterday</p>
        </Card>
        
        <Card className="flex-1 p-4 flex flex-col items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center mb-2">
           <IncomeGrowthIcon/>
          </div>
          <p className="text-2xl font-bold text-[#606060]">€4.520k</p>
          <p className="text-gray-600">Today</p>
        </Card>
      </div>
    </Card>
  );
};

export default DailyEarnings;