
import "@/components/Card.css";
import Image from 'next/image';

const Card = ({ Pic, name, description, path }) => {
    return (
        <div className="card">
            <a href={path} className="cardLink">
                <Image src={Pic} alt="carderr" width={300} height={200} />
                <h3>{name}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
};

export default Card;
