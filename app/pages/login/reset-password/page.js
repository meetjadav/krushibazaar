"use client"
import React, { useState } from 'react';
import "@/app/pages/login/reset-password/page.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Page = () => {
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/reset-passwordbackend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password, reEnterPassword })
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
        <div className="main-reset-password-container">
            <div className="reset-password-container">
                <h2>Reset Password</h2>
                <form onSubmit={handleResetPassword} className='form-container'>
                    <input
                        type="password"
                        name="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Re-Enter New Password"
                        value={reEnterPassword}
                        onChange={(e) => setReEnterPassword(e.target.value)}
                        required
                    />
                    <input type="submit" value="Change Password" />
                </form>
            </div>
        </div >
    );
};

export default Page;
