

import React from "react";
import { appetizers, tandoori, biryaniRice, curries, chefsSpecial } from "./menu/menuData";
import './menu/MenuPage.css';

const menuSections = [
  { id: "appetizers", title: "Appetizers", dishes: appetizers },
  { id: "tandoori", title: "Tandoori", dishes: tandoori },
  { id: "biryani-rice", title: "Biryani & Rice", dishes: biryaniRice },
  { id: "curries", title: "Curries", dishes: curries },
  { id: "chefs-special", title: "Chef's Special", dishes: chefsSpecial },
];

export default function MenuPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className="menu-page-outer">
        <h2 className="menu-page-title">Our Menu</h2>
        <p className="menu-page-desc">Explore our delicious selection of Indian cuisine, made fresh to order.</p>
        <div className="menu-list">
          {menuSections.map(section => (
            <div className="menu-section-block" key={section.id} id={section.id}>
              <div className="menu-section-header">{section.title}</div>
              {section.dishes.map((dish, i) => (
                <div className="menu-dish-card" key={dish.title + i}>
                  <div className="menu-dish-row">
                    <span className="menu-dish-title">{dish.title}</span>
                    <span className="menu-dish-price">${dish.price}</span>
                  </div>
                  <div className="menu-dish-desc">{dish.desc}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

