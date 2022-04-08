import styles from "./TopicCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <section className={styles.TopicCard}>
      <img
        src={require(`../icons/${topic.slug}.png`)}
        alt={`${topic.slug} icon`}
        className={styles.TopicCard__img}
      />
      <aside className={styles.TopicCard__aside}>
        <h2>
          <Link to={`/topics/${topic.slug}`} className={styles.TopicCard__link}>
            {topic.slug}
          </Link>
        </h2>
        <dt className={styles.TopicCard__dt}>{topic.description}</dt>
      </aside>
    </section>
  );
}
