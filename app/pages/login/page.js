"use client"
import React, { useState } from 'react';
import "../login/page.css";

const Login = () => {
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
            const data = await response.json(); // Parse JSON response
            console.log(data);
            if (data.message == "Login successful") {
                // Redirect or perform action upon successful login
                window.location.href = "http://localhost:3000"
            } else {
                // Handle failed login
                console.log("Login failed");
                setError("Authentication failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="main-login-container">
            <div className="login-container">
                <h2>Welcome To KrushiBazaar</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <input type="text" name="gmail" placeholder="Gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" />
                </form>
                <div className="signup">
                    <span>Don&apos;t have an account? </span><a href="http://localhost:3000/pages/signup">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
