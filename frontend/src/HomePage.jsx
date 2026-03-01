import TopNavbar from "./TopNavbar";    
import VideoHeader from "./VideoHeader";
import MenuTabs from "./MenuTabs";
import FoodGallery from "./FoodGallery";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <TopNavbar />

      {/* Floating side promo (click to jump to menu) */}
      <div className="butter-side" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} role="link" aria-label="Jump to Butter Chicken">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M14.5 9.5c.828 0 1.5-.672 1.5-1.5S15.328 6.5 14.5 6.5 13 7.172 13 8s.672 1.5 1.5 1.5z" fill="#d35400" />
          <path d="M5.5 14.5c0 1.933 1.567 3.5 3.5 3.5h6.586c1.38 0 2.678-.56 3.636-1.556l.778-.78a1 1 0 0 0 0-1.414l-3.293-3.293a1 1 0 0 0-1.414 0l-.78.777A3.48 3.48 0 0 1 13.586 14H9c-.828 0-1.5.672-1.5 1.5v-.001z" fill="#f5c27a" />
          <path d="M18.5 8.5l2 2" stroke="#a35400" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <div className="bc-sub">No better than</div>
          <div className="bc-text">Butter Chicken</div>
          
        </div>
      </div>

      <main style={layout.content}>
        {/* Video Hero */}
        <VideoHeader />


        {/* Menu */}
        <section id="menu" className="home-menu-section">
          <div className="menu-heading">
            <h2>Our Authentic Specialties</h2>
            <div className="menu-sub">All dishes are made with premium-quality butter — rich and creamy.</div>
          </div>

          <MenuTabs />
          <FoodGallery />
        </section>

        {/* Contact */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Locations & Contact</h2>

          <div className="home-contact">
            <div className="home-contact-card">
              <p className="contact-item"><strong>Cupertino:</strong> location</p>
              <p className="contact-item">📞 phone</p>
              <p className="contact-item">✉️ email</p>

              <div className="contact-actions">
                <a className="contact-btn" href="tel">Call</a>
                <a className="contact-btn" href="mailto:email">Email</a>
                <a className="contact-btn" href="/contact">Contact Page</a>
              </div>
            </div>

            <div className="home-contact-map">Map placeholder</div>
          </div>
        </section>
      </main>
    </>
  );
}

const layout = {
  content: {
    paddingTop: "80px", // space for fixed navbar
    paddingLeft: "3rem",
    paddingRight: "3rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Inter, system-ui, sans-serif",
  },
};

const styles = {
  section: {
    paddingLeft: "5rem",
    width:"100%",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginLeft: "30rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
    color: "#555",
    lineHeight: "1.8",
  },
};

export default HomePage;
