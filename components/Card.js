import "@/components/Card.css";
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
                <Image src={Pic} alt={`${name} image`} width={300} height={200} />
                <h3>{name}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
};

export default Card;
