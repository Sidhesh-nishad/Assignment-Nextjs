import Community from "@/components/Community";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Listing />
            <Testimonials />
            <Community />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Home;
