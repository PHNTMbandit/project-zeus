import * as React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

export interface ForecastCardProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const ForecastCard = React.forwardRef<HTMLDivElement, ForecastCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "w-[63mm] h-[88mm] bg-secondary border rounded-md p-6",
          className
        )}
        ref={ref}
        {...props}>
        {children}
        <h3>19:00</h3>
      </div>
    );
  }
);

ForecastCard.displayName = "Forecast Card";

export { ForecastCard };
