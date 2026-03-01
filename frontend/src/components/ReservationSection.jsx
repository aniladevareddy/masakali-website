
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservationSection.css';
import './sectionImages.css';
import ReservationForm from './ReservationForm';
import { reservationImage } from '../assets/img/externalImages';

const ReservationSection = () => {
  const navigate = useNavigate();
  return (
    <section className="reservation-section reservation-sidebyside-section">
      <div className="reservation-sidebyside-img-wrapper">
        <img src={reservationImage} alt="Reservation" className="reservation-sidebyside-image" />
      </div>
      <div className="reservation-sidebyside-content">
        <p className="reservation-subheader reservation-sidebyside-subheader">Reserve your dining experience in advance.</p>
        <button className="reservation-btn reservation-sidebyside-btn" onClick={() => navigate('/reservation')}>
          <span>Book a Table</span>
        </button>
      </div>
    </section>
  );
};

export default ReservationSection;
