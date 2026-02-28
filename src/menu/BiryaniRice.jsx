import React from "react";
import MenuSection from "./MenuSection";
import { biryaniRice } from "./menuData";

export default function BiryaniRice({ openPopup }) {
  return <MenuSection id="biryani-rice" title="Biryani & Rice" dishes={biryaniRice} openPopup={openPopup} />;
}
