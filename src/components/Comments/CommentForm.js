import styles from "./CommentForm.module.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { makeComment } from "../api/api";

export default function CommentForm({ id, setCommentList }) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState({
    username: loggedInUser.username,
    body: "",
  });
  const [postSuccess, setPostSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleChange = (event) => {
    setPostSuccess(false);
    setError(false);

    event.target.value.length > 10
      ? setDisableSubmit(false)
      : setDisableSubmit(true);
    setComment((prevComment) => {
      return { ...prevComment, body: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableSubmit(true);

    makeComment(id, comment)
      .then((res) => {
        setCommentList((prevList) => {
          return [res].concat([...prevList]);
        });
        setComment((prevComment) => {
          return { ...prevComment, body: "" };
        });
        setPostSuccess(true);
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <form
      className={styles.CommentForm}
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label htmlFor="comment" className={styles.CommentForm__label} />
      <input
        id="comment"
        type="text"
        value={comment.body}
        onChange={handleChange}
        placeholder="post a comment..."
      ></input>
      <button disabled={disableSubmit} className={styles.CommentForm__submit}>
        submit
      </button>
      {postSuccess && <p>Comment posted!</p>}
      {error && <p>Something went wrong...</p>}
    </form>
  );
}
