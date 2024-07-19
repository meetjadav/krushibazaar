import "@/components/Card/Card.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const Card = ({ Pic, name, description, path }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(`${path}`);
    };

    return (
        <div className="card">
            <a href={`${path}`} className="cardLink" onClick={handleClick}>
                <Image className="card-image" src={Pic} alt={`${name} image`} />
                <h3>{name}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
};

export default Card;
