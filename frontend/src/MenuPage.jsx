import React, { useState } from "react";
import Appetizers from "./menu/Appetizers.jsx";
import Mains from "./menu/Mains.jsx";
import Sides from "./menu/Sides.jsx";
import VeganAppetizers from "./menu/VeganAppetizers.jsx";
import VeganHakka from "./menu/VeganHakka.jsx";
import VeganCurries from "./menu/VeganCurries.jsx";
import VeganRice from "./menu/VeganRice.jsx";
import DishModal from "./components/DishModal.jsx";

export default function MenuPage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalDish, setModalDish] = useState(null);

  const openPopup = (title, price, extra, desc, img, icon) => {
    setModalDish({ title, price, desc, img, icon });
    setModalOpen(true);
  };

  const closePopup = () => {
    setModalOpen(false);
    setModalDish(null);
  };

  return (
    <main className="menu-page">
      <div className="menu-nav">
        <div className="second-one">
          <button onClick={() => scrollToSection("appetizers")}>Appetizers</button>
          <button onClick={() => scrollToSection("mains")}>Mains</button>
          <button onClick={() => scrollToSection("sides")}>Sides</button>
          <button onClick={() => scrollToSection("vegan-appetizers")}>Vegan Appetizers</button>
          <button onClick={() => scrollToSection("vegan-hakka")}>Vegan Hakka</button>
          <button onClick={() => scrollToSection("vegan-curries")}>Vegan Curries</button>
          <button onClick={() => scrollToSection("vegan-rice")}>Vegan Rice</button>
        </div>
      </div>

      <Appetizers openPopup={openPopup} />

      <Mains openPopup={openPopup} />
      <Sides openPopup={openPopup} />
      <VeganAppetizers openPopup={openPopup} />
      <VeganHakka openPopup={openPopup} />
      <VeganCurries openPopup={openPopup} />
      <VeganRice openPopup={openPopup} />

      <DishModal open={modalOpen} dish={modalDish} onClose={closePopup} />
    </main>
  );
}

