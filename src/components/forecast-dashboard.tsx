"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ForecastCard } from "./forecast-card";
import { useForecastContext } from "@/hooks/forecast-provider";

export interface ForecastDashboardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const ForecastDashboard = React.forwardRef<
  HTMLDivElement,
  ForecastDashboardProps
>(({ className, children, ...props }, ref) => {
  const { forecast } = useForecastContext();

  return (
    <div
      className={cn("", className)}
      ref={ref}
      {...props}>
      {children}
      <ScrollArea className="whitespace-nowrap">
        <div className="flex gap-2 w-max pb-4">
          {forecast &&
            forecast.list.map((item, index) => (
              <ForecastCard
                forecast={item}
                key={index}
              />
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
});

ForecastDashboard.displayName = "ForecastDashboard";

export { ForecastDashboard };
