// pages/prices.js

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import "../marketdynamics/page.css"; // assuming this CSS file contains the original styles // import the new CSS file for PricesPage
const PricesPage = () => {
    // Define static prices
    const prices = [
        { item: 'Wheat', price: '$2.50 per kg' },
        { item: 'Rice', price: '$3.00 per kg' },
        { item: 'Apples', price: '$1.20 per kg' },
        { item: 'Bananas', price: '$0.80 per kg' },
        { item: 'Oranges', price: '$1.00 per kg' },
        // Add more items as needed
    ];

    return (
        <div className="prices-full-box">
            <Navbar />
            <main>
                <div className="prices-para1">
                    <span className="prices-title1">Prices</span>
                    <div className="prices-boxes1">
                        <ul className="prices-price-list">
                            {prices.map((item, index) => (
                                <li key={index} className="prices-price-box">
                                    {item.item}: {item.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="prices-separator"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PricesPage;