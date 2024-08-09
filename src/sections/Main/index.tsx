import axios from "axios";
import Header from "../../components/Header";
import Characters from "../Characters";
import TableSection from "../Table";
import styles from "./Main.module.scss";

import { useEffect, useState } from "react";
import { EpisodeResults } from "../../utilities/Interfaces/EpisodeResults";
import { LocationResults } from "../../utilities/Interfaces/LocationResults";
import { LocationResponse } from "../../utilities/Interfaces/LocationResponse";
import { EpisodesResponse } from "../../utilities/Interfaces/EpisodesResponse";
import { URLS } from "../../utilities/const/Links";

function Main() {
  const [episodes, setEpisodes] = useState<EpisodeResults[]>([]);
  const [locations, setLocations] = useState<LocationResults[]>([]);

  async function getData(url: string) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error(error);
    }
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
