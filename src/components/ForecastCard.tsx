import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ForecastCardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const ForecastCard = React.forwardRef<HTMLDivElement, ForecastCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-between w-[63mm] h-[88mm] backdrop-blur-xl bg-white/10 rounded-xl shadow-lg ring-1 ring-black/5 p-6",
          className
        )}
        ref={ref}
        {...props}>
        {children}
        <h4>Time</h4>
        <Image
          src={"/images/clear-day.svg"}
          alt="Clouds"
          width="128"
          height="128"
        />
      </div>
    );
  }
);

ForecastCard.displayName = "Forecast Card";

export { ForecastCard };
