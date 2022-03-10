import React, { useEffect, useState } from "react";
import { patchCommentVote } from "../api/api";
import Date from "../Date";

export default function CommentCard({ comment }) {
  const { comment_id, author, votes, body, created_at } = comment;
  const [commentVotes, setCommentVotes] = useState(0);

  const handleVote = (vote) => {
    setCommentVotes((current) => {
      return current + vote;
    });
    patchCommentVote(comment_id, vote);
  };

  return (
    <div className="comment__card">
      <dt className="comment-votes">
        <button
          disabled={commentVotes === 1}
          className="comment-button"
          onClick={() => {
            handleVote(1);
          }}
        >
          +
        </button>
        <br></br>
        {commentVotes + votes}
        <br></br>
        <button
          disabled={commentVotes === -1}
          className="comment-button"
          onClick={() => {
            handleVote(-1);
          }}
        >
          -
        </button>
      </dt>
      <h2>{author}</h2>
      <dt>{body}</dt>
      <br></br>
      <dt>
        <Date date={created_at} />
      </dt>
      <br></br>
      <button className="comment-delete">edit</button>
      <button className="comment-edit">delete</button>
    </div>
  );
}
