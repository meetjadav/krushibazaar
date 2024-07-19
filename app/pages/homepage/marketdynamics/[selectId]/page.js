"use client";

import { useEffect, useState } from 'react';
import FooterComponent from "@/components/Footer/Footer";
import NavbarComponent from "@/components/Navbar/Navbar";
import marketData from "@/data/marketData";
import "@/app/pages/homepage/marketdynamics/[selectId]/page.css";
import Image from 'next/image';
import LoadingComponent from "@/components/Loading/Loading";

const Page = ({ params }) => {
    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState(null);
    const [failureMessage, setFailureMessage] = useState(null);
    const selectId = params.selectId;

    useEffect(() => {
        if (selectId) {
            const marketItem = marketData[selectId];
            if (marketItem) {
                setData(marketItem);
            } else {
                setData(null);
            }
        }
    }, [selectId]);

    if (selectId === undefined) {
        return <div>Invalid ID</div>;
    }
    if (!data) {
        return (<div className="main-cardinfo-container">
            <NavbarComponent />
            <LoadingComponent />
            <FooterComponent />
        </div>)
    }
    const handleBuyNow = async () => {
        const requestData = {
            id: selectId,
            quantity: quantity,
            name: data.name,
            price: data.price,
        };

        const response = await fetch('/api/itemsbackend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {

            console.log('Purchase successful');
            setSuccessMessage('Purchase successful');
        } else {
            console.error('Purchase failed');
            setFailureMessage('Purchase failed!');
        }
    };

    return (
        <div className="main-cardinfo-container">
            <NavbarComponent />
            <div className="title">
                {data.name}
            </div>
            <div className="detail-container">
                <Image src={data.image} alt={data.name} className='detail-image' />
                <p className="detail-description">
                    {data.description}
                </p>
                <p className="detail-farmersrecomendations">
                    {data.farmerRecommendation}
                </p>
                <p className="detail-price">
                    Price: ${data.price}/{data.unit}
                </p>
                <div className="quantity-selector">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button className="btn-buynow" onClick={handleBuyNow}>
                    Buy Now
                </button>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {failureMessage && <p className="failure-message">{failureMessage}</p>}
            </div>
            <FooterComponent />
        </div >
    );
};

export default Page;
