import axios from "axios";
import Card from "../../components/Card";
import Search from "../../components/Search";
import styles from "./Characters.module.scss";
import { useEffect, useState } from "react";
import { CharactersResponse } from "../../Interfaces/CharactersResponse";
import { Results } from "../../Interfaces/Results";

const URL = "https://rickandmortyapi.com/api/character";

function Characters() {
  const [isLoading, setIsLoading] = useState(true);
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

  async function getCharacters(): Promise<void> {
    setIsLoading(true);
    const response = await axios.get<CharactersResponse>(URL);
    setCharactersCollection(response.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section className={styles.characters}>
      <Search title="Characters" placeholder="Type name of Character" />
      <div className={styles.collection}>
        {isLoading
          ? "loading..."
          : charactersCollection.map((item) => (
              <Card key={item.id} {...item} />
            ))}
      </div>
    </section>
  );
}

export default Characters;
