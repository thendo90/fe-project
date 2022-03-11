import React, { useState } from "react";
import "./Sorter.css";

export default function Sorter({ setQuery }) {
  const [displayedSort, setDisplayedSort] = useState("Date");
  const [currentOrder, setCurrentOrder] = useState(false);

  const handleSort = (sort) => {
    setQuery((prevQuery) => {
      return { ...prevQuery, sort_by: sort };
    });
  };

  const handleOrder = (order) => {
    setCurrentOrder(order);

    let apiOrder = "asc";

    switch (order) {
      case true:
        apiOrder = "asc";
        break;
      case false:
        apiOrder = "desc";
        break;
    }

    setQuery((prevQuery) => {
      return { ...prevQuery, order: apiOrder };
    });
  };

  return (
    <>
      <div className="dropdown">
        Sort by:
        <button className="dropbtn">{displayedSort}</button>
        <div className="dropdown-content">
          {/* refactor to not use a tags */}
          <a
            onClick={() => {
              handleSort("created_at");
              setDisplayedSort("Date");
            }}
          >
            Date
          </a>
          <a
            onClick={() => {
              handleSort("votes");
              setDisplayedSort("Votes");
            }}
          >
            Votes
          </a>
          <a
            onClick={() => {
              handleSort("comment_count");
              setDisplayedSort("Comments");
            }}
          >
            Comments
          </a>
        </div>
      </div>
      <button
        onClick={() => {
          handleOrder(!currentOrder);
        }}
      >
        {currentOrder ? "Ascending" : "Descending"}
      </button>
    </>
  );
}
