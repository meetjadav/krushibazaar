"use client";
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import "@/app/pages/marketdynamics/page.css";
import Card from "@/components/Card";
import marketData from "@/data/marketData"; // Adjust the path based on your project structure
import { getBaseUrl } from "@/utils/getBaseUrl";

const Page = () => {
    return (
        <div className="main-marketdynamics-container">
            <NavbarComponent />
            <div className="title">
                Grains
            </div>
            <div className="cards">
                {Object.keys(marketData).map(key => {
                    const item = marketData[key];
                    if (['wheat', 'rice', 'pearlmillet', 'oats'].includes(key)) {
                        return (
                            <Card
                                key={key}
                                Pic={item.image}
                                name={item.name}
                                description={item.smallInfo}
                                path={getBaseUrl()}
                            />
                        );
                    }
                    return null;
                })}
            </div>

            <div className="title">
                Pulses
            </div>
            <div className="cards">
                {Object.keys(marketData).map(key => {
                    const item = marketData[key];
                    if (['chickpeas', 'mungbeans', 'greenpeas'].includes(key)) {
                        return (
                            <Card
                                key={key}
                                Pic={item.image}
                                name={item.name}
                                description={item.smallInfo}
                                path={getBaseUrl()}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <FooterComponent />
        </div>
    );
};

export default Page;
