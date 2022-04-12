import styles from "./CommentCard.module.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Date from "../Utils/Date";
import Voter from "../Utils/Voter";
import Delete from "../Utils/Delete";
import { Link } from "react-router-dom";

export default function CommentCard({ comment, setCommentList }) {
  const { loggedInUser } = useContext(UserContext);
  const { comment_id, author, votes, body, created_at } = comment;
  const [deleted, setDeleted] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("comment deleted");

  if (deleted) {
    setTimeout(() => {
      setDeleteMessage(null);
    }, 2000);
    return (
      deleteMessage && (
        <h1 className={styles.CommentCard__deleted}>{deleteMessage}</h1>
      )
    );
  }

  return (
    <div className={styles.CommentCard}>
      <h2 className={styles.CommentCard__author}>
        {loggedInUser.username !== author ? (
          <Link
            to={`/users/${author}`}
            className={styles.CommentCard__linkAuthor}
          >
            {author}
          </Link>
        ) : (
          <Link to={`/myacc`} className={styles.CommentCard__linkYou}>
            you
          </Link>
        )}

        {loggedInUser.username !== author ? (
          <Voter type="comment" id={comment_id} apiVotes={votes} />
        ) : (
          <Delete
            type="comment"
            id={comment_id}
            setDeleted={setDeleted}
            setCommentList={setCommentList}
          />
        )}
      </h2>

      <Date date={created_at} />
      <p className={styles.CommentCard__body}>{body}</p>
    </div>
  );
}
