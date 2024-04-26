"use client"
import React, { useState } from 'react';
import "../signup/page.css";
import axios from 'axios';

const SignUpPage = () => {
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
        e.preventDefault();
        try {
            await axios.post("/api/register", formData);
            // Redirect to login page upon successful registration
            window.location.href = 'http://localhost:3000/pages/login';
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
                    <a href="http://localhost:3000/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
