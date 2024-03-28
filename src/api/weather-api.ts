import { City } from "@/types/city";

export const getCity = async (cityPrefix: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityPrefix}&limit=5&appid=beee9aed34af7b7e2e938db81d68bb9e`
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

export const getForecast = async (city: City | null) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city?.name}&units=metric&appid=beee9aed34af7b7e2e938db81d68bb9e`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
