"use client";

import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useCityContext } from "@/hooks/city-provider";
import { getCity } from "@/api/geoDB";
import { City } from "@/types/city";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown, Check } from "lucide-react";
import { GlassEffect } from "./glass-effect";

export interface HeaderProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    const [suggestedCities, setSuggestedCities] = useState<City[] | null[]>([]);
    const [open, setOpen] = React.useState(false);
    const { city, setCity } = useCityContext();

    const handleClick = async (city: City | null) => {
      setCity(city);
    };

    const handleInputChange = async (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const cities: City[] = await getCity(event.target.value);
      const uniqueCities = cities.filter(
        (city, index, self) =>
          index === self.findIndex((o) => o.country === city.country)
      );
      setSuggestedCities(uniqueCities);
    };

    return (
      <div
        className={cn("flex justify-between", className)}
        ref={ref}
        {...props}>
        {children}
        <Logo />
        <Popover
          open={open}
          onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              role="combobox"
              aria-expanded={open}
              className={cn(
                "w-[200px] justify-between bg-transparent hover:bg-transparent hover:outline hover:outline-1 hover:outline-primary",
                { "outline outline-1": open }
              )}>
              {city ? `${city.name}, ${city.country}` : "Search for a city..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput
                onInput={handleInputChange}
                placeholder="Search cities..."
              />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {suggestedCities.length > 0 &&
                    suggestedCities.map((suggestedCity, index) => (
                      <CommandItem
                        key={index}
                        value={`${suggestedCity?.name}, ${suggestedCity?.country}`}
                        onSelect={() => {
                          handleClick(suggestedCity);
                          setOpen(false);
                        }}>
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            city === suggestedCity ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {suggestedCity?.name}, {suggestedCity?.country}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

Header.displayName = "Header";

export { Header };
