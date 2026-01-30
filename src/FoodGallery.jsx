import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import g1 from "./assets/img/g1.png";
import g2 from "./assets/img/g2.png";
import g3 from "./assets/img/g3.png";
import gg3 from "./assets/img/gg3.png";
import gg4 from "./assets/img/gg4.png";
import gg5 from "./assets/img/gg5.png";

const galleryData = [
  {
    img: g1,
    tag: "Tandoori Special",
    title: "Afghani Chicken",
  },
  {
    img: g2,
    tag: "Biryani",
    title: "Chicken Dum Biryani",
  },
  {
    img: g3,
    tag: "Vegetarian",
    title: "Paneer Tikka Masala",
  },
  {
    img: gg3,
    tag: "Non-Veg",
    title: "Hariyali Chicken Tikka",
  },
  {
    img: gg4,
    tag: "Non-Veg",
    title: "Masakali Grand Platter",
  },
  {
    img: gg5,
    tag: "Soda",
    title: "Masala Soda",
  },
];

export default function FoodGallery() {
  return (
    <section style={styles.section}>
      {/* Heading */}
      <div style={styles.headingWrapper}>
        <h4 style={styles.subTitle}>Food Item</h4>
        <h2 style={styles.title}>Our Food Gallery</h2>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Pagination, FreeMode, Autoplay]}
        spaceBetween={40}
        slidesPerView={3}
        freeMode
        loop
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={styles.card}>
              <img src={item.img} alt={item.title} style={styles.image} />

              <div style={styles.overlay}>
                <span style={styles.tag}>{item.tag}</span>
                <h4 style={styles.cardTitle}>{item.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const styles = {
  section: {
    padding: "5rem 1rem",
    background: "#fff",
    overflow: "hidden",
  },

  headingWrapper: {
    textAlign: "center",
    marginBottom: "3rem",
  },

  subTitle: {
    color: "#dfa775",
    letterSpacing: "2px",
    marginBottom: "0.5rem",
    fontSize: "14px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "36px",
    fontWeight: 700,
    margin: 0,
  },

  card: {
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "1.5rem",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
    color: "#fff",
  },

  tag: {
    display: "inline-block",
    fontSize: "12px",
    marginBottom: "0.5rem",
    color: "#dfa775",
    fontWeight: 600,
  },

  cardTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
  },
};
