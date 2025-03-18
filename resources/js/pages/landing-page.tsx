import MonacoHeader from "@/components/monaco-header";
import Carousel from "@/components/ui/monaco-carousel";
import SectionOne from "@/components/monaco-section-one";
import SectionTwo from "@/components/monaco-section-two";

const images = [
    '/images/banner-1.webp',
    '/images/banner-2.webp',
    '/images/banner-3.webp',
];

function LandingPage() {
    return (
        <div>
            <MonacoHeader />
            <Carousel images={images} />
            <SectionOne />
            {/* <SectionTwo /> */}
        </div>
    );
}

export default LandingPage;
