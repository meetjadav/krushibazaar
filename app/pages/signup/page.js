"use client";
import React, { useState } from 'react';
import "../signup/page.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await fetch('/api/signupbackend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (await response.json()) {
                // Redirect to login page upon successful registration
                window.location.href = `${getBaseUrl()}/pages/login`;
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="main-signup-container">
            <div className="signup-container">
                <h2>KrushiBazaar Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Full Name" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} />
                    <input type="submit" value="Sign Up" />
                </form>
                <div className="login-link">
                    <span>Already have an account? </span>
                    <a href={`${getBaseUrl()}/pages/login`}>Login</a>
                </div>
            </div>
        </div>
    );
};

export default Page;
