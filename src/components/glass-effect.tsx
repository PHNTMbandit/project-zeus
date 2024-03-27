import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassEffectProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const GlassEffect = React.forwardRef<HTMLDivElement, GlassEffectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "backdrop-blur-xl bg-white/10 rounded-xl shadow-lg ring-1 ring-black/5 p-6",
          className
        )}
        ref={ref}
        {...props}>
        {children}
      </div>
    );
  }
);

GlassEffect.displayName = "GlassEffect";

export { GlassEffect };
