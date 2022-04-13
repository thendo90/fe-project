import styles from "./ArticleForm.module.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { postArticle } from "../api/api";
import { Link } from "react-router-dom";

export default function ArticleForm() {
  const { loggedInUser } = useContext(UserContext);
  const [article, setArticle] = useState({
    author: loggedInUser.username,
    title: "",
    body: "",
    topic: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [articlePostValidation, setArticlePostValidation] = useState(false);
  const [inputValidation, setInputValidation] = useState({
    title: true,
    body: true,
    topic: true,
  });
  const [postedId, setPostedId] = useState(null);
  const [toggleValidation, setToggleValidation] = useState({
    title: false,
    body: false,
  });

  useEffect(() => {
    if (article.title.length >= 8) {
      setInputValidation((prev) => {
        return { ...prev, title: false };
      });
    } else {
      setInputValidation((prev) => {
        return { ...prev, title: true };
      });
    }

    if (article.body.length >= 50) {
      setInputValidation((prev) => {
        return { ...prev, body: false };
      });
    } else {
      setInputValidation((prev) => {
        return { ...prev, body: true };
      });
    }

    if (article.topic !== "") {
      setInputValidation((prev) => {
        return { ...prev, topic: false };
      });
    } else {
      setInputValidation((prev) => {
        return { ...prev, topic: true };
      });
    }

    setToggleValidation({
      title: article.title.length > 0,
      body: article.body.length > 0,
    });

    if (
      article.title.length >= 8 &&
      article.body.length >= 50 &&
      article.topic !== ""
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [article]);

  const handleSubmit = (event) => {
    event.preventDefault();

    postArticle(article)
      .then(({ article }) => {
        setDisableSubmit(true);
        setArticlePostValidation(true);
        setArticle({
          author: loggedInUser.username,
          title: "",
          body: "",
          topic: "",
        });
        setPostedId(article.article_id);
      })
      .catch((err) => {});
  };

  const handleChange = (event) => {
    setArticle((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  return (
    <main className={styles.ArticleForm}>
      {!articlePostValidation && (
        <form
          className={styles.ArticleForm__form}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label htmlFor="title" className={styles.ArticleForm__label}>
            Title
          </label>
          <input
            id="title"
            type="text"
            value={article.title}
            onChange={handleChange}
            className={styles.ArticleForm__title}
          ></input>
          {toggleValidation.title && (
            <p
              className={
                inputValidation.title
                  ? styles.ArticleForm__inputInvalid
                  : styles.ArticleForm__inputValid
              }
            >
              title must be at least 8 characters
            </p>
          )}
          <label htmlFor="body" className={styles.ArticleForm__label}>
            Body
          </label>
          <textarea
            id="body"
            type="text"
            value={article.body}
            onChange={handleChange}
            className={styles.ArticleForm__body}
          ></textarea>
          {toggleValidation.body && (
            <p
              className={
                inputValidation.body
                  ? styles.ArticleForm__inputInvalid
                  : styles.ArticleForm__inputValid
              }
            >
              body must be at least 50 characters
            </p>
          )}
          <section className={styles.ArticleForm__topicButtonWrapper}>
            <label htmlFor="topic" className={styles.ArticleForm__topicLabel}>
              Topic
              <select
                id="topic"
                className={styles.ArticleForm__select}
                value={article.topic}
                onChange={handleChange}
              >
                <option
                  value={""}
                  className={styles.ArticleForm__option}
                ></option>
                <option
                  value={"cooking"}
                  className={styles.ArticleForm__option}
                >
                  Cooking
                </option>
                <option value={"coding"} className={styles.ArticleForm__option}>
                  Coding
                </option>
                <option
                  value={"football"}
                  className={styles.ArticleForm__option}
                >
                  Football
                </option>
              </select>
            </label>
            <button
              aria-label="submit article"
              disabled={disableSubmit}
              className={styles.ArticleForm__submit}
            >
              submit
            </button>
          </section>

          <p
            className={
              inputValidation.topic
                ? styles.ArticleForm__inputInvalid
                : styles.ArticleForm__inputValid
            }
          >
            please choose a topic
          </p>
        </form>
      )}
      {articlePostValidation && (
        <h2 className={styles.ArticleForm__submitted}>
          Article posted!
          <Link
            aria-label="view posted article"
            className={styles.ArticleForm__link}
            to={`/articles/${postedId}`}
          >
            View article
          </Link>
          <button
            aria-label="post again"
            className={styles.ArticleForm__submit}
            onClick={() => {
              setArticlePostValidation(false);
            }}
          >
            post another?
          </button>
        </h2>
      )}
    </main>
  );
}
