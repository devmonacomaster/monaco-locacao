import { useState } from "react";
import "../../css/components/monaco-gallery.css";

type Vehicle = {
    name: string;
    image: string;
    details: string;
};

type Category = "todos" | "veiculos" | "caminhoes";

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

const carsDataWithAll: Record<Category, Vehicle[]> = {
    todos: [...carsData.veiculos, ...carsData.caminhoes],
    ...carsData,
};

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("todos");
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredCars = carsDataWithAll[selectedCategory];
    const totalItems = filteredCars.length;

    const changeSlide = (direction: 1 | -1) => {
        setCurrentIndex((prev) => (prev + direction + totalItems) % totalItems);
    };

    return (
        <div className="container">
            <h1 className="title">Explore o nosso portfólio</h1>

            <ul className="list-option">
                {Object.keys(carsDataWithAll).map((category) => (
                    <li
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => {
                            setSelectedCategory(category as Category);
                            setCurrentIndex(0);
                        }}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </li>
                ))}
            </ul>

            <div className="gallery">
                <div className="image-container">
                    <img src={filteredCars[currentIndex].image} alt={filteredCars[currentIndex].name} />
                    <h3>{filteredCars[currentIndex].name}</h3>
                    <p>{filteredCars[currentIndex].details}</p>
                </div>
            </div>

            <div className="gallery-indicators">
                <div
                    className="gallery-indicator"
                    style={{ width: `${100 / totalItems}%`, transform: `translateX(${(currentIndex / totalItems) * 900}%)` }}
                ></div>
            </div>

            <div className="gallery-buttons">
                <button onClick={() => changeSlide(-1)} className="gallery-button prev">&#10094;</button>
                <button onClick={() => changeSlide(1)} className="gallery-button next">&#10095;</button>
            </div>
        </div>
    );
}

export default Gallery;
