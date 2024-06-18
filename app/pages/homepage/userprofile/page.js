"use client"
import { useEffect, useState } from 'react';
import NavbarComponent from '@/components/Navbar';
import FooterComponent from '@/components/Footer';
import "@/app/pages/homepage/userprofile/page.css"
const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user profile details from the API
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

    if (error) {
        return <div className="main-userprofile-container">
            <NavbarComponent />
            <div className="title">
                Error: {error}
            </div>

            <FooterComponent /></div>;
    }

    if (!user) {
        return <div className="main-userprofile-container t">
            <NavbarComponent /><h1 className="title">Loading...</h1>
            <p className="small-title">Loading</p>
            <p className="small-title">Loading</p>
            <FooterComponent /></div>;
    }

    return (
        <div className="main-userprofile-container">
            <NavbarComponent />
            <h1 className="title">User Profile</h1>
            <p className="small-title">Email: {user.email}</p>
            <p className="small-title">Name: {user.username}</p>
            <FooterComponent />
        </div>
    );
};

export default UserProfile;
