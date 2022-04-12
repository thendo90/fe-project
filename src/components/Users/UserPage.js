import styles from "./UserPage.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api/api";
import ArticleCard from "../Articles/ArticleCard";
import Loading from "../Loading";

export default function UserPage() {
  const { username } = useParams();
  const [userArticles, setUserArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles({ limit: 100 }).then(({ articles }) => {
      setUserArticles(
        articles.filter((article) => article.author === username)
      );
      setLoading(false);
    });
  }, [username]);

  if (loading) return <Loading />;
  return (
    <main className={styles.UserPage}>
      <h2 className={styles.UserPage__h2}>
        displaying all of <b className={styles.UserPage__b}>{username}</b>'s
        articles
      </h2>

      <section className={styles.UserPage__articleCardWrapper}>
        {userArticles.map((article) => (
          <ArticleCard
            article={article}
            key={`article-${article.article_id}`}
            UserPage={true}
          />
        ))}
      </section>
    </main>
  );
}
