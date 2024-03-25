"use client";

import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export interface HeaderProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = async (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setInputText(event.target.value);
    };

    return (
      <div
        className={cn("flex justify-between", className)}
        ref={ref}
        {...props}>
        {children}
        <Logo />
        <Input
          value={inputText}
          placeholder="Search for a city..."
          className="bg-transparent w-fit"
          onChange={handleInputChange}
        />
      </div>
    );
  }
);

Header.displayName = "Header";

export { Header };
