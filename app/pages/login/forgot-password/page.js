"use client"
import React, { useState } from 'react';
import "@/app/pages/login/forgot-password/page.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = () => {
    const [gmail, setGmail] = useState('');
    const [otp, setOtp] = useState('');
    const [userOtp, setUserOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/forgot-passwordbackend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ to: gmail })
            });
            const data = await response.json();
            console.log(data);
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

    const handleVerify = (e) => {
        e.preventDefault();
        if (userOtp === otp) {
            window.location.href = `${getBaseUrl()}/pages/login/reset-password`;
        } else {
            alert('Invalid OTP!');
        }
    };

    return (
        <div className="main-forgot-password-container">
            <div className="forgot-password-container">
                <h2>Enter Your Email</h2>
                <form onSubmit={handleLogin} className='form-container'>
                    <input
                        type="email"
                        name="gmail"
                        placeholder="Gmail"
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                        required
                    />
                    <input type="submit" value="Send OTP" />
                </form>
                {message && <p>{message}</p>}
                {otpSent && <form onSubmit={handleVerify} className='form-container'>
                    <h2>Enter OTP</h2>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={userOtp}
                        onChange={(e) => setUserOtp(e.target.value)}
                        required
                    />
                    <input type="submit" value="Verify OTP" />
                </form>}
            </div>
        </div >
    );
};

export default Page;
