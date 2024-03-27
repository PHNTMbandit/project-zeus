import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlassEffect } from "./glass-effect";

export interface ForecastCardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const ForecastCard = React.forwardRef<HTMLDivElement, ForecastCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <GlassEffect
        className={cn(
          "flex flex-col items-center justify-between w-[63mm] h-[88mm] ",
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
      </GlassEffect>
    );
  }
);

ForecastCard.displayName = "Forecast Card";

export { ForecastCard };
