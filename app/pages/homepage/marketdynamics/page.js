"use client";
import React, { useState } from 'react';
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import "@/app/pages/homepage/marketdynamics/page.css";
import Card from "@/components/Card";
import marketData from "@/data/marketData";
import { getBaseUrl } from "@/utils/getBaseUrl";

const categories = [
    { id: "seeds", label: "Seeds" },
    { id: "vehicles", label: "Agriculture Vehicles" },
    { id: "chemicals", label: "Agricultural Chemicals" }
];

const Page = () => {
    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        const yOffset = -150;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };


    return (
        <div className="main-marketdynamics-container">
            <NavbarComponent />
            <div className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="toggle-button" onClick={toggleSidebar}>
                    {isSidebarExpanded ? '◀' : '▶'}
                </div>
                {isSidebarExpanded && categories.map(category => (
                    <button key={category.id} onClick={() => handleScroll(category.id)}>
                        {category.label}
                    </button>
                ))}
            </div>
            <div className="content">
                <div className="title" id="seeds">Seeds</div>
                <div className="cards">
                    {Object.keys(marketData).map(key => {
                        const item = marketData[key];
                        if (['wheat', 'rice', 'pearlmillet', 'oats', 'chickpeas', 'mungbeans', 'greenpeas'].includes(key)) {
                            return (
                                <Card
                                    key={key}
                                    Pic={item.image}
                                    name={item.name}
                                    description={item.smallInfo}
                                    path={`${getBaseUrl()}/pages/homepage/marketdynamics/${item.name.toLowerCase().replace(/ /g, '')}`}
                                />
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="title" id="vehicles">Agriculture Vehicles</div>
                <div className="cards">
                    {Object.keys(marketData).map(key => {
                        const item = marketData[key];
                        if (['tractors', 'combineharvesters'].includes(key)) {
                            return (
                                <Card
                                    key={key}
                                    Pic={item.image}
                                    name={item.name}
                                    description={item.smallInfo}
                                    path={`${getBaseUrl()}/pages/homepage/marketdynamics/${item.name.toLowerCase().replace(/ /g, '')}`}
                                />
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="title" id="chemicals">Agricultural Chemicals</div>
                <div className="cards">
                    {Object.keys(marketData).map(key => {
                        const item = marketData[key];
                        if (['fertilizers', 'pesticides'].includes(key)) {
                            return (
                                <Card
                                    key={key}
                                    Pic={item.image}
                                    name={item.name}
                                    description={item.smallInfo}
                                    path={`${getBaseUrl()}/pages/homepage/marketdynamics/${item.name.toLowerCase().replace(/ /g, '')}`}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default Page;
