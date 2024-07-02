"use client"
import { useEffect, useState } from 'react';
import NavbarComponent from '@/components/Navbar';
import FooterComponent from '@/components/Footer';
import { getBaseUrl } from '@/utils/getBaseUrl';
import "@/app/pages/homepage/userprofile/page.css"
import LoadigComponent from "@/components/Loading";
const Page = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('/api/userprofilebackend');
                const data = await response.json();

                if (response.ok) {
                    setUser(data.user);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('An error occurred while fetching user details');
                console.error(err);
            }
        };

        fetchUserProfile();
    }, []);

    const logout = async () => {
        try {
            const response = await fetch('/api/logoutbackend', {
                method: 'POST',
            });
            const data = await response.json();
            console.log(data);
            if (data.message == "Logout successful") {
                console.log('Logout successful');
                window.location.href = `${getBaseUrl()}/pages/login`;
            } else {
                console.error('Logout failed');
            }
        } catch (err) {
            console.error('An error occurred during logout:', err);
        }
    };

    if (error) {
        return (
            <div className="main-userprofile-container">
                <NavbarComponent />Failed to fetch data...
                <FooterComponent />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="main-userprofile-container">
                <NavbarComponent /><LoadigComponent />
                <FooterComponent />
            </div>
        );
    }

    return (
        <div className="main-userprofile-container">
            <NavbarComponent />
            <h1 className="title">User Profile</h1>
            <div className="sub-container">

                <div className='discription'>
                    <span className='small-title1'>Email </span>
                    <span className='small-title1'>Name </span>

                </div>
                <div className='discription'>
                    <span className="small-title2">{user.email}</span>
                    <span className="small-title2">{user.username}</span>
                </div>
            </div>


            <button className="logout-button" onClick={logout}>Logout</button>
            <FooterComponent />
        </div>
    );
};

export default Page;
