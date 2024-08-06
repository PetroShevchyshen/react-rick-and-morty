import styles from "./Card.module.scss";

interface CardProps {
  name: string;
  gender: string;
  species: string;
  status: string;
  location: string;
  image: string;
}

function Card({ name, gender, species, status, location, image }: CardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Species: ${species}`}</p>
        <p>{`Status: ${status}`}</p>
        <p>{`Location: ${location}`}</p>
      </div>
    </div>
  );
}

export default Card;
