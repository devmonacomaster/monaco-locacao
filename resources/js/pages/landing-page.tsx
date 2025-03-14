import MonacoHeader from "@/components/monaco-header";
import Carousel from "@/components/ui/monaco-carousel";

const images = [
    '/images/banner.webp',
    '/images/banner.webp',
    '/images/banner.webp',
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
