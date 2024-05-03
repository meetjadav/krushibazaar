"use client"
import { useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
import "@/app/pages/marketdynamics/page.css";
import "@/components/Separator";
import Separator from '@/components/Separator';

const HomePage = () => {
    const [searchInput, setSearchInput] = useState('');
    const [latitude, setLatitude] = useState(23.0225); // Default latitude
    const [longitude, setLongitude] = useState(72.5714); // Default longitude

    const handleSearch = () => {
        // Check if search input is latitude, longitude format
        const coordinates = searchInput.split(',');
        if (coordinates.length === 2 && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
            setLatitude(parseFloat(coordinates[0]));
            setLongitude(parseFloat(coordinates[1]));
        } else {
            // Use a geocoding service to get latitude and longitude for the location
            // Example: You can use the OpenCage Geocoding API
            // and update latitude and longitude states accordingly
        }
    };

    return (
        <div className="market_page">
            <Navbar />
            <div className="search-container">
                <div className="title">
                    Weather Information
                </div>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Enter location or latitude,longitude"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>

            <Weather latitude={latitude} longitude={longitude} />
            <Separator />
            <Footer />
        </div>
    );
};

export default HomePage;
