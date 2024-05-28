"use client"
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import "@/app/pages/marketdynamics/page.css";
import CardComponent from "@/components/Card";
import importImages from "@/utils/importImages"; // Adjust the path based on your project structure
const images = importImages(require.context("@/public/MarketImages"));
import SeparatorComponent from '@/components/Separator';
import { getBaseUrl } from "@/utils/getBaseUrl";

const Page = () => {

    return (
        <div className="main-marketdynamics-container">
            <NavbarComponent />
            <div className="title">
                Grains
            </div>
            <div className="cards">
                <CardComponent Pic={images['./wheat.jpg']} name='Wheat' description='Feel the wrath of the wheat.' path={`${getBaseUrl()}`} />
                <CardComponent Pic={images['./rice.jpg']} name='Rice' description='Life is better with a bowl of rice.' path={`${getBaseUrl()}`} />
                <CardComponent Pic={images['./pearlmillet.jpg']} name='Pearl-Millet(Bajra)' description='Premium and Best Quality.' path={`${getBaseUrl()}`} />
                <CardComponent Pic={images['./oats.jpg']} name='Oats' description='Powerful, nutritious oat goodness.' path={`${getBaseUrl()}`} />

            </div>

            <div className="title">
                Pulses
            </div>
            <div className="cards">
                <CardComponent Pic={images['./chickpeas.jpg']} name='Chickpeas(Chana)' description='Chana: Protein-packed delight.' path={`${getBaseUrl()}`} />
                <CardComponent Pic={images['./wheat.jpg']} name='Wheat' description='Feel the wrath of the wheat.' path={`${getBaseUrl()}`} />
                <CardComponent Pic={images['./pearlmillet.jpg']} name='Pearl-Millet(Bajra)' description='Premium and Best Quality.' path={`${getBaseUrl()}`} />

            </div>
            <FooterComponent />
        </div>
    );
};

export default Page;
