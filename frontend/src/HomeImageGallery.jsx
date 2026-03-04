import React from "react";

// List of all images in assets/img (excluding logo, gluten, nav_bg_image, bg_image1)
const imageList = [
  require("./assets/img/onion-pakora.webp"),
  require("./assets/img/masala-papad.webp"),
  require("./assets/img/g1.webp"),
  require("./assets/img/g2.webp"),
  require("./assets/img/g3.webp"),
  require("./assets/img/gg3.webp"),
  require("./assets/img/gg4.webp"),
  require("./assets/img/gg5.webp"),
  require("./assets/img/aloo-tikki.webp"),
  require("./assets/img/aloo-samosa.webp"),
  require("./assets/img/26.webp"),
  require("./assets/img/25.webp"),
  require("./assets/img/24.webp"),
  require("./assets/img/23.webp"),
  require("./assets/img/22.webp"),
  require("./assets/img/21.webp"),
  require("./assets/img/20.webp"),
  require("./assets/img/19.webp"),
  require("./assets/img/18.webp"),
  require("./assets/img/17.webp"),
  require("./assets/img/15.webp"),
  require("./assets/img/14.webp"),
  require("./assets/img/12.webp")
];

export default function HomeImageGallery() {
  return (
    <section style={{ width: "100%", padding: "2rem 0", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", background: "#fff" }}>
      {imageList.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={"Masakali food " + (idx + 1)}
          style={{ width: "220px", height: "180px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
        />
      ))}
    </section>
  );
}
