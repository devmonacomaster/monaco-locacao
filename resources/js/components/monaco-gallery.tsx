import { useState, useRef } from "react";
import "./monaco-gallery.css";

type Vehicle = {
    name: string;
    image: string;
    details: string;
};

type Category = "todos" | "veiculos" | "caminhoes";

const carsData = {
    veiculos: [
        { name: "RAMPAGE RT", image: "/images/cars/rampage_rt.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE REBEL", image: "/images/cars/rampage_rebel.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE LARAMIE", image: "/images/cars/rampage_laramie.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE ENDURANCE", image: "/images/cars/strada_endurance.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE FREEDOM", image: "/images/cars/strada_freedom.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE RANCH", image: "/images/cars/strada_ranch.png", details: "Diesel - 24/24" },
        { name: "RAMPAGE ULTRA", image: "/images/cars/strada_ultra.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE VOLCANO", image: "/images/cars/strada_volcano.webp", details: "Diesel - 24/24" },
        { name: "RAMPAGE TITANO", image: "/images/cars/titano_titano.webp", details: "Diesel - 24/24" },
    ],
    caminhoes: [
        { name: "CONSTELLATION", image: "/images/truck/constellation.png", details: "Diesel - 24/24" },
        { name: "DELIVERY", image: "/images/truck/delivery.png", details: "Diesel - 24/24" },
        { name: "E-DELIVERY", image: "/images/truck/e-delivery.png", details: "Diesel - 24/24" },
        { name: "METEOR", image: "/images/truck/meteor.png", details: "Diesel - 24/24" },
        { name: "VOCACIONAIS", image: "/images/truck/vocacionais.png", details: "Diesel - 24/24" },
        { name: "ESCOLAR", image: "/images/truck/escolar.png", details: "Diesel - 24/24" },
    ]
};

const carsDataWithAll: Record<Category, Vehicle[]> = {
    todos: [...carsData.veiculos, ...carsData.caminhoes],
    ...carsData,
};

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("todos");
    const scrollRef = useRef<HTMLDivElement>(null);

    const filteredCars = carsDataWithAll[selectedCategory];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 350;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="container-gallery-all">
            <h1 className="title">Explore o nosso portfólio</h1>

            <div className="list-option-container">
                <ul className="list-option">
                    {Object.keys(carsDataWithAll).map((category) => (
                        <li
                            key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => setSelectedCategory(category as Category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </li>
                    ))}
                </ul>
                <div className="gallery-buttons-inline">
                    <button 
                        onClick={() => scroll("left")}
                        className="gallery-single-button prev">&#10094;
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="gallery-single-button next">&#10095;
                    </button>
                </div>
            </div>
            <div className="container-gallery">
                <div className="gallery-scroll" ref={scrollRef}>
                    {filteredCars.map((car, index) => (
                        <div className="image-container" key={index}>
                            <img src={car.image} alt={car.name} />
                            <h3>{car.name}</h3>
                            <p>{car.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
