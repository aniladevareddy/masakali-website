import {useEffect} from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import CateringSection from './components/CateringSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import NewsletterSection from './components/NewsletterSection';
import LocationSection from './components/LocationSection';
import HoursSection from './components/HoursSection';
import ContactSection from './components/ContactSection';
import DrinksPage from './components/DrinksPage.jsx';

import { Routes, Route } from 'react-router-dom';
import MenuPage from './MenuPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';
import CateringPage from './pages/CateringPage.jsx';
import AboutPage from './AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import axios from 'axios'

function App() {
   useEffect(()=>{
    axios.post("/api/products").then(x=>{
      console.log("this is the res", x)
    })

  },[])
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <div id="home"><HeroSection /></div>
          <div id="about"><AboutSection /></div>
          <div id="reservation"><ReservationSection /></div>
          <div id="catering"><CateringSection /></div>
          <div id="gallery"><GallerySection /></div>
          <div id="reviews"><ReviewsSection /></div>
          <div id="newsletter"><NewsletterSection /></div>
          <div id="location"><LocationSection /></div>
          <div id="hours"><HoursSection /></div>
          <div id="contact"><ContactSection /></div>
        </>
      } />
      <Route path="/menu" element={<><Navbar /><MenuPage /></>} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/catering" element={<CateringPage />} />
      <Route path="/about" element={<><Navbar /><AboutPage /></>} />
      <Route path="/contact" element={<><Navbar /><ContactPage /></>} />
      <Route path="/drinks" element={<><Navbar /><DrinksPage /></>} />
    </Routes>
  );
}

export default App;
