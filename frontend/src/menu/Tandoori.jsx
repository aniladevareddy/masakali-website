import React from "react";
import MenuSection from "./MenuSection";
import { tandoori } from "./menuData";

export default function Tandoori({ openPopup }) {
  return <MenuSection id="tandoori" title="Tandoori" dishes={tandoori} openPopup={openPopup} />;
}
