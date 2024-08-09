import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="../img/logo-rick-and-morty.png" alt="logo" />
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>Characters</li>
          <li>Episodes</li>
          <li>Locations</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
