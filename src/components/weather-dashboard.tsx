"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCityContext } from "@/hooks/city-provider";
import { useWeatherContext } from "@/hooks/weather-provider";
import moment from "moment-timezone";
import { WeatherParameter } from "./weather-parameter";

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
        <section>
          <h2>
            In {city?.name}, looks like {weather.weather[0].description}
          </h2>
          <h4>
            {moment().tz(weather?.timezone.toString()).toDate().toDateString()}
          </h4>
          <div className="flex gap-40 items-center justify-center">
            <div className="flex items-center">
              <div>
                <h1 className="text-8xl">{Math.round(weather?.main.temp)}°</h1>
                <h4 className="mt-4">
                  Feels like {Math.round(weather?.main.feels_like)}°
                </h4>
              </div>
              <Image
                src={`/openweathermap/${weather.weather[0].icon}.svg`}
                alt={weather.weather[0].description}
                width="384"
                height="384"
                priority
              />
            </div>
            <div className="flex flex-col">
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
