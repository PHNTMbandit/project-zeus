import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface WeatherDashboardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const WeatherDashboard = React.forwardRef<
  HTMLDivElement,
  WeatherDashboardProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("flex flex-col justify-center items-center", className)}
      ref={ref}
      {...props}>
      {children}
      <h1>Tokyo</h1>
      <Image
        src={"/images/cloudy.svg"}
        alt="Clouds"
        width="256"
        height="256"
      />
    </div>
  );
});

WeatherDashboard.displayName = "Weather Dashboard";

export { WeatherDashboard };
