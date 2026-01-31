import { Link } from "react-router-dom";
import "./Footer.css";

// update these paths to your project
import logoLight from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="ft">
      {/* TOP FOOTER */}
      <div className="ft-top">
        <div className="ft-container">
          <div className="ft-box">
            <div className="ft-grid">
              {/* About */}
              <div className="ft-col">
                <h4 className="ft-title">About Us</h4>
                <p className="ft-text">
                  Enjoy authentic flavors at Masakali Restaurant, where every dish is crafted
                  with passion and fresh ingredients.
                </p>

                <ul className="ft-social" aria-label="Social links">
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="YouTube">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/masakalimontreal?igsh=eGV0MHE3M2JpcXlw&utm_source=qr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="ft-col">
                <h4 className="ft-title">Useful Links</h4>
                <ul className="ft-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="ft-col">
                <h4 className="ft-title">Contact Info</h4>

                <ul className="ft-contact">
                  <li>
                    <span className="ft-ico">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    <span className="ft-contact-text">
                      1015 Rue Sherbrooke O, Montreal, QC, H3A 1G5
                    </span>
                  </li>

                  <li>
                    <span className="ft-ico">
                      <a href="tel:(514)228-6777" aria-label="Call">
                        <i className="fas fa-phone" />
                      </a>
                    </span>
                    <span className="ft-contact-text">
                      <a href="tel:(514)228-6777">(514) 228-6777</a>
                    </span>
                  </li>

                  <li>
                    <span className="ft-ico">
                      <i className="fas fa-envelope" />
                    </span>
                    <span className="ft-contact-text">
                      <a href="mailto:masakalimontreal@gmail.com">
                        masakalimontreal@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Book a Table */}
              <div className="ft-col">
                <h4 className="ft-title">Book a Table</h4>
                <p className="ft-text">Reserve your dining experience in advance.</p>

                <Link to="/reservation" className="ft-btn">
                  Reserve now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="ft-bottom">
        

        <div className="ft-container">
          <div className="ft-bottom-row">
            <div className="ft-logo">
              <img src={logoLight} alt="Masakali logo" />
            </div>

            <div className="ft-copy">
              © Copyright {new Date().getFullYear()} Masakali. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
