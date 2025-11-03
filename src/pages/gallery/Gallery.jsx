import React, { useState } from "react";
import "./Gallery.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const images = [
    "./assets/images/gallery1.png",
    "./assets/images/gallery2.png",
    "./assets/images/gallery3.png",
    "./assets/images/gallery4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Calculate left and right images for preview
  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Interior Gallery</h2>

      <div className="gallery-container">
       
        <div className="gallery-image dimmed">
          <img src={images[leftIndex]} alt="left" />
          <button className="arrow-btn left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
        </div>

        
        <div className="gallery-image active">
          <img src={images[currentIndex]} alt="center" />
        </div>

     
        <div className="gallery-image dimmed">
          <img src={images[rightIndex]} alt="right" />
          <button className="arrow-btn right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <button className="fullscreen-btn">FullScreen Gallery</button>
    </section>
  );
};

export default Gallery;
