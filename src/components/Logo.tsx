import * as React from "react";
import { cn } from "@/lib/utils";
import { MapPinnedIcon } from "lucide-react";
import Link from "next/link";

export interface LogoProps
  extends React.InputHTMLAttributes<HTMLAnchorElement> {}

const Logo = React.forwardRef<HTMLLinkElement, LogoProps>(
  ({ className, children, ...props }) => {
    return (
      <Link
        href="/"
        className={cn("flex gap-1 items-center", className)}
        {...props}>
        {children}
        <MapPinnedIcon
          width={30}
          height={30}
        />
        <h3 className="text-nowrap">Weather App</h3>
      </Link>
    );
  }
);

Logo.displayName = "Logo";

export { Logo };
