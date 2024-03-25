import * as React from "react";
import { cn } from "@/lib/utils";
import { MapPinnedIcon } from "lucide-react";

export interface LogoProps extends React.InputHTMLAttributes<HTMLDivElement> {}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("flex gap-1 items-center", className)}
        ref={ref}
        {...props}>
        {children}
        <MapPinnedIcon
          width={30}
          height={30}
        />
        <h3 className="text-nowrap">Weather App</h3>
      </div>
    );
  }
);

Logo.displayName = "Logo";

export { Logo };
