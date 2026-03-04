
import { useNavigate } from 'react-router-dom';


const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Example logo or image, replace src as needed */}
        {/* <img alt="masakali logo" src="/src/assets/img/logo.webp" className="about-logo" /> */}
        <h1 className="about-header">About Us </h1>
        <h2 className="about-subheader">Authentic Indian Cuisine</h2>
        <p className="about-center">Welcome to Masakali</p>
        <p className="about-center">Masakali is dedicated to bringing you the vibrant flavors of India, crafted with passion and fresh ingredients. Our chefs blend traditional recipes with modern techniques to create a memorable dining experience.</p>
        <p className="about-center">For reservations or catering, call us at <a href="tel:+14088586274">(408) 858-6274</a>. <br/> </p>
        <p className="about-center">From street food favorites to home-cooked classics, our menu is a celebration of Indian culinary heritage. Join us for a meal that feels like home, whether you’re craving a comforting curry or a bold new taste.</p>
          <div className="about-buttons">
            <a className="about-btn" href="/menu"><span>Our Menu</span></a>
            <a className="about-btn" href="/about"><span>Learn More</span></a>
          </div>
      </div>
    </section>
  );
};

export default AboutSection;
import './AboutSection.css';
