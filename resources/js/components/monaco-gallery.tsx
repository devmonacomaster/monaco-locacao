import { useState, useRef, useEffect } from "react";
import "./monaco-gallery.css";
import { motion } from "framer-motion";

type Vehicle = {
    name: string;
    image: string;
    details: string;
};

type Category = "todos" | "veiculos" | "caminhoes";

const carsData: Record<Exclude<Category, "todos">, Vehicle[]> = {
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
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setScrollPosition(scrollRef.current.scrollLeft);
            }
        };
        const scrollElement = scrollRef.current;
        scrollElement?.addEventListener("scroll", handleScroll);
        return () => scrollElement?.removeEventListener("scroll", handleScroll);
    }, []);

    const startDragging = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
        document.body.style.userSelect = "none";
    };

    const stopDragging = () => {
        setIsDragging(false);
        document.body.style.userSelect = "";
    };

    const onDragging = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current.offsetLeft || 0);
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
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
                        <button onClick={() => scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" })} className="gallery-single-button prev">&#10094;</button>
                        <button onClick={() => scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" })} className="gallery-single-button next">&#10095;</button>
                    </div>
                </div>
            <div className="container-gallery">
                <motion.div
                    className="gallery-scroll"
                    ref={scrollRef}
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onMouseDown={startDragging}
                    onMouseLeave={stopDragging}
                    onMouseUp={stopDragging}
                    onMouseMove={onDragging}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                >
                    {carsDataWithAll[selectedCategory].map((car, index) => (
                        <div className="image-container" key={index}>
                            <img src={car.image} alt={car.name} draggable="false" />
                            <h3>{car.name}</h3>
                            <p>{car.details}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="gallery-indicator">
                <motion.div
                    className="indicator-bar"
                    animate={{ width: `${(scrollPosition / (scrollRef.current?.scrollWidth || 1)) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
}

export default Gallery;

