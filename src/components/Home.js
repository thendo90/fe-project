import styles from "./Home.module.css";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ArticleList from "./Articles/ArticleList";

export default function Home() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header className={styles.Home}>
      <h3 className={styles.Home__h3}>
        Here's your news for today{" "}
        <em>{loggedInUser && loggedInUser.username}</em>
      </h3>
      <ArticleList />
    </header>
  );
}
