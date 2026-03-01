import React from "react";
import MenuSection from "./MenuSection";
import { chefsSpecial } from "./menuData";

export default function ChefsSpecial({ openPopup }) {
  return <MenuSection id="chefs-special" title="Chef's Special" dishes={chefsSpecial} openPopup={openPopup} />;
}
