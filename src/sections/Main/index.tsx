import Header from "../../components/Header";
import Characters from "../Characters";
import styles from "./Main.module.scss";

function Main() {
  return (
    <>
      <section className={styles.main}>
        <Header />
        <div className={styles.title}>
          <p>Lear more about your favorite cartoon</p>
        </div>
      </section>
      <Characters />
    </>
  );
}

export default Main;
