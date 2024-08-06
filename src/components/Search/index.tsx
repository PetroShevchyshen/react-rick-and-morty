import styles from "./Search.module.scss";

interface SearchProps {
  title: string;
  placeholder: string;
}

function Search({ title, placeholder }: SearchProps) {
  return (
    <div className={styles.search}>
      <label htmlFor="searchInput" className={styles.title}>
        {title}
      </label>
      <input id="searchInput" type="text" placeholder={placeholder} />
      <button>Search</button>
    </div>
  );
}

export default Search;
