"use client";
import "@/components/Loading.css";
import React, { useState, useEffect } from 'react';

const LoadingWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener('DOMContentLoaded', handleLoad);
        }

        return () => {
            window.removeEventListener('DOMContentLoaded', handleLoad);
        };
    }, []);

    if (isLoading) {
        return (
            <div className="main-spinner-container">
                <div className="spinner">
                </div>
            </div >
        );
    }

    return <>{children}</>;
};

export default LoadingWrapper;

