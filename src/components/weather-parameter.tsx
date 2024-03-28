import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface WeatherParameterProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  parameter: string;
  amount: string;
}

const WeatherParameter = React.forwardRef<
  HTMLDivElement,
  WeatherParameterProps
>(({ parameter, amount, className, children, ...props }, ref) => {
  return (
    <div
      className={cn("flex gap-4 items-center", className)}
      ref={ref}
      {...props}>
      {children}
      <Image
        src={`/images/${parameter}.svg`}
        alt={parameter.toString()}
        width="64"
        height="64"
      />
      <h3>{amount}</h3>
    </div>
  );
});

WeatherParameter.displayName = "WeatherParameter";

export { WeatherParameter };
