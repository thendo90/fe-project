import React, { useState } from "react";
import styles from "./Sorter.module.css";

export default function Sorter({ setQuery }) {
  const [currentValue, setCurrentValue] = useState("created_at desc");

  const handleSort = (sort) => {
    const [sort_by, order] = sort.split(" ");
    setCurrentValue(sort);

    setQuery((prevQuery) => {
      return { ...prevQuery, sort_by, order };
    });
  };

  return (
    <form className={styles.sorter__form}>
      <label htmlFor="sorter">Sort by</label>
      <select
        id="sorter"
        className={styles.sorter__select}
        value={currentValue}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value={"created_at desc"} className={styles.sorter__option}>
          Newest
        </option>
        <option value={"created_at asc"} className={styles.sorter__option}>
          Oldest
        </option>
        <option value={"votes desc"} className={styles.sorter__option}>
          Most Popular
        </option>
        <option value={"votes asc"} className={styles.sorter__option}>
          Least Popular
        </option>
        <option value={"comment_count desc"} className={styles.sorter__option}>
          Most Comments
        </option>
        <option value={"comment_count asc"} className={styles.sorter__option}>
          Least Comments
        </option>
      </select>
    </form>
  );
}
