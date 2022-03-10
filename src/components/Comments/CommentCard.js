import React, { useEffect, useState } from "react";
import { patchCommentVote } from "../api/api";
import Date from "../Date";
import Voter from "../Utils/Voter";

export default function CommentCard({ comment }) {
  const { comment_id, author, votes, body, created_at } = comment;

  return (
    <div className="comment__card">
      <Voter type="comment" id={comment_id} apiVotes={votes} />
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
