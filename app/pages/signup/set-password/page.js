"use client"
import React, { useState } from 'react';
import "@/app/pages/signup/set-password/page.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        reEnterPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/signupbackend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    password: formData.password,
                    reEnterPassword: formData.reEnterPassword,
                    username: formData.username
                })
            });
            const data = await response.json();
            console.log(data);
            if (data.message === "successful") {
                window.location.href = `${getBaseUrl()}/pages/login`
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="main-set-password-container">
            <div className="set-password-container">
                <h2>Reset Password</h2>
                <form onSubmit={handleSetPassword} className='form-container'>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="reEnterPassword"
                        placeholder="Re-Enter Password"
                        onChange={handleChange}
                        required
                    />
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        </div>
    );
};

export default Page;
