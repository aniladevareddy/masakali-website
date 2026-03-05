
import React from 'react';
import './HeroSection.css';


// Dynamically import all images from ../assets/images using Vite's glob (include webp)
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
const imageList = Object.values(images);



const HeroSection = () => {
  const heroImage = (() => {
    if (!imageList || imageList.length === 0) return '';
    // Prefer the exact Butter Chicken asset if present
    const butterKey = '../assets/images/Butter Chicken.webp';
    if (images[butterKey]) return images[butterKey];
    // Fallback: any file with 'butter' in the filename (case-insensitive)
    const found = imageList.find(u => {
      try {
        const decoded = decodeURIComponent(u);
        const parts = decoded.split('/');
        const name = parts[parts.length - 1];
        return /butter/i.test(name);
      } catch (e) {
        return /butter/i.test(u);
      }
    });
    return found || imageList[0];
  })();

  return (
    <section className="hero-section">
      <div className={`hero-single`}>
        {heroImage ? (
          <div className="slide single">
            <img src={heroImage} alt={"Masakali hero image"} />
            <div className="video-hero-text">
              <span className="video-hero-subtitle">Premium Dining Experience</span>
              <h1 className="video-hero-title">@ Masakali California</h1>
              <p className="video-hero-description">
                Discover our carefully crafted menu featuring seasonal ingredients and innovative culinary techniques.
              </p>
              <div className="video-hero-buttons">
                <a href="/menu" className="video-hero-btn primary-btn">Order Online</a>
                <a href="/reservation" className="video-hero-btn primary-btn">Make Reservation</a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSection;
