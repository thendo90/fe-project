import styles from "./UserCard.module.css";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  const { loggedInUser } = useContext(UserContext);

  if (loggedInUser.username === user.username) return null;
  return (
    <section className={styles.UserCard}>
      <h2 className={styles.UserCard__h2}>
        <Link to={`/users/${user.username}`} className={styles.UserCard__link}>
          {user.username}
        </Link>
      </h2>
      <img
        src={user.avatar_url}
        alt={`${user.username} avatar`}
        className={styles.UserCard__img}
      />
      <dt className={styles.UserCard__dt}>{user.name}</dt>
    </section>
  );
}
