"use client";

import { Forecast } from "@/types/forecast";
import React, { createContext, useContext, useState } from "react";

type ForecastContext = {
  forecast: Forecast | null;
  setForecast: React.Dispatch<React.SetStateAction<Forecast | null>>;
};

const ForecastContext = createContext<ForecastContext | null>(null);

const ForecastProvider = ({ children }: { children: React.ReactNode }) => {
  const [forecast, setForecast] = useState<Forecast | null>(null);

  return (
    <ForecastContext.Provider value={{ forecast, setForecast }}>
      {children}
    </ForecastContext.Provider>
  );
};

export default ForecastProvider;

export const useForecastContext = () => {
  const context = useContext(ForecastContext);

  if (!context) {
    throw new Error("useForecastContext must be used within a UserProvider");
  }

  return context;
};
