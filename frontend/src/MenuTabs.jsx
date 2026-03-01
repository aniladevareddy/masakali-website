import { useState } from "react";

// Appetizers
import img11 from "./assets/img/11.png";
import img12 from "./assets/img/12.png";
import img13 from "./assets/img/13.png";
import img14 from "./assets/img/14.png";

// Tandoori
import img15 from "./assets/img/15.png";
import img16 from "./assets/img/16.png";
import img17 from "./assets/img/17.png";
import img18 from "./assets/img/18.png";

// Biryani
import img19 from "./assets/img/19.png";
import img20 from "./assets/img/20.png";
import img21 from "./assets/img/21.png";
import img22 from "./assets/img/22.png";

// Curries
import img23 from "./assets/img/23.png";
import img24 from "./assets/img/24.png";
import img25 from "./assets/img/25.png";
import img26 from "./assets/img/26.png";

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
  const currentTab = menuData.find((tab) => tab.id === activeTab);

  return (
    <div style={styles.container}>
      {/* Tabs */}
      <div style={styles.nav}>
        {menuData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.navButton,
              ...(activeTab === tab.id ? styles.activeNavButton : {}),
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={styles.tabContent}>
        {/* Left Image */}
        <div
          style={{
            ...styles.thumb,
            backgroundImage: `url(${currentTab.bg})`,
          }}
        />

        {/* Right Menu */}
        <div style={styles.info}>
          <ul style={styles.mealItems}>
            {currentTab.items.map((item) => (
              <li key={item.name} style={styles.mealItem}>
                <img src={item.img} alt={item.name} style={styles.thumbnail} />

                <div style={{ width: "100%" }}>
                  <div style={styles.titleRow}>
                    <h4 style={styles.itemTitle}>{item.name}</h4>
                    <div style={styles.divider} />
                    <span style={styles.price}>{item.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "3rem auto",
    padding: "0 1rem",
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2.5rem",
    flexWrap: "wrap",
  },

  navButton: {
    padding: "0.6rem 1.4rem",
    border: "none",
    borderRadius: "20px",
    background: "#eee",
    cursor: "pointer",
    fontWeight: 500,
  },

  activeNavButton: {
    background: "#dfa775",
    color: "#fff",
  },

  tabContent: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
  },

  thumb: {
    flex: "0 0 45%",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "16px",
  },

  info: {
    flex: "0 0 55%",
  },

  mealItems: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  mealItem: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.4rem",
    alignItems: "center",
  },

  thumbnail: {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    objectFit: "cover",
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },

  itemTitle: {
    margin: 0,
    whiteSpace: "nowrap",
    fontSize: "1rem",
  },

  divider: {
    flexGrow: 1,
    borderBottom: "1px dashed #dfa775",
    marginTop: "6px",
  },

  price: {
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
};
