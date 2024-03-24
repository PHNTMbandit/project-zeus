import * as React from "react";
import { cn } from "@/lib/utils";

export interface WeatherDashboardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const WeatherDashboard = React.forwardRef<
  HTMLDivElement,
  WeatherDashboardProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("border rounded-md p-6", className)}
      ref={ref}
      {...props}>
      {children}
      <h1>Tokyo</h1>
      <p>Clear but rain in the afternoon</p>
    </div>
  );
});

WeatherDashboard.displayName = "Weather Dashboard";

export { WeatherDashboard };
