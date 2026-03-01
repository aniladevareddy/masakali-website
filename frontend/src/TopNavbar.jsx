import { Link } from "react-router-dom";
import lono from "./assets/img/logo.png"; 

export default function TopNavbar() {
  return (
    <header style={styles.header}>
      <div style={styles.navbar}>
        {/* CENTER: Menu */}
        <ul style={styles.menu}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About Us</Link></li>
          <li><Link to="/menu" style={styles.link}>Menu</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
        </ul>

         <img src={lono} alt="Lono" style={styles.logo} />

        {/* RIGHT: Phone & Location */}
        <ul style={styles.info}>
          <li>
            <a href="tel:" style={styles.infoLink}>
              <i style={styles.icon} className="fa-solid fa-phone"></i>
              phone
            </a>
          </li>
          <li>
            <a
              href="location"
              target="_blank"
              rel="noreferrer"
              style={styles.infoLink}
            >
              <i style={styles.icon} className="fa-solid fa-location-dot"></i>
              Location
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

const styles = {
  header: { position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" },
  navbar: { maxWidth: "1400px", margin: "0 auto", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" },
  menu: { display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 },
  link: { color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1rem", whiteSpace: "nowrap" },
  info: { display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 },
  infoLink: { display: "flex", alignItems: "center", gap: "0.5rem", color: "#fff", textDecoration: "none", fontSize: "0.9rem", whiteSpace: "nowrap" },
  icon: { marginTop: "4px" },
  logo: { width: 160, height: 80, objectFit: "contain", borderRadius: 8 }
};
