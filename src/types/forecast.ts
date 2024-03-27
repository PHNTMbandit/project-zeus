export type Forecast = {
  list: ForecastItem[];
};

export type ForecastItem = {
  dt_txt: string;
  main: { temp: number };
};
