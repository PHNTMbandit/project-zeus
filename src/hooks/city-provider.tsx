"use client";

import { City } from "@/types/city";
import React, { createContext, useContext, useState } from "react";

type CityContext = {
  city: City | null;
  setCity: React.Dispatch<React.SetStateAction<City | null>>;
};

const CityContext = createContext<CityContext | null>(null);

const CityProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState<City | null>(null);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;

export const useCityContext = () => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error("useCityContext must be used within a UserProvider");
  }

  return context;
};
