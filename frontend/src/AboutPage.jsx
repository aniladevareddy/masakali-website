import React from "react";
import { Link } from 'react-router-dom';
import "./AboutPage.css";
import img121 from './assets/img/121.webp';
import img122 from './assets/img/122.webp';
import img123 from './assets/img/123.webp';
import img124 from './assets/img/124.webp';
import BrandArea from './components/BrandArea';

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>About Masakali</h1>
          <p>
            We bring the taste of authentic home-style Indian cooking to your table —
            vibrant spices, fresh ingredients, and recipes passed down through
            generations.
          </p>
          <button onClick={() => document.getElementById("our-mission")?.scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </button>
        </div>
      </section>

      <section id="our-mission" className="about-page-section">
        <h2>Our Mission</h2>
        <p>
          To craft memorable meals using the freshest ingredients while honoring
          regional traditions and delivering an exceptional dining experience.
        </p>
      </section>

      

      <section className="about-page-section about-content">
        <h4 className="section-title">OUR STORY</h4>
        <h3 className="section-subtitle">Welcome to Masakali Indian Cuisine – California</h3>
        <p className="about-text">Proudly brought to you by Pramod Pamulapati, Mahesh Rachakonda and Vikas B Jalagam Masakali Indian Cuisine has become a beloved name in Canada for its authentic Indian flavors and warm hospitality. Now, we're excited to bring that same passion to California, right in the cupertino at 10310 S De Anza Blvd.</p>
        <p className="about-text">At Masakali, we blend the traditional with the contemporary, offering a rich menu of Indian classics—from aromatic curries and biryanis to sizzling tandoori dishes and handcrafted breads. Every dish is a celebration of India’s diverse culinary heritage, prepared with premium ingredients and genuine care.</p>
        <p className="about-text">With a focus on quality, freshness, and inclusivity, our menu features ample vegetarian, vegan, and gluten-free options. Whether you dine in or order out, we strive to deliver a memorable experience every time.</p>
        <p className="about-text highlight">Opening April 15, 2026 – Join us and taste the difference.</p>
        <Link to="/reservation" className="about-button">Make Reservation</Link>
      </section>

      <BrandArea />

      <section className="restaurant-gallery">
        <div className="container">
          <h2 className="section-title">Our Restaurant's</h2>
          <p className="section-subtitle">Experience our ambiance and culinary delights</p>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={img121} alt="Restaurant interior with elegant dining setup" className="img-responsive" />
              <div className="overlay">
                <div className="caption">Masakali Resto Bar</div>
                <div className="caption">
                  <a href="https://masakalirestrobar.ca/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>97 Clarence St, Byward Mkt, Ottawa</a>
                  <a style={{color: 'rgb(255,255,255)', marginLeft: '8px'}} href="tel:(613) 789-6777">(613) 789-6777</a>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img src={img122} alt="Chef preparing food in our kitchen" className="img-responsive" />
              <div className="overlay">
                <div className="caption">Masakali Restaurant</div>
                <div className="caption">
                  <a href="https://masakaliottawa.ca/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>5507 Hazeldean Rd, Stittsville, Ottawa</a>
                  <a style={{color: 'rgb(255,255,255)', marginLeft: '8px'}} href="tel:(613) 878-3939">(613) 878-3939</a>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img src={img123} alt="Delicious signature dish presentation" className="img-responsive" />
              <div className="overlay">
                <div className="caption">Masakali Willington</div>
                <div className="caption">
                  <a href="https://masakaliottawa.ca/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>1111 Wellington St, Ottawa</a>
                  <a style={{color: 'rgb(255,255,255)', marginLeft: '8px'}} href="tel:(613) 792-9777">(613) 792-9777</a>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <img src={img124} alt="Outdoor seating area with beautiful ambiance" className="img-responsive" />
              <div className="overlay">
                <div className="caption">Rangde Indian Cuisine</div>
                <div className="caption">
                  <a href="https://www.rangdeottawa.ca/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>700 March Rd, Kanata, Ottawa</a>
                  <a style={{color: 'rgb(255,255,255)', marginLeft: '8px'}} href="tel:(613) 595-0777">(613) 595-0777</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}
