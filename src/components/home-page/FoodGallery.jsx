import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./FoodGallery.css";

import g1 from "../../assets/img/g1.png";
import g2 from "../../assets/img/g2.png";
import g3 from "../../assets/img/g3.png";
import gg3 from "../../assets/img/gg3.png";
import gg4 from "../../assets/img/gg4.png";
import gg5 from "../../assets/img/gg5.png";

const galleryData = [
  { img: g1, tag: "Tandoori Special", title: "Afghani Chicken" },
  { img: g2, tag: "Biryani", title: "Chicken Dum Biryani" },
  { img: g3, tag: "Vegetarian", title: "Paneer Tikka Masala" },
  { img: gg3, tag: "Non-Veg", title: "Hariyali Chicken Tikka" },
  { img: gg4, tag: "Non-Veg", title: "Masakali Grand Platter" },
  { img: gg5, tag: "Soda", title: "Masala Soda" },
];

export default function FoodGallery() {
  return (
    <section className="fg-section">
      <div className="fg-head">

        <h2 className="fg-title">Our Food Gallery</h2>
      </div>

      <Swiper
        modules={[Pagination, FreeMode, Autoplay]}
        spaceBetween={22}
        slidesPerView={3}
        freeMode
        loop
        autoplay={{ delay: 2400 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="fg-card">
              <img src={item.img} alt={item.title} className="fg-img" />
              <div className="fg-overlay">
                <span className="fg-tag">{item.tag}</span>
                <h4 className="fg-card-title">{item.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
