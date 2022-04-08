import styles from "./Account.module.css";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export default function Account() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  if (!loggedInUser) return <main className={styles.Account}></main>;
  return (
    <main className={styles.Account}>
      <h2 className={styles.Account__h2}>
        welcome back <br />
        <b className={styles.Account__b}>{loggedInUser.username}</b>
        <img
          src={loggedInUser.avatar_url}
          alt={`${loggedInUser.username} avatar`}
          className={styles.Account__img}
        />
        <button
          className={styles.Account__signOut}
          onClick={() => setLoggedInUser("")}
        >
          sign out
        </button>
      </h2>
      <section className={styles.Account__options}>
        <Link
          to={`/users/${loggedInUser.username}`}
          className={styles.Account__link}
        >
          view my articles
        </Link>
        <Link to={`/articles/post`} className={styles.Account__link}>
          post an article
        </Link>
      </section>
    </main>
  );
}
