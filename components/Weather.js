// components/WeatherComponent.js
"use client"
// pages/index.js
import "@/components/Weather.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const [weatherForecast, setWeatherForecast] = useState(null);
    const longitude = 72.5714;
    const latitude = 23.0225;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setWeatherForecast(response.data);
            } catch (error) {
                console.error('Error fetching weather forecast:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <div className="weather-container">
            {weatherForecast && (
                <div className="weather-forecast">
                    <div className="weather-info">
                        <p className="weather-temperature">Temp: {weatherForecast.current.temperature_2m}°C</p>
                        <p className="weather-wind"> Speed: {weatherForecast.current.wind_speed_10m} m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
