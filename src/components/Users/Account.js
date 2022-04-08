import styles from "./Account.module.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { getUser } from "../api/api";

export default function Account() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);

  const handleChange = (event) => {
    setUsername(event.target.value);
    setInvalidUser(false);
  };

  const logIn = (event) => {
    event.preventDefault();
    getUser(username)
      .then(({ user }) => {
        setLoggedInUser(user);
      })
      .catch((err) => {
        setInvalidUser(true);
      });
  };

  if (!loggedInUser)
    return (
      <main className={styles.Account}>
        <form
          className={styles.Account__form}
          onSubmit={(event) => {
            logIn(event);
          }}
        >
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter your username"
            className={styles.Account__input}
          ></input>
          <button className={styles.Account__button}>log in</button>
        </form>
        {invalidUser && (
          <b className={styles.Account__invalid}>invalid username</b>
        )}
      </main>
    );

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
          className={styles.Account__button}
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
