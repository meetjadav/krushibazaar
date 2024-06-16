import "@/components/Card.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const Card = ({ Pic, name, description, path }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        const selectId = name.toLowerCase().replace(/ /g, '');
        router.push(`${path}/pages/homepage/marketdynamics/${selectId}`);
    };

    return (
        <div className="card">
            <a href={`${path}/pages/homepage/marketdynamics/${name.toLowerCase().replace(/ /g, '')}`} className="cardLink" onClick={handleClick}>
                <Image src={Pic} alt={`${name} image`} width={300} height={200} />
                <h3>{name}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
};

export default Card;
