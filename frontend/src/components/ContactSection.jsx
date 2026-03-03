import React from 'react';
import './ContactSection.css';
import contactInfo from '../data/contactInfo';

const ContactSection = () => (
  <section className="contact-section">
    <h2>Contact Us</h2>
    <p>Call us at <a href={`tel:${contactInfo.phoneHref}`}>{contactInfo.phoneDisplay}</a></p>
    <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
    <p>Location: <a href={contactInfo.mapsLink} target="_blank" rel="noopener noreferrer">{contactInfo.addressText}</a></p>
    <div className="map-embed" style={{ maxWidth: '100%', height: '320px', marginTop: '0.5rem' }}>
      <iframe
        title="Masakali California Location"
        src="https://www.google.com/maps?q=10310+S+De+Anza+Blvd,+Cupertino,+CA&output=embed"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default ContactSection;
