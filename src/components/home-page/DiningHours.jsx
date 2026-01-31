import "./DiningHours.css";
import heroVideo from "../../assets/video/vid.mp4"; // adjust path if needed

export default function DiningHours() {
  return (
    <section className="dh-section">
      <div className="dh-container">
        <div className="dh-grid">

          {/* LEFT: Video */}
          <div className="dh-video-wrap">
            <video
              className="dh-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>

          {/* RIGHT: Info */}
          <div className="dh-info">
            <h3 className="dh-title">Dining Hours</h3>

            <p className="dh-desc">
              Experience authentic Indian flavors in a warm and inviting
              ambiance. We bring traditional recipes together with modern
              hospitality.
            </p>

            <ul className="dh-hours">
              <li>
                <strong>Open Daily:</strong>
                <span>11:30 AM – 11:00 PM</span>
              </li>
            </ul>

            <div className="dh-cta">
              <div className="dh-cta-text">
                <p>For Reservations</p>
                <h4>
                  <a href="tel:(514)228-6777">(514) 228-6777</a>
                </h4>
              </div>
            </div>

            <a href="/about" className="dh-btn">
              Reservation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
