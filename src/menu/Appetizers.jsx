import React from "react";
import MenuSection from "./MenuSection";

import { appetizers } from "./menuData";

export default function Appetizers({ openPopup }) {
  return <MenuSection id="appetizers" title="Appetizers" dishes={appetizers} openPopup={openPopup} />;
}
