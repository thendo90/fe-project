import styles from "./ArticleCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Date from "../Utils/Date";

export default function ArticleCard({ article }) {
  const { title, topic, author, created_at, votes, comment_count, article_id } =
    article;

  return (
    <main className={styles.ArticleCard}>
      <h4 className={styles.ArticleCard__header}>
        <Link
          to={`/articles/${article_id}`}
          className={styles.ArticleCard__link}
        >
          {title}
        </Link>
      </h4>
      <section className={styles.ArticleCard__wrapper}>
        <img
          src={require(`../icons/${topic}.png`)}
          alt={`${topic} icon`}
          className={styles.ArticleCard__img}
        />

        <section className={styles.ArticleCard__details}>
          <b className={styles.ArticleCard__author}>{author}</b>
          <div className={styles.ArticleCard__subdetails}>
            <Date date={created_at} />
            <p>
              <b>{comment_count}</b> comments
            </p>
            <p>
              <b>{votes}</b> {votes >= 0 ? "upvotes" : "downvotes"}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
