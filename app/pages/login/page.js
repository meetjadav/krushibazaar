import React from 'react';
import "../login/page.css";
const login = () => {
    return (
        <div className="main-login-container">
            <div className="login-container">
                <h2>Welcome To KrushiBazaar</h2>
                <form action="" method="PEOST">
                    <input type="text" name="gmail" placeholder="Gmail" id="000" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
                <div className="signup">
                    <span>Dont have an account? </span><a href="http://localhost:3000/pages/signup">Sign up</a>
                </div>
            </div>
        </div>

    );
};

export default login;
