import React from "react";
import MenuSection from "./MenuSection";
import { veganHakka } from "./menuData";

export default function VeganHakka({ openPopup }) {
  return <MenuSection id="vegan-hakka" title="Vegan Hakka" dishes={veganHakka} openPopup={openPopup} />;
}
