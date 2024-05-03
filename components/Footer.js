// components/Footer.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import "@/components/Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="img">
                <Image src="/img3.png" alt="" width={250} height={100} />
            </div>
            <div className="copyright">
                <Link href="/" className='text1'>
                    FAQs
                </Link>
                <Link href="/" className='text1'>
                    Terms & Conditions
                </Link >
            </div >
            <div className="medias">
                <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    {/* Add more social icons as needed */}
                </ul>
            </div>
        </footer >
    );
};

export default Footer;
