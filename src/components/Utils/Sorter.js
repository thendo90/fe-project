import React, { useState } from "react";
import "./Sorter.css";

export default function Sorter({ setQuery, topic }) {
  const [currentSort, setCurrentSort] = useState("Date");

  const handleSort = (sort) => {
    let apiSort;

    setCurrentSort(sort);
    switch (sort) {
      case "Date":
        apiSort = "created_at";
        break;
      case "Comments":
        apiSort = "comment_count";
        break;
      case "Votes":
        apiSort = "votes";
        break;
    }

    setQuery((prevQuery) => {
      return { ...prevQuery, sort_by: apiSort, topic };
    });
  };

  return (
    <div className="dropdown">
      Sort by:
      <button className="dropbtn">{currentSort}</button>
      <div className="dropdown-content">
        <a
          onClick={() => {
            handleSort("Date");
          }}
        >
          Date
        </a>
        <a
          onClick={() => {
            handleSort("Votes");
          }}
        >
          Votes
        </a>
        <a
          onClick={() => {
            handleSort("Comments");
          }}
        >
          Comments
        </a>
      </div>
    </div>
  );
}
