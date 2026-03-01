
import React, { useEffect, useRef, useState } from 'react';
import './GallerySection.css';


import g1 from '../assets/img/g1.png';
import g2 from '../assets/img/g2.png';
import g3 from '../assets/img/g3.png';
import gg3 from '../assets/img/gg3.png';
import gg4 from '../assets/img/gg4.png';
import gg5 from '../assets/img/gg5.png';
import img12 from '../assets/img/12.png';
import img14 from '../assets/img/14.png';
import img15 from '../assets/img/15.png';
import img17 from '../assets/img/17.png';
import img18 from '../assets/img/18.png';
import img19 from '../assets/img/19.png';
import img20 from '../assets/img/20.png';



const images = [
  g1, g2, g3, gg3, gg4, gg5, img12, img14, img15, img17, img18, img19, img20
];

const GallerySection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const imageCount = images.length;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 3) % imageCount);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [imageCount]);

  // Get three images for the current slide
  const getCurrentImages = () => {
    const imgs = [];
    for (let i = 0; i < 3; i++) {
      imgs.push(images[(currentIdx + i) % imageCount]);
    }
    return imgs;
  };

  return (
    <section className="gallery-section">
      <h2>Photo Gallery</h2>
      <div className="gallery-multi-image">
        {getCurrentImages().map((img, idx) => (
          <img key={idx} src={img} alt={`Gallery ${((currentIdx+idx)%imageCount)+1}`} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
