import React, { useRef, useState } from "react";
import "./MenuPage.css";

import Appetizers from "./Appetizers.jsx";
import Mains from "./Mains.jsx";
import Sides from "./Sides.jsx";
import VeganAppetizers from "./VeganAppetizers.jsx";
import VeganHakka from "./VeganHakka.jsx";
import VeganCurries from "./VeganCurries.jsx";
import VeganRice from "./VeganRice.jsx";
import DishModal from "./DishModal.jsx";

export default function MenuPage() {
  const contentRef = useRef(null);

  const scrollToSection = (id) => {
    const container = contentRef.current;
    const section = container?.querySelector(`#${id}`);
    if (!container || !section) return;

    container.scrollTo({
      top: section.offsetTop - 20, // small padding
      behavior: "smooth",
    });
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
      <div className="menu-layout">

        {/* LEFT SIDEBAR */}
        <aside className="menu-sidebar">
          <button onClick={() => scrollToSection("appetizers")}>Appetizers</button>
          <button onClick={() => scrollToSection("mains")}>Mains</button>
          <button onClick={() => scrollToSection("sides")}>Sides</button>
          <button onClick={() => scrollToSection("vegan-appetizers")}>Vegan Appetizers</button>
          <button onClick={() => scrollToSection("vegan-hakka")}>Vegan Hakka</button>
          <button onClick={() => scrollToSection("vegan-curries")}>Vegan Curries</button>
          <button onClick={() => scrollToSection("vegan-rice")}>Vegan Rice</button>
        </aside>

        {/* RIGHT SCROLLABLE CONTENT */}
        <div className="menu-content" ref={contentRef}>
          <section id="appetizers">
            <Appetizers openPopup={openPopup} />
          </section>

          <section id="mains">
            <Mains openPopup={openPopup} />
          </section>

          <section id="sides">
            <Sides openPopup={openPopup} />
          </section>

          <section id="vegan-appetizers">
            <VeganAppetizers openPopup={openPopup} />
          </section>

          <section id="vegan-hakka">
            <VeganHakka openPopup={openPopup} />
          </section>

          <section id="vegan-curries">
            <VeganCurries openPopup={openPopup} />
          </section>

          <section id="vegan-rice">
            <VeganRice openPopup={openPopup} />
          </section>
        </div>
      </div>

      <DishModal open={modalOpen} dish={modalDish} onClose={closePopup} />
    </main>
  );
}
