import React from "react";

export default function DishCard({ dish }) {
  return (
    <div className="clean-dish-card">
      <div className="clean-dish-row">
        <div className="clean-dish-title">{dish.title}</div>
        <div className="clean-dish-price">${dish.price}</div>
      </div>
      <div className="clean-dish-desc">{dish.desc}</div>
    </div>
  );
}
