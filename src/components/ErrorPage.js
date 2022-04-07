import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage({ message }) {
  return (
    <div className={styles.ErrorPage}>
      <h1>{message ? message : "You appear to be lost"}</h1>
      <Link to="/" className={styles.ErrorPage__link}>
        Go home
      </Link>
    </div>
  );
}
