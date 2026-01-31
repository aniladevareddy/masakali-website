import { Link } from "react-router-dom";
import "./HomePage.css";

import heroImg from "../../assets/img/gg4.png";

import patternCorner from "../../assets/img/24.png"; // circle overlay on card corner

import MenuTabs from "./MenuTabs";
import FoodGallery from "./FoodGallery";
import DiningHours from "./DiningHours";
import Footer from "../footer/Footer";

export default function HomePage() {
  return (
    <main className="hp">
      <section className="hp-hero">
        <div className="hp-container">
          <div className="hp-hero-grid">
            {/* LEFT */}
            <div className="hp-hero-left">
              <div className="hp-spacer" />
              <h2 className="hp-kicker">Welcome to Masakali</h2>
              <h1 className="hp-title">The Authentic Restaurant</h1>
              <p className="hp-subtitle">
                Premium dining experience with signature curries, grills, and handcrafted desserts.
              </p>

              <div className="hp-spacer-sm" />

              <Link to="/about" className="hp-btn">
                view more
              </Link>
            </div>

            {/* RIGHT */}
            <div className="hp-hero-right">

              {/* Card */}
              <div className="hp-card">
                <div className="hp-card-spacer" />

                <img className="hp-card-img" src={heroImg} alt="Featured dish" />

                {/* Corner overlay pattern INSIDE card */}
                <img
                  className="hp-pattern hp-pattern-corner"
                  src={patternCorner}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION */}
      <section className="hp-section">
        <div className="hp-container">
          <MenuTabs />
          <FoodGallery />
          <DiningHours/>
          <Footer/>
        </div>
      </section>
    </main>
  );
}
