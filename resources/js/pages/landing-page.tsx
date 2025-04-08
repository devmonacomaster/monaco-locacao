import { useRef } from "react";
import MonacoHeader from "@/components/monaco-header";
import Carousel from "@/components/ui/monaco-carousel";
import SectionOne from "@/components/monaco-section-one";
import SectionTwo from "@/components/monaco-section-two";
import Gallery from "@/components/monaco-gallery";
import AboutUs from "@/components/monaco-about";
import ContactForm from "@/components/monaco-form";
import Footer from "@/components/monaco-footer";

const images = [
    '/images/banner-1.webp',
    '/images/banner-2.webp',
    '/images/banner-3.webp',
];

function LandingPage() {
    const galleryRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <MonacoHeader
                galleryRef={galleryRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
            />

            <Carousel images={images} />

            <SectionOne />
            
            <SectionTwo />

            <div ref={galleryRef}>
                <Gallery />
            </div>

            <div ref={aboutRef}>
                <AboutUs />
            </div>

            <ContactForm />

            <div ref={contactRef}>
                <Footer />
            </div>


        </>
    );
}

export default LandingPage;
