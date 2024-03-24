"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex justify-between">
      <Logo />
      <Input
        value={inputText}
        placeholder="Search for a city..."
        className="bg-transparent w-fit"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Header;
