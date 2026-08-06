import React, { useState } from 'react';
import './monaco-carousel.css';

interface CarouselSlide {
  src: string;
  href?: string;
}

interface CarouselProps {
  images: CarouselSlide[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = images[currentIndex];
  const slideImage = (
    <img
      src={current.src}
      alt={`Slide ${currentIndex}`}
      className="carousel-image"
    />
  );

  return (
    <div className="carousel">
      {current.href ? (
        <a href={current.href} className="carousel-link">
          {slideImage}
        </a>
      ) : (
        slideImage
      )}

      {/* Botão Anterior */}
      <button onClick={prevSlide} className="carousel-button prev">
        &#10094;
      </button>

      {/* Botão Próximo */}
      <button onClick={nextSlide} className="carousel-button next">
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
