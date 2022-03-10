import React, { useState } from "react";
import { makeComment } from "../api/api";

export default function CommentForm({ id, setCommentList }) {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = "grumpy19";
    makeComment(id, username, comment).then((res) => {
      setCommentList((previousList) => {
        return [res].concat([...previousList]);
      });

      setComment("Comment posted!");
    });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <legend>comment</legend>
      <input type="text" value={comment} onChange={handleChange}></input>
      <button>submit</button>
    </form>
  );
}
