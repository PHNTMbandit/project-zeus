import { WeatherDashboard } from "@/components/weather-dashboard";
import { Header } from "@/components/header";
import { ForecastDashboard } from "@/components/forecast-dashboard";

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <Header />
      <WeatherDashboard />
      <ForecastDashboard />
    </main>
  );
}
