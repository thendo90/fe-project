import styles from "./TopicCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <section className={styles[`TopicCard__${topic.slug}`]}>
      <h2>
        <Link to={`/topics/${topic.slug}`} className={styles.TopicCard__link}>
          {topic.slug}
        </Link>
      </h2>
      <dt className={styles.TopicCard__dt}>{topic.description}</dt>
    </section>
  );
}
