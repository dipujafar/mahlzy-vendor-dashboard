"use client";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { earningData } from "@/data";
import { useState } from "react";

// Calculate the total earnings from the data
const calculateTotalEarnings = () => {
  return earningData?.reduce(
    (sum, item) => sum + (item.income - item.expense),
    0
  );
};

const formattedTotal = (total: number) => {
  return `€${(total / 1000).toFixed(3)}k`;
};

interface EarningsChartProps {
  className?: string;
}

const EarningsChart = ({ className }: EarningsChartProps) => {
  const totalEarnings = calculateTotalEarnings();
  const currentYear = new Date().getFullYear();
  const lastFiveYears = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const [selectedYear, setSetSelectedYear] = useState(currentYear);

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-medium">Earning Summary</h3>
          <p className="text-2xl font-bold">{formattedTotal(totalEarnings)}</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
             {selectedYear} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-24 p-0">
            <div className="flex flex-col">
              {lastFiveYears?.map((year) => (
                <Button onClick={()=>setSetSelectedYear(year)} key={year} variant="ghost" className="justify-start">
                  {year}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="ml-auto w-fit">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-300"></div>
            <span className="text-sm">Expense</span>
          </div>
        </div>
      </div>

      <div>
        <ChartContainer
          config={{
            income: { theme: { light: "#ef4444", dark: "#ef4444" } }, // Red
            expense: { theme: { light: "#fda4af", dark: "#fda4af" } }, // Rose
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={earningData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              className="h-[300px]"
            >
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fda4af" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#fda4af" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#ef4444"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorIncome)"
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#fda4af"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorExpense)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default EarningsChart;
