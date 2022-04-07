import styles from "./DeleteEdit.module.css";
import React from "react";

export default function DeleteEdit({ id, type }) {
  const handleDelete = () => {};

  const handleEdit = () => {};

  return (
    <div className={styles.DeleteEdit}>
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
