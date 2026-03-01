import React, { useState } from 'react';
import './CateringForm.css';

const CateringForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  if (submitted) {
    return <div className="reservation-success">Thank you! Your catering inquiry has been received.</div>;
  }

  return (
    <div className="catering-form-outer catering-form-bg">
      <h2 className="reservation-form-title">Catering Inquiry</h2>
      <div className="reservation-form-notes">
        <ul>
          <li>For large events (50+ guests), please call us directly to discuss special arrangements and menu options.</li>
          <li>Custom menus and dietary accommodations available upon request.</li>
          <li>Your catering inquiry will be reviewed by our team. We will contact you to confirm details and availability.</li>
          <li>If you have any food allergies or special requests, please mention them below.</li>
        </ul>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row-container">
          <div className="form-input-group">
            <label className="input-label" htmlFor="catering-name">Full Name</label>
            <input className="text-input-field" type="text" name="name" id="catering-name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-input-group">
            <label className="input-label" htmlFor="catering-phone">Phone Number</label>
            <input className="text-input-field" type="tel" name="phone" id="catering-phone" value={form.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-input-group">
          <label className="input-label" htmlFor="catering-email">Email Address</label>
          <input className="text-input-field" type="email" name="email" id="catering-email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-row-container">
          <div className="form-input-group">
            <label className="input-label" htmlFor="event-date">Event Date</label>
            <input className="date-input-field" type="date" name="eventDate" id="event-date" value={form.eventDate} onChange={handleChange} required />
          </div>
          <div className="form-input-group">
            <label className="input-label" htmlFor="catering-guests">Number of Guests</label>
            <input className="text-input-field" type="number" name="guests" id="catering-guests" min="1" max="200" value={form.guests} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-input-group">
          <label className="input-label" htmlFor="catering-message">Details / Requests</label>
          <textarea className="textarea-field" name="message" id="catering-message" value={form.message} onChange={handleChange} />
        </div>
        <button type="submit" className="reservation-submit-btn"><span>Send Inquiry</span></button>
      </form>
    </div>
  );
};

export default CateringForm;
