"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "@/components/Navbar/Navbar.css";
import { getBaseUrl } from '@/utils/getBaseUrl';

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <div className="menu-icon" onClick={toggleNav}>
                ☰
            </div>
            <nav className={isNavVisible ? 'visible' : ''}>

                <div className="img">
                    <Image src="/img11.jpg" alt="" width={150} height={100} priority={false} />
                </div>
                <div className="bar">
                    <Link href={`${getBaseUrl()}/pages/homepage`} className='text1'>
                        Home
                    </Link>
                    <Link href={`${getBaseUrl()}/pages/homepage/marketdynamics`} className='text1'>
                        Market Dynamics
                    </Link>
                    <Link href={`${getBaseUrl()}/pages/homepage/userprofile`} className='text1' >
                        User Profile
                    </Link>
                    <Link href={`${getBaseUrl()}/pages/homepage/itemsbought`} className='text1' >
                        Order History
                    </Link>
                    <Link href={`${getBaseUrl()}/pages/login`} className='text1'>
                        Login
                    </Link >
                </div >
            </nav >
        </>
    );
};

export default Navbar;
