import React from "react";
import DishCard from "./DishCard";
import "./menu.css";

export default function MenuSection({ id, title, dishes, openPopup, gridClassName = "" }) {
  return (
    <section id={id} className="masakali-section">
      <h3 className="masakali-section-title">{title}</h3>
      <div className={`masakali-menu-grid ${gridClassName}`}>
        {dishes.map((dish, idx) => (
          <DishCard key={idx} index={idx} dish={dish} openPopup={openPopup} />
        ))}
      </div>
    </section>
  );
} 
