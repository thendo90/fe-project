import styles from "./DeleteEdit.module.css";
import React from "react";
import { deleteComment } from "../api/api";

export default function DeleteEdit({ id, type, setDeleted, setCommentList }) {
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

  const handleEdit = () => {};

  return (
    <div className={styles[`DeleteEdit-${type}`]}>
      <button
        aria-label={`delete ${type}`}
        className={styles.Delete}
        onClick={() => {
          handleDelete();
        }}
      ></button>

      <button
        aria-label={`edit ${type}`}
        className={styles.Edit}
        onClick={() => {
          handleEdit();
        }}
      ></button>
    </div>
  );
}
