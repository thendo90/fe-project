import styles from "./ArticleList.module.css";
import React, { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import Loading from "../Loading";
import ArticleCard from "./ArticleCard";
import Sorter from "../Utils/Sorter";
import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const { topic } = useParams();

  const [articleList, setArticleList] = useState();
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();
  const [query, setQuery] = useState({ p: 1, topic, limit: 6 });
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles(query)
      .then(({ articles, total_count }) => {
        setArticleList(articles);
        setLoading(false);
        setTotal(total_count);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [query]);

  const handlePageTurn = (turn) => {
    setLoading(true);
    setQuery((prev) => {
      return { ...prev, p: prev.p + turn };
    });
  };

  if (loading) return <Loading />;

  if (error) return <ErrorPage message={`Topic ${topic} does not exist`} />;

  return (
    <section className={styles.ArticleList}>
      {topic && (
        <h3 className={styles.ArticleList__h3}>
          <em>{topic}</em>
        </h3>
      )}

      <Sorter setQuery={setQuery} topic={topic} />

      <p className={styles.ArticleList__p}>
        Displaying {articleList.length} articles
      </p>

      <p className={styles.ArticleList__p}>
        Page {query.p} of {Math.ceil(total / query.limit)}
      </p>

      <section className={styles.ArticleList__articleCardWrapper}>
        {articleList.map((article) => {
          return (
            <ArticleCard
              article={article}
              key={`article-${article.article_id}`}
            />
          );
        })}
      </section>

      <section
        name="button wrapper"
        className={styles.ArticleList__button_wrapper}
      >
        <button
          hidden={query.p === 1}
          className={styles.prev}
          onClick={() => {
            handlePageTurn(-1);
          }}
        >
          <b>previous</b>
        </button>
        <button
          hidden={query.p === Math.ceil(total / query.limit)}
          className={styles.next}
          onClick={() => {
            handlePageTurn(1);
          }}
        >
          <b>next</b>
        </button>
      </section>
    </section>
  );
}
