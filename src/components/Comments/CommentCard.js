import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../api/api";
import Date from "../Date";
import Voter from "../Utils/Voter";

export default function CommentCard({ comment, setCommentList }) {
  const { loggedInUser } = useContext(UserContext);
  const { comment_id, author, votes, body, created_at } = comment;
  const [deleted, setDeleted] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("comment deleted");

  const handleDelete = () => {
    setDeleted(true);
    deleteComment(comment_id)
      .then(() => {
        setCommentList((prevList) => {
          return [...prevList];
        });
      })
      .catch((err) => {
        setDeleted(false);
      });
  };

  if (deleted) {
    setTimeout(() => {
      setDeleteMessage(" ");
    }, 2000);
    return <h1 className="comment-deleted">{deleteMessage}</h1>;
  }

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
      <button hidden={loggedInUser !== author} className="comment-edit">
        edit
      </button>
      <button
        hidden={loggedInUser !== author}
        className="comment-delete"
        onClick={() => {
          handleDelete();
        }}
      >
        delete
      </button>
    </div>
  );
}
