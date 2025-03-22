import { useState } from "react";
import "../../css/components/monaco-gallery.css";

// Dados dos veículos e caminhões
const carsData = {
    veiculos: [
        { name: "Rampage Laramie", image: "/images/cars/rampage_laramie.webp", details: "Diesel - 24/24" },
        { name: "Rampage Rebel", image: "/images/cars/rampage_rebel.webp", details: "Diesel - 24/24" },
        { name: "Rampage RT", image: "/images/cars/rampage_rt.webp", details: "Diesel - 24/24" },
        { name: "Rampage Endurance", image: "/images/cars/rampage_endurance.webp", details: "Diesel - 24/24" },
        { name: "Rampage Freedom", image: "/images/cars/rampage_freedom.webp", details: "Diesel - 24/24" },
        { name: "Rampage Ranch", image: "/images/cars/rampage_ranch.png", details: "Diesel - 24/24" },
        { name: "Rampage Ultra", image: "/images/cars/rampage_ultra.webp", details: "Diesel - 24/24" },
        { name: "Rampage Volcano", image: "/images/cars/rampage_volcano.webp", details: "Diesel - 24/24" },
        { name: "Rampage Titano", image: "/images/cars/rampage_titano.webp", details: "Diesel - 24/24" },
    ],
    caminhoes: [
        { name: "Caminhão Constellation", image: "/images/truck/constellation.png", details: "Diesel - 23/24" },
        { name: "Caminhão Delivery", image: "/images/truck/delivery.png", details: "Diesel - 23/24" },
        { name: "Caminhão e-Delivery", image: "/images/truck/e-delivery.png", details: "Diesel - 23/24" },
        { name: "Caminhão Meteor", image: "/images/truck/meteor.png", details: "Diesel - 23/24" },
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
                    {filteredCars.map((_, index) => (
                        <span
                            key={index}
                            className={`gallery-indicator ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
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
