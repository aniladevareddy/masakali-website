import React from 'react';
import '../AboutPage.css';
import aboutImg from '../assets/img/masala-papad.png';
import { Link } from 'react-router-dom';

const AboutMasakali = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImg} alt="Masakali Restaurant Interior" />
      </div>
      <div className="about-content">
        <h4 className="section-title">OUR STORY</h4>
        <h3 className="section-subtitle">Welcome to Masakali Indian Cuisine – California</h3>
        <p className="about-text">Proudly brought to you by Pramod Pamulapati and Mahesh Rachakonda, Masakali Indian Cuisine has become a beloved name in Ottawa for its authentic Indian flavors and warm hospitality. Now, we're excited to bring that same passion to California, right in the vibrant downtown.</p>
        <p className="about-text">At Masakali, we blend the traditional with the contemporary, offering a rich menu of Indian classics—from aromatic curries and biryanis to sizzling tandoori dishes and handcrafted breads. Every dish is a celebration of India’s diverse culinary heritage, prepared with premium ingredients and genuine care.</p>
        <p className="about-text">With a focus on quality, freshness, and inclusivity, our menu features ample vegetarian, vegan, and gluten-free options. Whether you dine in or order out, we strive to deliver a memorable experience every time.</p>
        <p className="about-text highlight">Opening May 15, 2025 – Join us and taste the difference.</p>
        <Link to="/reservation" className="about-button">Make Reservation</Link>
      </div>
    </div>
  </section>
);

export default AboutMasakali;
