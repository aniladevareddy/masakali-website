import React, { useRef } from 'react';
import heroVideo from '../assets/video/vid1.mp4';
import './HeroSection.css';


const HeroSection = () => {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      // Start from halfway point
      video.currentTime = video.duration / 2;
    }
  };

  return (
    <section className="hero-section">
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onLoadedMetadata={() => {
          const video = videoRef.current;
          if (video) {
            video.currentTime = 24;
          }
        }}
        onTimeUpdate={() => {
          const video = videoRef.current;
          if (video && video.currentTime >= 45) {
            video.currentTime = 24;
          }
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        {/* Heading removed as requested */}
        {/* Subheading removed as requested */}
      </div>
    </section>
  );
};

export default HeroSection;
