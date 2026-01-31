import React from "react";
import MenuSection from "./MenuSection";
import { veganCurries } from "./menuData";

export default function VeganCurries({ openPopup }) {
  return <MenuSection id="vegan-curries" title="Vegan Curries" dishes={veganCurries} openPopup={openPopup} />;
}
