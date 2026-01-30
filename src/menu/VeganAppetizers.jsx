import React from "react";
import MenuSection from "./MenuSection";
import { veganAppetizers } from "./menuData";

export default function VeganAppetizers({ openPopup }) {
  return <MenuSection id="vegan-appetizers" title="Vegan Appetizers" dishes={veganAppetizers} openPopup={openPopup} />;
}
