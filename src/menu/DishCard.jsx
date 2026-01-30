import React from "react";

export default function DishCard({ dish, index, openPopup }) {
  return (
    <div
      className="masakali-dish-card"
      data-target={`pre${index + 1}`}
      onClick={() =>
        openPopup(String(dish.title), String(dish.price), "", String(dish.desc), dish.img)
      }
    >
      <div className="masakali-dish-content">
        <div className="masakali-dish-text">
          <div className="title-row">
            <h4 className="masakali-dish-title">
              {dish.title}
              {dish.icon && (
                <img src={dish.icon} alt="icon" className="masakali-dish-icon" />
              )}
            </h4>

            <span className="masakali-dish-price1">{dish.price}</span>
          </div>

          <p className="masakali-dish-desc">{dish.desc}</p>
        </div>

        <div
          className="masakali-dish-image"
          style={{ backgroundImage: `url(${dish.img})` }}
        />
      </div>
    </div>
  );
}
