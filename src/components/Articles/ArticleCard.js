import styles from "./ArticleCard.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Date from "../Utils/Date";

export default function ArticleCard({ article }) {
  const { title, topic, author, created_at, votes, comment_count, article_id } =
    article;

  return (
    <main className={styles.ArticleCard__section}>
      <h4 className={styles.ArticleCard__header}>
        <Link
          to={`/articles/${article_id}`}
          className={styles.ArticleCard__link}
        >
          {title}
        </Link>
      </h4>
      <section className={styles.ArticleCard__wrapper}>
        <section className={styles.ArticleCard__users}>
          <Date date={created_at} />
          <p>
            <b>{votes}</b> {votes >= 0 ? "upvotes" : "downvotes"}
          </p>
          <p>
            <b>{comment_count}</b> comments
          </p>
        </section>

        <section className={styles.ArticleCard__details}>
          <em className={styles.ArticleCard__author}>{author}</em>
          <b className={styles.ArticleCard__topic}>{topic}</b>
        </section>
      </section>
    </main>
  );
}
