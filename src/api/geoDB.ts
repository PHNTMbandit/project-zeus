import { City } from "@/types/city";
import { RateLimiterMemory } from "rate-limiter-flexible";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1c2519f508msh0592514862c93cep1d1090jsn3ed19c11ff45",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 1,
});

export const getCity = async (cityPrefix: string) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityPrefix}&limit=5&appid=beee9aed34af7b7e2e938db81d68bb9e`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeather = async (city: City | null) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city?.lat}&lon=${city?.lon}&units=metric&appid=beee9aed34af7b7e2e938db81d68bb9e`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
