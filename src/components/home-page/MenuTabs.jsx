import { useMemo, useState } from "react";
import "./MenuTabs.css";

// Appetizers
import img11 from "../../assets/img/11.png";
import img12 from "../../assets/img/12.png";
import img13 from "../../assets/img/13.png";
import img14 from "../../assets/img/14.png";

// Tandoori
import img15 from "../../assets/img/15.png";
import img16 from "../../assets/img/16.png";
import img17 from "../../assets/img/17.png";
import img18 from "../../assets/img/18.png";

// Biryani
import img19 from "../../assets/img/19.png";
import img20 from "../../assets/img/20.png";
import img21 from "../../assets/img/21.png";
import img22 from "../../assets/img/22.png";

// Curries
import img23 from "../../assets/img/23.png";
import img24 from "../../assets/img/24.png";
import img25 from "../../assets/img/25.png";
import img26 from "../../assets/img/26.png";

const menuData = [
  {
    id: "appetizers",
    title: "Appetizers",
    bg: img11,
    items: [
      { name: "Gobi Manchurian", price: "$12", img: img11 },
      { name: "Chicken Pakora", price: "$20", img: img12 },
      { name: "Fish 65", price: "$21", img: img13 },
      { name: "Chilli Chicken", price: "$22", img: img14 },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori",
    bg: img15,
    items: [
      { name: "Haryali Paneer Tikka", price: "$20", img: img15 },
      { name: "Tandoori Chicken", price: "$20", img: img16 },
      { name: "Tandoori Fish", price: "$24", img: img17 },
      { name: "Lamb Seekh Kebab", price: "$24", img: img18 },
    ],
  },
  {
    id: "biryani",
    title: "Biryani & Rice",
    bg: img19,
    items: [
      { name: "Chilli Paneer Biryani", price: "$18", img: img19 },
      { name: "Butter Chicken Biryani", price: "$20", img: img20 },
      { name: "Lamb Keema Biryani", price: "$23", img: img21 },
      { name: "Masakali Special Chicken Biryani", price: "$21", img: img22 },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    bg: img23,
    items: [
      { name: "Paneer Lababdar", price: "$22", img: img23 },
      { name: "Butter Chicken", price: "$22", img: img24 },
      { name: "South Indian Goat Curry", price: "$22", img: img25 },
      { name: "Chicken Tikka Masala", price: "$22", img: img26 },
    ],
  },
];

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState("appetizers");
  const currentTab = useMemo(() => menuData.find((t) => t.id === activeTab), [activeTab]);

  return (
    <div className="mt-wrap">
         <div className="mt-head">
            <h2 className="mt-kicker">Special Dish</h2>
            <h2 className="mt-title">Best Recommendation Menu</h2>
            <div className="mt-spacer" />
        </div>
      {/* Tabs */}
      <div className="mt-tabs" role="tablist" aria-label="Menu categories">
        {menuData.map((tab) => (
          <button
            key={tab.id}
            className={`mt-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-content">
        {/* Left image */}
        <div
          className="mt-hero"
          style={{ backgroundImage: `url(${currentTab.bg})` }}
          aria-label={`${currentTab.title} background`}
        />

        {/* Right list */}
        <ul className="mt-list">
          {currentTab.items.map((item) => (
            <li className="mt-item" key={item.name}>
              <img className="mt-thumb" src={item.img} alt={item.name} />
              <div className="mt-line">
                <div className="mt-name">{item.name}</div>
                <div className="mt-dash" />
                <div className="mt-price">{item.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
