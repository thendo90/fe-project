import React from "react";
import Date from "../Date";

export default function CommentCard({ comment }) {
  return (
    <div className="comment__card">
      <dt className="comment-votes">
        <button className="comment-button">+</button>
        <br></br>
        {comment.votes}
        <br></br>
        <button className="comment-button">-</button>
      </dt>
      <h2>{comment.author}</h2>
      <dt>{comment.body}</dt>
      <br></br>
      <dt>
        <Date date={comment.created_at} />
      </dt>
      <br></br>
      <button className="comment-delete">edit</button>
      <button className="comment-edit">delete</button>
    </div>
  );
}
