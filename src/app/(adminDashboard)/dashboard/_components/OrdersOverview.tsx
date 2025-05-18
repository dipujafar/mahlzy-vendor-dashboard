"use client";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

// Sample data - you would replace this with actual data from your API
const orderData = [
  { day: "Mon", orders: 180 },
  { day: "Tue", orders: 190 },
  { day: "Wed", orders: 185 },
  { day: "Thu", orders: 195 },
  { day: "Fri", orders: 210 },
  { day: "Sat", orders: 180 },
  { day: "Sun", orders: 190 },
];

interface OrdersOverviewProps {
  className?: string;
}

const OrdersOverview = ({ className }: OrdersOverviewProps) => {
  return (
    <Card className={`p-6 ${className}`}>
      <div className=" mb-6">
        <h3 className="text-lg font-medium">Orders Overview</h3>
      </div>

      <div>
        <ChartContainer
          config={{
            orders: { theme: { light: "#FED7D7", dark: "#FED7D7" } },
            friday: { theme: { light: "#F56565", dark: "#F56565" } },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={orderData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 250]}
                ticks={[0, 50, 100, 150, 200, 250]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="orders"
                radius={[4, 4, 0, 0]}
                fill="#FFC3B0"
                barSize={30}
                stroke="#FFC3B0"
                name="Orders"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default OrdersOverview;
