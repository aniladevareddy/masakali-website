import React from "react";
import MenuSection from "./MenuSection";
import { mains } from "./menuData";

export default function Mains({ openPopup }) {
  return <MenuSection id="mains" title="Mains" dishes={mains} openPopup={openPopup} gridClassName="two-columns" />;
}
