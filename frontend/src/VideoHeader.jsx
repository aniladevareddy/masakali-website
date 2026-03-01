import "./videoHero.css";
import heroVideoMp4 from "./assets/video/vid.mp4";

function VideoHeader() {
  return (
    <section className="video-hero-section" id="home">
      {/* Video Background */}
      <div className="video-hero-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-hero-bg"
        >
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="video-hero-overlay"></div>

      {/* Content */}
      <div className="video-hero-content">
        <div className="video-hero-inner">
          <span className="video-hero-subtitle">
            Premium Dining Experience
          </span>

          <h1 className="video-hero-title">@ Masakali California</h1>

          <p className="video-hero-description">
            Discover our carefully crafted menu featuring seasonal ingredients
            and innovative culinary techniques.
          </p>

          <div className="video-hero-buttons">
            <a  href="/menu" className="video-hero-btn">
              View Menu
            </a>
            <button type="button" className="video-hero-btn" onClick={() => window.dispatchEvent(new Event('open-reservation'))}>
              Make Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoHeader;
