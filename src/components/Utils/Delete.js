import styles from "./Delete.module.css";
import React from "react";
import { deleteComment } from "../api/api";

export default function Delete({ id, type, setDeleted, setCommentList }) {
  const handleDelete = () => {
    setDeleted(true);

    switch (type) {
      case "comment":
        deleteComment(id)
          .then(() => {
            setCommentList((prevList) => {
              return [...prevList];
            });
          })
          .catch((err) => {
            setDeleted(false);
          });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles[`Delete-${type}`]}>
      <button
        aria-label={`delete ${type}`}
        className={styles.Delete}
        onClick={() => {
          handleDelete();
        }}
      ></button>
    </div>
  );
}
