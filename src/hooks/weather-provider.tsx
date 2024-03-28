"use client";

import { Weather } from "@/types/weather";
import React, { createContext, useContext, useState } from "react";

type WeatherContext = {
  weather: Weather | null;
  setWeather: React.Dispatch<React.SetStateAction<Weather | null>>;
};

const WeatherContext = createContext<WeatherContext | null>(null);

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState<Weather | null>(null);

  return (
    <WeatherContext.Provider value={{ weather: weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error("useWeatherContext must be used within a UserProvider");
  }

  return context;
};
