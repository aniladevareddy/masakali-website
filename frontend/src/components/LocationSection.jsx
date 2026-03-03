import React from 'react';
import './LocationSection.css';

const LocationSection = () => (
  <section className="location-section">
    <h2>Location</h2>
   
    <a href="https://www.google.com/maps/search/?api=1&query=10310+S+De+Anza+Blvd,+Cupertino,+CA" target="_blank" rel="noopener noreferrer" className="contact-link">
      <i className="fa fa-map-marker"></i> 10310 S De Anza Blvd, Cupertino, CA
    </a>
  </section>
);

export default LocationSection;
