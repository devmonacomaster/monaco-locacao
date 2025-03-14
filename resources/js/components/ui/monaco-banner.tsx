import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerProps {
  images: string[];
  height?: string;
}

const Banner: React.FC<BannerProps> = ({ images, height = "500px" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Imagem ativa */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Botão esquerdo */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Botão direito */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Banner;
