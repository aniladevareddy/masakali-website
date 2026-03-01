        <button className="catering-btn" onClick={() => navigate('/catering')}>
          <span>Catering Inquiry</span>
        </button>

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CateringSection.css';
import './sectionImages.css';
import CateringForm from './CateringForm';
import { cateringImage } from '../assets/img/externalImages';

const CateringSection = () => {
  const navigate = useNavigate();
  return (
    <section className="catering-section catering-sidebyside-section">
      <div className="catering-sidebyside-img-wrapper">
        <img src={cateringImage} alt="Catering" className="catering-sidebyside-image" />
      </div>
      <div className="catering-sidebyside-content">
        <p className="catering-subheader catering-sidebyside-subheader">Stress-free catering for your next event. Fill out our quick form and we’ll get back to you!</p>
        <button className="catering-btn catering-sidebyside-btn" onClick={() => navigate('/catering')}>
          <span>Catering Inquiry</span>
        </button>
      </div>
    </section>
  );
};

export default CateringSection;
