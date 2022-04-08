import styles from "./UserCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <section className={styles.UserCard}>
      <img
        src={{ uri: user.avatar_url }}
        alt={`${user.username} avatar`}
        className={styles.UserCard__img}
      />
      <aside className={styles.UserCard__aside}>
        <h2>
          <Link
            to={`/users/${user.username}`}
            className={styles.UserCard__link}
          >
            {user.username}
          </Link>
        </h2>
        <dt className={styles.UserCard__dt}>{user.name}</dt>
      </aside>
    </section>
  );
}
