import { ForecastCard } from "@/components/ForecastCard";
import Header from "@/components/Header";
import { WeatherDashboard } from "@/components/WeatherDashboard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <Header />
      <WeatherDashboard />
      <ScrollArea className="whitespace-nowrap">
        <div className="flex gap-2 w-max pb-4">
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
}
