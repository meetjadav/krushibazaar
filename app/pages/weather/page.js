"use client"
import React, { useState } from 'react';
import WeatherComponent from '@/components/Weather';
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import SeparatorComponent from '@/components/Separator';
import "../weather/page.css";

const Page = () => {
    const [searchInput, setSearchInput] = useState('');
    const [latitude, setLatitude] = useState(23.0225); // Default latitude
    const [longitude, setLongitude] = useState(72.5714); // Default longitude

    const handleSearch = () => {
        const coordinates = searchInput.split(',');
        if (coordinates.length === 2 && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
            setLatitude(parseFloat(coordinates[0]));
            setLongitude(parseFloat(coordinates[1]));
        } else {
            // Handle location string input
        }
    };



    return (
        <div className="main-weather-container">
            <NavbarComponent />
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
            <WeatherComponent latitude={latitude} longitude={longitude} />
            <FooterComponent />
        </div>
    );
};

export default Page;
