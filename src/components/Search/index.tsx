import { FC, useState } from "react";
import { SearchProps } from "../../utilities/Interfaces/SearchProps";
import styles from "./Search.module.scss";

const Search: FC<SearchProps> = ({ title, placeholder, searchFunction }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSearch = () => {
    searchFunction(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.search}>
      <label htmlFor="searchInput" className={styles.title}>
        {title}
      </label>
      <input
        className={styles.input}
        id="searchInput"
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      <button onClick={() => onSearch()} className={styles.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default Search;
