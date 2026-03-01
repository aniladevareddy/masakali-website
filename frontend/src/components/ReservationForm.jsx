import React, { useState } from 'react';
import './ReservationForm.css';



const timeOptions = [
  "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
];

const guestOptions = Array.from({ length: 20 }, (_, i) => `${i + 1} ${i === 0 ? 'person' : 'people'}`);

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
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
    return <div className="reservation-success">Thank you! Your reservation request has been received.</div>;
  }

  return (
    <div className="reservation-form-outer reservation-form-bg">
      <h2 className="reservation-form-title">Book a Table</h2>
      <div className="reservation-form-notes">
        <ul>
          <li>For groups of 20 or more guests, please call us directly to make special arrangements.</li>
          <li>+18% gratuity for 8+ guests.</li>
          <li>Your reservation is considered confirmed upon submission. If we are unable to accommodate your request, a team member will contact you directly.</li>
          <li>If you have any food allergies, kindly inform your server before placing your order.</li>
        </ul>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row-container">
          <div className="form-input-group">
            <label className="input-label" htmlFor="guest-name">Full Name</label>
            <input className="text-input-field" type="text" name="name" id="guest-name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-input-group">
            <label className="input-label" htmlFor="guest-phone">Phone Number</label>
            <input className="text-input-field" type="tel" name="phone" id="guest-phone" value={form.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-input-group">
          <label className="input-label" htmlFor="guest-email">Email Address</label>
          <input className="text-input-field" type="email" name="email" id="guest-email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-row-container">
          <div className="form-input-group">
            <label className="input-label" htmlFor="reservation-date">Date</label>
            <input className="date-input-field" type="date" name="date" id="reservation-date" value={form.date} onChange={handleChange} required />
          </div>
          <div className="form-input-group">
            <label className="input-label" htmlFor="reservation-time">Time</label>
            <select className="select-dropdown time-select" name="time" id="reservation-time" value={form.time} onChange={handleChange} required>
              <option value="">Select Time</option>
              {timeOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-input-group">
          <label className="input-label" htmlFor="party-size">Guests</label>
          <select className="select-dropdown guest-select" name="guests" id="party-size" value={form.guests} onChange={handleChange} required>
            <option value="">Select Guests</option>
            {guestOptions.map((g, i) => (
              <option key={g} value={i + 1}>{g}</option>
            ))}
          </select>
        </div>
        <div className="form-input-group">
          <label className="input-label" htmlFor="special-requests">Special Requests (Optional)</label>
          <textarea className="textarea-field" name="message" id="special-requests" value={form.message} onChange={handleChange} />
        </div>
        <button type="submit" className="reservation-submit-btn"><span>Reserve Now</span></button>
      </form>
    </div>
  );
};

export default ReservationForm;
