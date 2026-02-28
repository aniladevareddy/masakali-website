import React from 'react';
import './DrinksPage.css';

const drinks = [
  { name: 'Kingfisher Beer', price: 7, desc: 'Classic Indian lager, 330ml bottle.' },
  { name: 'Taj Mahal Beer', price: 8, desc: 'Smooth, full-bodied Indian beer, 650ml.' },
  { name: 'Cobra Beer', price: 7, desc: 'Crisp, refreshing lager, 330ml.' },
  { name: 'Masala Mojito', price: 9, desc: 'Rum, mint, lime, Indian spices.' },
  { name: 'Mango Margarita', price: 10, desc: 'Tequila, mango, lime, triple sec.' },
  { name: 'Spicy Bloody Mary', price: 9, desc: 'Vodka, tomato, house spice blend.' },
  { name: 'Lychee Martini', price: 10, desc: 'Vodka, lychee, lemon, simple syrup.' },
  { name: 'Happy Hour Gin & Tonic', price: 8, desc: 'Premium gin, tonic, fresh lime.' },
  { name: 'Classic Old Fashioned', price: 11, desc: 'Bourbon, bitters, orange, sugar.' },
  { name: 'House Red/White Wine', price: 7, desc: 'Glass of our house selection.' },
];

const DrinksPage = () => (
  <div className="drinks-page-outer">
    <h2 className="drinks-page-title">Happy Hour Drinks Menu</h2>
    <p className="drinks-page-desc">Enjoy our special happy hour selection! Available daily 4pm–7pm.</p>
    <div className="drinks-list">
      {drinks.map((drink, i) => (
        <div className="drink-card" key={drink.name}>
          <div className="drink-header">
            <span className="drink-name">{drink.name}</span>
            <span className="drink-price">${drink.price}</span>
          </div>
          <div className="drink-desc">{drink.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default DrinksPage;
