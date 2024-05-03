"use client"
import "@/components/Weather.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Separator from "@/components/Separator";

const WeatherComponent = ({ latitude, longitude }) => {
    const [weatherForecast, setWeatherForecast] = useState(null);
    const [locationName, setLocationName] = useState(null);
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    const reverseGeocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [weatherResponse, locationResponse] = await Promise.all([
                    axios.get(apiUrl),
                    axios.get(reverseGeocodingUrl)
                ]);
                setWeatherForecast(weatherResponse.data);
                setLocationName(locationResponse.data.display_name);
            } catch (error) {
                console.error('Error fetching weather forecast or location:', error);
            }
        };

        fetchData();
    }, [apiUrl, reverseGeocodingUrl]);

    return (
        <div className="weather-container">
            {weatherForecast && locationName && (
                <div className="weather-forecast">
                    <div className="weather-info">
                        <p className="weather-location">Location: {locationName}</p>
                        <p className="weather-temperature">Temparature: {weatherForecast.current.temperature_2m}°C</p>
                        <p className="weather-wind">Wind-Speed: {weatherForecast.current.wind_speed_10m} m/s</p>
                    </div>
                </div>
            )}
        </div>
    );

};

export default WeatherComponent;
