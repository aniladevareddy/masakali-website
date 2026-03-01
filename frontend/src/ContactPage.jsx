import TopNavbar from "./TopNavbar";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <TopNavbar />
      <main className="contact-page">
        <div className="contact-hero">
          <h2 className="contact-heading">Locations & Contact</h2>

          <div className="contact-card">
            <div className="contact-details">
              <p><strong>City</strong> Location</p>
              <p>📞 phone</p>
              <p>✉️ email</p>

              <div className="contact-actions">
                <a className="contact-btn" href="tel">Call Us</a>
                <a className="contact-btn" href="mailto:email">Email</a>
                <a className="contact-btn" href="/menu">View Menu</a>
              </div>
            </div>

            <div className="contact-map">Map placeholder</div>
          </div>
        </div>
      </main>
    </>
  );
}
