"use client"
import React, { useState } from 'react';
import "@/app/pages/login/forgot-password/page.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = () => {
    const [gmail, setGmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/loginbackend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ gmail, password })
            });
            const data = await response.json();
            console.log(data);
            if (data.message == "successful") {
                window.location.href = `${getBaseUrl()}/pages/login`;
            } else {
                console.log("Login failed");
                setError("Authentication failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="main-forgot-password-container">
            <h2>Enter Your Email</h2>
            <form onSubmit={handleLogin} className='form-container'>
                <input type="email" name="gmail" placeholder="Gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} />
                <input type="submit" value="send OTP" />
            </form>
        </div>
    );
};

export default Page;
