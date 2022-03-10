import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Date from "../Date";
import Voter from "../Utils/Voter";

export default function CommentCard({ comment }) {
  const { loggedInUser } = useContext(UserContext);
  const { comment_id, author, votes, body, created_at } = comment;

  return (
    <div className="comment__card">
      <div hidden={loggedInUser === author}>
        <Voter type="comment" id={comment_id} apiVotes={votes} />
      </div>
      <h2>{author}</h2>
      <dt>{body}</dt>
      <br></br>
      <dt>
        <Date date={created_at} />
      </dt>
      <br></br>
      <button hidden={loggedInUser !== author} className="comment-delete">
        edit
      </button>
      <button hidden={loggedInUser !== author} className="comment-edit">
        delete
      </button>
    </div>
  );
}
