"use client"
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import "@/app/pages/marketdynamics/page.css";
import "@/components/Separator";
import SeparatorComponent from '@/components/Separator';

const Page = () => {

    return (
        <div className="market_page">
            <NavbarComponent />

            <FooterComponent />
        </div>
    );
};

export default Page;
