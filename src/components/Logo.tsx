import { MapPinnedIcon } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <MapPinnedIcon
        width={30}
        height={30}
      />
      <h3 className="text-nowrap">Weather App</h3>
    </div>
  );
};

export default Logo;
