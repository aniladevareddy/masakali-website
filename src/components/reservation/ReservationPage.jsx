import { useMemo, useState } from "react";
import "./ReservationPage.css";
import bg from "../../assets/img/background.jpg"; // same site background

export default function ReservationPage() {
  const timeOptions = useMemo(
    () => [
      "11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
      "3:00 PM","3:30 PM","4:00 PM","4:30 PM",
      "5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM",
      "8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM",
    ],
    []
  );

  const guestOptions = useMemo(
    () => Array.from({ length: 20 }, (_, i) => i + 1),
    []
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // ✅ Works instantly without backend:
    // Opens user's email app with details
    const subject = encodeURIComponent("Table Reservation Request - Masakali");
    const body = encodeURIComponent(
      `Reservation Request\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Guests: ${form.guests}\n` +
      `Special Requests: ${form.requests || "-"}\n`
    );

    window.location.href = `mailto:masakalimontreal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main
      className="res-page"
      style={{
        backgroundImage: `linear-gradient(rgba(11,12,16,0.78), rgba(11,12,16,0.9)), url(${bg})`,
      }}
    >
      <div className="res-container">
        <h1 className="res-heading">Reserve Your Table</h1>

        <section className="res-card">
          <form className="res-form" onSubmit={onSubmit}>
            <div className="res-row">
              <div className="res-field">
                <label className="res-label">Full Name</label>
                <input
                  className="res-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="res-field">
                <label className="res-label">Phone Number</label>
                <input
                  className="res-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            <div className="res-field">
              <label className="res-label">Email Address</label>
              <input
                className="res-input"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="res-row">
              <div className="res-field">
                <label className="res-label">Date</label>
                <input
                  className="res-input"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="res-field">
                <label className="res-label">Time</label>
                <select
                  className="res-input"
                  name="time"
                  value={form.time}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Time</option>
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="res-field">
                <label className="res-label">Guests</label>
                <select
                  className="res-input"
                  name="guests"
                  value={form.guests}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Guests</option>
                  {guestOptions.map((g) => (
                    <option key={g} value={g}>
                      {g} {g === 1 ? "person" : "people"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="res-field">
              <label className="res-label">Special Requests (Optional)</label>
              <textarea
                className="res-textarea"
                name="requests"
                value={form.requests}
                onChange={onChange}
                placeholder="Allergies, high chair, birthday, etc."
              />
            </div>

            <button className="res-btn" type="submit">
              Reserve Now
            </button>

            <p className="res-note">
              This will open your email app to send the reservation request.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
