import { FC } from "react";
import { CardProps } from "../../utilities/Interfaces/CardProps";

import styles from "./Card.module.scss";

const Card: FC<CardProps> = ({
  name,
  gender,
  species,
  status,
  location,
  image,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p>{`Gender: ${gender}`}</p>
        <p>{`Species: ${species}`}</p>
        <p>{`Status: ${status}`}</p>
        <p>{`Location: ${location.name}`}</p>
      </div>
    </div>
  );
};

export default Card;
