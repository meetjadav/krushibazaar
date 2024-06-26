import Link from 'next/link';
import "@/components/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { getBaseUrl } from '@/utils/getBaseUrl';
const Footer = () => {
    return (
        <footer>
            <div className="img">
                <Image src="/img3.png" alt="" width={250} height={100} />
            </div>
            <div className='bar2'>
                <Link href={`${getBaseUrl()}/pages/homepage/faq`} className='text2'>
                    FAQs
                </Link>
                <Link href={`${getBaseUrl()}/pages/homepage/terms`} className='text2'>
                    Terms & Conditions
                </Link >
            </div >
            <div>
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
                </ul>
            </div>
        </footer >
    );
};

export default Footer;
