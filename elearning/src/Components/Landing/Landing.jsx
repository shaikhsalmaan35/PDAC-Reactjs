import React from "react";
import { Forms } from "../Forms";
import { ToggleComps } from "../ToggleComps";
import { Emicalc } from "../Emicalc";
import { Piano } from "../Piano";
import { Counter } from "../Counter";

export const Landing = () => {
  return (
    <div>
      <Forms />
      <ToggleComps />
      <Emicalc />
      <Piano />
      <Counter />
    </div>
  );
};
