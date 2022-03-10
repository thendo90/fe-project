import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { makeComment } from "../api/api";

export default function CommentForm({ id, setCommentList }) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState({ username: loggedInUser, body: "" });
  const [postSuccess, setPostSucces] = useState(true);
  const [error, setError] = useState(true);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleChange = (event) => {
    event.target.value.length > 10
      ? setDisableSubmit(false)
      : setDisableSubmit(true);
    setComment((prevComment) => {
      return { ...prevComment, body: event.target.value };
    });
    setPostSucces(true);
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
        setError(true);
        setPostSucces(false);
      })
      .catch((err) => {
        setError(false);
      });
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="comment">comment (minimum 10 characters)</label>
        <input
          id="comment"
          type="text"
          value={comment.body}
          onChange={handleChange}
        ></input>
        <button disabled={disableSubmit}>submit</button>
      </form>
      <p hidden={postSuccess}>Comment posted!</p>
      <p hidden={error}>Something went wrong...</p>
    </>
  );
}
