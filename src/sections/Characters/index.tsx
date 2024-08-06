import axios from "axios";
import Card from "../../components/Card";
import Search from "../../components/Search";
import styles from "./Characters.module.scss";
import { useEffect, useState } from "react";
import { CharactersResponse } from "../../Interfaces/CharactersResponse";
import { Results } from "../../Interfaces/Results";

const URL = "https://rickandmortyapi.com/api/character";

function Characters() {
  const [charactersCollection, setCharactersCollection] = useState<Results[]>([
    {
      id: 0,
      name: "",
      status: "",
      species: "",
      image: "",
      gender: "",
      location: { name: "" },
    },
  ]);

  useEffect(() => {
    async function getCharacters(): Promise<void> {
      const response = await axios.get<CharactersResponse>(URL);

      setCharactersCollection(response.data.results);
    }
    getCharacters();
  }, []);

  return (
    <section className={styles.characters}>
      <Search title="Characters" placeholder="Type name of Character" />
      <div className={styles.collection}>
        {charactersCollection.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            gender={item.gender}
            species={item.species}
            status={item.status}
            location={item.location.name}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Characters;
