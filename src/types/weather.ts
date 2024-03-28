export type Weather = {
  weather: [{ id: number; main: string; description: string; icon: string }];
  main: {
    feels_like: number;
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  timezone: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
};
