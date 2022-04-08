import styles from "./ArticleForm.module.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function ArticleForm() {
  const { loggedInUser } = useContext(UserContext);
  const [article, setArticle] = useState({
    author: loggedInUser,
    title: "",
    body: "",
    topic: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = () => {};

  return (
    <main className={styles.ArticleForm}>
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
          className={styles.ArticleForm__input}
        ></input>
        <label htmlFor="body" className={styles.ArticleForm__label}>
          Body
        </label>
        <input
          id="body"
          type="text"
          value={article.body}
          onChange={handleChange}
          className={styles.ArticleForm__body}
        ></input>
        <label htmlFor="topic" className={styles.ArticleForm__label}>
          Topic
        </label>
        <input
          id="topic"
          type="text"
          value={article.topic}
          onChange={handleChange}
          className={styles.ArticleForm__input}
        ></input>
        <button disabled={disableSubmit} className={styles.ArticleForm__submit}>
          submit
        </button>
        {/* {postSuccess && <p>Comment posted!</p>}
      {error && <p>Something went wrong...</p>} */}
      </form>
    </main>
  );
}
