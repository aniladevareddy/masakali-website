import { useState } from "react";
import "./CateringPage.css";
import bg from "../../assets/img/background.jpg"; // same site background

export default function CateringPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Catering Request - Masakali");
    const body = encodeURIComponent(
      `Catering Request\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Event Type: ${form.eventType}\n` +
      `Event Date: ${form.date}\n` +
      `Guests: ${form.guests}\n` +
      `Details: ${form.message || "-"}\n`
    );

    window.location.href = `mailto:masakalimontreal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main
      className="cat-page"
      style={{
        backgroundImage: `linear-gradient(rgba(11,12,16,0.78), rgba(11,12,16,0.9)), url(${bg})`,
      }}
    >
      <div className="cat-container">
        <h1 className="cat-heading">Catering</h1>
        <p className="cat-sub">
          Planning an event? Let us handle the food — share your details and we’ll get back to you.
        </p>

        <section className="cat-card">
          <form className="cat-form" onSubmit={onSubmit}>
            <div className="cat-row">
              <div className="cat-field">
                <label className="cat-label">Full Name</label>
                <input
                  className="cat-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="cat-field">
                <label className="cat-label">Phone</label>
                <input
                  className="cat-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            <div className="cat-field">
              <label className="cat-label">Email</label>
              <input
                className="cat-input"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="cat-row">
              <div className="cat-field">
                <label className="cat-label">Event Type</label>
                <select
                  className="cat-input"
                  name="eventType"
                  value={form.eventType}
                  onChange={onChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Private Party">Private Party</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="cat-field">
                <label className="cat-label">Event Date</label>
                <input
                  className="cat-input"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="cat-field">
                <label className="cat-label">Guests</label>
                <input
                  className="cat-input"
                  type="number"
                  min="1"
                  name="guests"
                  value={form.guests}
                  onChange={onChange}
                  placeholder="e.g. 40"
                  required
                />
              </div>
            </div>

            <div className="cat-field">
              <label className="cat-label">Message</label>
              <textarea
                className="cat-textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Dietary preferences, menu ideas, delivery/pickup, budget, etc."
              />
            </div>

            <button className="cat-btn" type="submit">
              Send Catering Request
            </button>

            <p className="cat-note">This will open your email app to send the catering request.</p>
          </form>
        </section>
      </div>
    </main>
  );
}
