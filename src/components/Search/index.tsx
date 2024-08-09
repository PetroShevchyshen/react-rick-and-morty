import { FC } from "react";
import { SearchProps } from "../../utilities/Interfaces/SearchProps";
import styles from "./Search.module.scss";

const Search: FC<SearchProps> = ({ title, placeholder }) => {
  return (
    <div className={styles.search}>
      <label htmlFor="searchInput" className={styles.title}>
        {title}
      </label>
      <input
        className={styles.input}
        id="searchInput"
        type="text"
        placeholder={placeholder}
      />
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default Search;
