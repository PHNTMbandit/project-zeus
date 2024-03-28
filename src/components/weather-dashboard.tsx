"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCityContext } from "@/hooks/city-provider";
import { useWeatherContext } from "@/hooks/weather-provider";
import moment from "moment-timezone";
import { WeatherParameter } from "./weather-parameter";
import { weatherIcons } from "@/data/weather-icon";

export interface WeatherDashboardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const WeatherDashboard = React.forwardRef<
  HTMLDivElement,
  WeatherDashboardProps
>(({ className, children, ...props }, ref) => {
  const { city } = useCityContext();
  const { weather: weather } = useWeatherContext();
  console.log(weather);
  return (
    <div
      className={cn("flex flex-col items-center", className)}
      ref={ref}
      {...props}>
      {children}
      {weather && (
        <section className="text-center">
          <h2>
            In {city?.name}, looks like {weather.weather[0].description}
          </h2>
          <h4>
            {moment().tz(weather?.timezone.toString()).toDate().toDateString()}
          </h4>
          <div className="grid grid-cols-3 items-center justify-items-center w-screen">
            <div>
              <h1 className="text-6xl">{Math.round(weather?.main.temp)}°</h1>
              <h2>{weather.weather[0].main}</h2>
            </div>
            <Image
              src={weatherIcons[weather.weather[0].description]}
              alt={weather.weather[0].description}
              width="256"
              height="256"
              priority
            />
            <div className="grid grid-cols-2 gap-8">
              <WeatherParameter
                parameter={"humidity"}
                amount={`${Math.round(weather.main.humidity).toString()}%`}
              />
              <WeatherParameter
                parameter={"wind"}
                amount={`${Math.round(weather.wind.speed).toString()} KM/H`}
              />
              <WeatherParameter
                parameter={"sunrise"}
                amount={new Date(
                  weather.sys.sunrise * 1000
                ).toLocaleTimeString()}
              />
              <WeatherParameter
                parameter={"sunset"}
                amount={new Date(
                  weather.sys.sunset * 1000
                ).toLocaleTimeString()}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
});

WeatherDashboard.displayName = "Weather Dashboard";

export { WeatherDashboard };
