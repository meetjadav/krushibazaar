// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import "@/components/Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div className="img">
                <Image src="/img11.jpg" alt="" width={150} height={100} />
            </div>
            <div className="bar">
                <Link href="/" className='text1'>
                    Home
                </Link>
                <Link href="http://localhost:3000/pages/marketdynamics" className='text1'>
                    Market Dynamics
                </Link>
                <Link href="/pages/signup" className='text1' >
                    Sign Up
                </Link>
                <Link href="/pages/login" className='text1'>
                    Login
                </Link >
            </div >
        </nav >
    );
};

export default Navbar;
