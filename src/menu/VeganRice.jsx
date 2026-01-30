import React from "react";
import MenuSection from "./MenuSection";
import { veganRice } from "./menuData";

export default function VeganRice({ openPopup }) {
  return <MenuSection id="vegan-rice" title="Vegan Rice" dishes={veganRice} openPopup={openPopup} />;
}
