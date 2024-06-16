"use client";

import { useEffect, useState } from 'react';
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import marketData from "@/data/marketData"; // Adjust the path based on your project structure
import "@/app/pages/homepage/marketdynamics/[selectId]/page.css"
import Image from 'next/image';
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = ({ params }) => {
    const [data, setData] = useState(null);
    const selectId = params.selectId;

    useEffect(() => {
        if (selectId) {
            const marketItem = marketData[selectId];
            if (marketItem) {
                setData(marketItem);
            } else {
                setData(null); // In case the ID doesn't match any data
            }
        }
    }, [selectId]);

    if (selectId === undefined) {
        return <div>Invalid ID</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main-cardinfo-container">
            <NavbarComponent />
            <div className="title">
                {data.name}
            </div>
            <div className="detail-container">
                <Image src={data.image} alt={data.name} width={700} height={700} className='detail-image' />
                <p className="detail-discription">
                    {data.description}
                </p>
                <p className="detail-farmersrecomendations">
                    {data.farmerRecommendation}
                </p>
                <p className="detail-price">
                    Price: {data.price}
                </p>
                <a className="btn-buynow" href={getBaseUrl()}>
                    Buy Now
                </a>
            </div>

            <FooterComponent />
        </div>
    );
};

export default Page;
