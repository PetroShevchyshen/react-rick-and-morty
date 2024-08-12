import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/Card";
import Search from "../../components/Search";
import styles from "./Characters.module.scss";

import { CharactersResponse } from "../../utilities/Interfaces/CharactersResponse";
import { Results } from "../../utilities/Interfaces/Results";
import { URLS } from "../../utilities/const/Links";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [charactersCollection, setCharactersCollection] = useState<Results[]>(
    []
  );
  const [searchValue, setSearchValue] = useState("");

  function renderContent(search: string = "") {
    const filteredItems = charactersCollection.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredItems.map((item) => <Card key={item.id} {...item} />);
  }

  async function getCharacters(): Promise<void> {
    setIsLoading(true);

    try {
      const response = await axios.get<CharactersResponse>(URLS.characters);
      setCharactersCollection(response.data.results);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section className={styles.characters}>
      <Search
        title="Characters"
        placeholder="Type name of Character"
        searchFunction={setSearchValue}
      />
      <div className={styles.collection}>
        {isLoading ? "loading..." : renderContent(searchValue)}
      </div>
    </section>
  );
};

export default Characters;
