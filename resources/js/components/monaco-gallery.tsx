import { useState } from "react";
import "../../css/components/monaco-gallery.css";

// Dados dos veículos e caminhões
const carsData = {
    veiculos: [
        { name: "RAMPAGE LARAMIE", image: "/images/cars/rampage_laramie.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE REBEL", image: "/images/cars/rampage_rebel.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE RT", image: "/images/cars/rampage_rt.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE ENDURANCE", image: "/images/cars/strada_endurance.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE FREEDOM", image: "/images/cars/strada_freedom.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE RANCH", image: "/images/cars/strada_ranch.png", details: "Diesel - 24/24" },
        { name: "RAMPAGE ULTRA", image: "/images/cars/strada_ultra.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE VOLCANO", image: "/images/cars/strada_volcano.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE TITANO", image: "/images/cars/titano_titano.webp", details: "Diesel - 24/24" },
    ],
    caminhoes: [
        { name: "CAMINHÃO CONSTELLATION", image: "/images/truck/constellation.png", details: "Diesel - 23/24" },
        { name: "CAMINHÃO DELIVERY", image: "/images/truck/delivery.png", details: "Diesel - 23/24" },
        { name: "CAMINHÃO E-DELIVERY", image: "/images/truck/e-delivery.png", details: "Diesel - 23/24" },
        { name: "CAMINHÃO METEOR", image: "/images/truck/meteor.png", details: "Diesel - 23/24" },
    ]
};

// Criar a categoria "todos" dinamicamente
const carsDataWithAll = { todos: [...carsData.veiculos, ...carsData.caminhoes], ...carsData };

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof carsDataWithAll>("todos");
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredCars = carsDataWithAll[selectedCategory];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCars.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredCars.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="container">
                <h1 className="title">Explore o nosso portfólio</h1>

                {/* Categorias */}
                <ul className="list-option">
                    {Object.keys(carsDataWithAll).map((category) => (
                        <li
                            key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => {
                                setSelectedCategory(category as keyof typeof carsDataWithAll);
                                setCurrentIndex(0); // Resetar índice ao mudar categoria
                            }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </li>
                    ))}
                </ul>

                {/* Imagem do veículo */}
                <div className="gallery">
                    <div className="image-container">
                        <img
                            src={filteredCars[currentIndex].image}
                            alt={filteredCars[currentIndex].name}
                        />
                        <h3>{filteredCars[currentIndex].name}</h3>
                        <p>{filteredCars[currentIndex].details}</p>
                    </div>
                </div>

                {/* Indicadores do carrossel */}
                <div className="gallery-indicators">
                    <div
                        className="gallery-indicator"
                        style={{
                            width: `${100 / filteredCars.length}%`, // Cada item ocupa a fração certa da barra
                            transform: `translateX(${(currentIndex / filteredCars.length) * 900}%)`
                        }}
                    ></div>
                </div>


                {/* Botões de navegação */}
                <div className="gallery-buttons">
                    <button onClick={prevSlide} className="gallery-button prev">&#10094;</button>
                    <button onClick={nextSlide} className="gallery-button next">&#10095;</button>
                </div>

            </div>
        </>
    );
}

export default Gallery;
