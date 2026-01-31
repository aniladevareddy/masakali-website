import TopNavbar from "../header/TopNavbar";
import "./ContactPage.css";
import bg from "../../assets/img/background.jpg"; // ✅ same background image

export default function ContactPage() {
  return (
    <>
      <TopNavbar />

      <main
        className="contact-page"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 12, 16, 0.78), rgba(11, 12, 16, 0.9)), url(${bg})`,
        }}
      >
        <section className="contact-hero">
          <h2 className="contact-heading">Locations & Contact</h2>

          <div className="contact-card">
            {/* LEFT: DETAILS */}
            <div className="contact-details">
              <p><strong>Masakali Restaurant</strong></p>
              <p>📍 1015 Rue Sherbrooke O, Montreal, QC, H3A 1G5</p>
              <p>📞 <a href="tel:(514)228-6777">(514) 228-6777</a></p>
              <p>✉️ <a href="mailto:masakalimontreal@gmail.com">masakalimontreal@gmail.com</a></p>

              <div className="contact-actions">
                <a className="contact-btn" href="tel:(514)228-6777">Call Us</a>
                <a className="contact-btn" href="mailto:masakalimontreal@gmail.com">Email</a>
                <a className="contact-btn ghost" href="/menu">View Menu</a>
              </div>
            </div>

            {/* RIGHT: MAP */}
            <div className="contact-map">
              <iframe
                title="Masakali Location"
                src="https://maps.google.com/maps?q=1015%20Rue%20Sherbrooke%20O%20Montreal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
