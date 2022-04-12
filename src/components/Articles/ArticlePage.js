import styles from "./ArticlePage.module.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { getArticleById } from "../api/api";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import Voter from "../Utils/Voter";
import Delete from "../Utils/Delete";

export default function ArticlePage() {
  const { loggedInUser } = useContext(UserContext);

  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVotes(article.votes);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <Loading />;

  if (error)
    return <ErrorPage message={`Article ${article_id} does not exist`} />;

  if (deleted) return <ErrorPage message={`Article deleted successfully`} />;

  return (
    <article className={styles.ArticlePage}>
      <section className={styles.ArticlePage__headerWrap}>
        <h2 className={styles.ArticlePage__header}>{article.title}</h2>
        {loggedInUser.username !== article.author ? (
          <Voter type="article" id={article_id} apiVotes={votes} />
        ) : (
          <Delete type="article" id={article_id} setDeleted={setDeleted} />
        )}
      </section>
      {loggedInUser.username === article.author ? (
        <div className={styles.ArticlePage__details}>
          <h3 className={styles.ArticlePage__author}>your article</h3>
          <dt className={styles.ArticlePage__votes}>
            <b>{article.votes}</b>{" "}
            {article.votes >= 0 ? "upvotes" : "downvotes"}
          </dt>
        </div>
      ) : (
        <div className={styles.ArticlePage__details}>
          <Link
            aria-label="view user"
            to={`/users/${article.author}`}
            className={styles.ArticlePage__author}
          >
            {article.author}
          </Link>
        </div>
      )}

      <main className={styles.ArticlePage__main}>
        <p className={styles.ArticlePage__body}>{article.body}</p>

        <Link
          aria-label="view comments"
          to={`/articles/${article_id}/comments`}
          className={styles.ArticlePage__comments}
        >
          view comments (<b>{article.comment_count}</b>)
        </Link>
      </main>
    </article>
  );
}
