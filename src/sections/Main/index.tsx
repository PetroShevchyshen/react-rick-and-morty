import axios from "axios";
import Header from "../../components/Header";
import Characters from "../Characters";
import TableSection from "../Table";
import styles from "./Main.module.scss";

import { useEffect, useState } from "react";
import { EpisodeResults } from "../../Interfaces/EpisodeResults";
import { LocationResults } from "../../Interfaces/LocationResults";
import { LocationResponse } from "../../Interfaces/LocationResponse";
import { EpisodesResponse } from "../../Interfaces/EpisodesResponse";

const URLS = {
  episodes: "https://rickandmortyapi.com/api/episode",
  locations: "https://rickandmortyapi.com/api/location",
};

function Main() {
  const [episodes, setEpisodes] = useState<EpisodeResults[]>();
  const [locations, setLocations] = useState<LocationResults[]>();

  async function getData(url: string) {
    const data = await axios.get(url);
    return data.data;
  }

  async function getEpisodes() {
    const response: EpisodesResponse = await getData(URLS.episodes);
    setEpisodes(response.results);
  }

  async function getLocations() {
    const response: LocationResponse = await getData(URLS.locations);
    setLocations(response.results);
  }

  useEffect(() => {
    getEpisodes();
    getLocations();
  }, []);

  return (
    <>
      <section className={styles.main}>
        <Header />
        <div className={styles.title}>
          <p>Lear more about your favorite cartoon</p>
        </div>
      </section>
      <Characters />
      <TableSection name="Episodes" data={episodes} />
      <TableSection name="Location" data={locations} />
    </>
  );
}

export default Main;
