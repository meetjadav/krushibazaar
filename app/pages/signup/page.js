"use client";
import React, { useState } from 'react';
import "../signup/page.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [userOtp, setUserOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);


    const handleSendOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/signupverifybackend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ to: email })
            });
            const data = await response.json();
            if (data.message === "successful") {
                setOtp(data.otp);
                setOtpSent(true);
                setMessage("OTP sent successfully. Please check your email.");
            } else {
                setMessage("Failed to send OTP. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (userOtp === otp) {
            window.location.href = `${getBaseUrl()}/pages/signup/set-password`;

        } else {
            alert('Invalid OTP!');
        }
    };

    return (
        <div className="main-signup-container">
            <div className="signup-container">
                <h2>KrushiBazaar Registration</h2>
                {!otpSent ? (
                    <form onSubmit={handleSendOtp}>
                        <input type="email" name="email" placeholder="Email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} value={email} required />
                        <input type="submit" value="Send OTP" />
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp}>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={userOtp}
                            onChange={(e) => setUserOtp(e.target.value)}
                            required
                        />
                        <input type="submit" value="Verify OTP" />
                    </form>
                )}
                {message && <p className='message'>{message}</p>}
                <div className="login-link">
                    <span>Already have an account? </span>
                    <a href={`${getBaseUrl()}/pages/login`}>Login</a>
                </div>
            </div>
        </div>
    );
};

export default Page;
