import React from "react";
import MenuSection from "./MenuSection";
import { curries } from "./menuData";

export default function Curries({ openPopup }) {
  return <MenuSection id="curries" title="Curries" dishes={curries} openPopup={openPopup} />;
}
