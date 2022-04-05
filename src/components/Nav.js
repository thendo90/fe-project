import styles from "./Nav.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className={styles.navbar}>
      <Link className={styles.navbar__link} to="/">
        Home
      </Link>
      <Link className={styles.navbar__link} to="/topics">
        Topics
      </Link>
      <Link className={styles.navbar__link} to="/users">
        Users
      </Link>
      <Link className={styles.navbar__link} to="/myacc">
        Account
      </Link>
    </ul>
  );
}
