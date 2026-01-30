import React, { useEffect, useState } from "react";
import "./ReservationModal.css";

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function ReservationModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState({});
  const [sendError, setSendError] = useState(null);

  // Formspree endpoint (provided by user)
  const FORM_ENDPOINT = "https://formspree.io/f/maqjdpry";

  useEffect(() => {
    function onOpen() {
      setOpen(true);
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "2", requests: "" });
      setErrors({});
    }

    window.addEventListener("open-reservation", onOpen);
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-reservation", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function close() {
    setOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.email.trim() || !isValidEmail(form.email)) e.email = "A valid email is required.";
    if (!form.date.trim()) e.date = "Date is required.";
    if (!form.time.trim()) e.time = "Time is required.";
    if (!form.guests || Number(form.guests) < 1) e.guests = "Guests must be at least 1.";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSendError(null);
    // Honeypot check: if the hidden field is filled, treat as spam and abort
    if (form._gotcha) {
      setSendError("Spam detected. Submission rejected.");
      return;
    }
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      // Save locally as a fallback
      try {
        const existing = JSON.parse(localStorage.getItem("reservations") || "[]");
        existing.push({ ...form, createdAt: new Date().toISOString() });
        localStorage.setItem("reservations", JSON.stringify(existing));
      } catch (err) {
        // ignore
      }

      // Try sending to Formspree (client-side POST). Replace FORM_ENDPOINT above with your endpoint.
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            "Full Name": form.name,
            "Phone Number": form.phone,
            "Email": form.email,
            Date: form.date,
            Time: form.time,
            Guests: form.guests,
            "Special Requests": form.requests,
            "Source": "Website Reservation"
          })
        });

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error((data && data.error) || "Failed to send reservation");
        }

        setSubmitted(true);
      } catch (err) {
        console.error("Reservation send failed:", err);
        setSendError("Failed to send reservation via email. Your reservation was saved locally — please try again or contact us directly.");
        // keep modal open so user can retry
      }
    }
  }



  if (!open) return null;

  return (
    <div className="res-overlay" role="dialog" aria-modal="true" onClick={close}>
      <div className="res-content" onClick={(e) => e.stopPropagation()}>
        <button className="res-close" onClick={close} aria-label="Close">×</button>

        {!submitted ? (
          <form className="res-form" onSubmit={handleSubmit}>
            <h3>Reserve a Table — Masakali</h3>

            {/* Honeypot field for spam protection (leave hidden) */}
            <input name="_gotcha" value={form._gotcha} onChange={handleChange} autoComplete="off" tabIndex="-1" className="hp-field" aria-hidden="true" />

            <label>
              Full Name
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <div className="res-error">{errors.name}</div>}
            </label>

            <label>
              Phone Number
              <input name="phone" value={form.phone} onChange={handleChange} />
              {errors.phone && <div className="res-error">{errors.phone}</div>}
            </label>

            <label>
              Email Address
              <input name="email" value={form.email} onChange={handleChange} />
              {errors.email && <div className="res-error">{errors.email}</div>}
            </label>

            <div className="res-row">
              <label>
                Date
                <input name="date" type="date" value={form.date} onChange={handleChange} />
                {errors.date && <div className="res-error">{errors.date}</div>}
              </label>

              <label>
                Time
                <input name="time" type="time" value={form.time} onChange={handleChange} />
                {errors.time && <div className="res-error">{errors.time}</div>}
              </label>
            </div>

            <div className="res-row">
              <label>
                Guests
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                {errors.guests && <div className="res-error">{errors.guests}</div>}
              </label>

              <label style={{ flex: 1 }}>
                Special Requests (Optional)
                <input name="requests" value={form.requests} onChange={handleChange} placeholder="Allergies, seating requests, etc." />
              </label>
            </div>

            <div className="res-actions">
              <button type="submit" className="res-submit">Reserve Now</button>
              <button type="button" className="res-cancel" onClick={close}>Cancel</button>
            </div>

            <p className="res-note">You will receive a confirmation email shortly (if delivery is configured).</p>

            {sendError && <div className="res-error" role="alert">{sendError}</div>}
          </form>
        ) : (
          <div className="res-confirm">
            <h3>Reservation Received</h3>
            <p>Thank you, {form.name || "Guest"}! Your reservation for {form.guests} on {form.date} at {form.time} is received.</p>
            <p>We look forward to serving you at Masakali India.</p>
            <div className="res-actions">
              <button className="res-submit" onClick={close}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}