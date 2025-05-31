"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import DaySelector from "./DaySelector";
import { BusinessHour, DAYS_OF_WEEK } from "@/types";
import TimeSelector from "./TimeSelector";

const TimeManageContainer: React.FC = () => {
  const [businessHours, setBusinessHours] = useState<BusinessHour[]>(() =>
    DAYS_OF_WEEK.map((day, index) => ({
      id: `day-${index}`,
      day,
      openingTime: "10",
      closingTime: "10",
      openingPeriod: "AM" as const,
      closingPeriod: "PM" as const,
    }))
  );

  const updateBusinessHour = (
    id: string,
    field: keyof BusinessHour,
    value: string
  ) => {
    setBusinessHours((prev) =>
      prev.map((hour) => (hour.id === id ? { ...hour, [field]: value } : hour))
    );
  };

  //   const handleUpdateNow = () => {
  //     console.log('Business Hours Updated:', businessHours);
  //     toast({
  //       title: "Business Hours Updated",
  //       description: "Your business hours have been successfully saved.",
  //     });
  //   };

  return (
    <Card className="py-4">
      <CardContent className="space-y-4">
        {businessHours.map((hour) => (
          <div
            key={hour.id}
            className="grid grid-cols-3 gap-4 items-center p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Days
              </label>
              <DaySelector
                value={hour.day}
                onValueChange={(value) =>
                  updateBusinessHour(hour.id, "day", value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Opening time
              </label>
              <TimeSelector
                timeValue={hour.openingTime}
                periodValue={hour.openingPeriod}
                onTimeChange={(value) =>
                  updateBusinessHour(hour.id, "openingTime", value)
                }
                onPeriodChange={(value) =>
                  updateBusinessHour(hour.id, "openingPeriod", value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Closing times
              </label>
              <TimeSelector
                timeValue={hour.closingTime}
                periodValue={hour.closingPeriod}
                onTimeChange={(value) =>
                  updateBusinessHour(hour.id, "closingTime", value)
                }
                onPeriodChange={(value) =>
                  updateBusinessHour(hour.id, "closingPeriod", value)
                }
              />
            </div>
          </div>
        ))}

        <Button
          //   onClick={handleUpdateNow}
          className="w-full bg-main-color hover:bg-orange-600 text-white py-3 text-lg font-medium"
        >
          Update Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default TimeManageContainer;
