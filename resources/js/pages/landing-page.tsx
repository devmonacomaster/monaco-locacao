import MonacoHeader from "@/components/monaco-header";
import Carousel from "@/components/ui/monaco-carousel";

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
        </div>
    );
}

export default LandingPage;
