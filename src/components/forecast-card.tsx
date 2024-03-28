import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlassEffect } from "./glass-effect";
import { ForecastItem } from "@/types/forecast";
import { weatherIcons } from "@/data/weather-icon";

export interface ForecastCardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  forecast: ForecastItem;
}

const ForecastCard = React.forwardRef<HTMLDivElement, ForecastCardProps>(
  ({ forecast, className, children, ...props }, ref) => {
    return (
      <GlassEffect
        className={cn("flex flex-col items-center w-48", className)}
        ref={ref}
        {...props}>
        {children}
        <h2>{Math.round(forecast.main.temp)}°</h2>
        <Image
          src={`/openweathermap/${forecast.weather[0].icon}.svg`}
          alt={forecast.weather[0].description}
          width="128"
          height="128"
        />
        <h4 className="text-wrap">
          {new Date(forecast.dt_txt).toDateString().split(" ")[0]}{" "}
          {new Date(forecast.dt_txt)
            .toLocaleTimeString()
            .replace(/00:([^:]+)$/, "$1")}
        </h4>
      </GlassEffect>
    );
  }
);

ForecastCard.displayName = "Forecast Card";

export { ForecastCard };
