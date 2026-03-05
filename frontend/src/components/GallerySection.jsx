
import React, { useEffect, useRef, useState } from 'react';
import './GallerySection.css';

// Dynamically import all images from ../assets/images using Vite's glob
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
const imageList = Object.values(images);

const GallerySection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const imageCount = imageList.length;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 3) % imageCount);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [imageCount]);

  // Get three images for the current slide
  const getCurrentImages = () => {
    const imgs = [];
    for (let i = 0; i < 3; i++) {
      imgs.push(imageList[(currentIdx + i) % imageCount]);
    }
    return imgs;
  };

  return (
    <section className="gallery-section">
      <h2>Photo Gallery</h2>
      <div className="gallery-multi-image">
        {(() => {
          const imgs = getCurrentImages();
          return (
            <>
              {imgs[0] ? <img src={imgs[0]} alt={`Gallery ${(currentIdx%imageCount)+1}`} /> : null}
              {imgs[1] ? <img src={imgs[1]} alt={`Gallery ${((currentIdx+1)%imageCount)+1}`} /> : null}
              {imgs[2] ? <img src={imgs[2]} alt={`Gallery ${((currentIdx+2)%imageCount)+1}`} /> : null}
            </>
          );
        })()}
      </div>
    </section>
  );
};

export default GallerySection;
