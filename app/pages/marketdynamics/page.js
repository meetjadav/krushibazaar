// pages/index.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WeatherComponent from "@/components/Weather";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <WeatherComponent />
            <Footer />
        </div>
    );
};

export default HomePage;
