import React from "react";
import MenuSection from "./MenuSection";
import { sides } from "./menuData";

export default function Sides({ openPopup }) {
  return <MenuSection id="sides" title="Sides" dishes={sides} openPopup={openPopup} />;
}
