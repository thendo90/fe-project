import React, { useState } from "react";
import { patchArticleVote, patchCommentVote } from "../api/api";

export default function Voter({ id, type, apiVotes }) {
  const [voterVotes, setVoterVotes] = useState(0);

  const handleVote = (vote) => {
    setVoterVotes((current) => {
      return current + vote;
    });

    type === "article"
      ? patchArticleVote(id, vote)
      : patchCommentVote(id, vote);
  };

  return (
    <div className="voter">
      <button
        disabled={voterVotes === 1}
        className={type === "article" ? "article-button" : "comment-button"}
        onClick={() => {
          handleVote(1);
        }}
      >
        +
      </button>

      {apiVotes + voterVotes}

      <button
        disabled={voterVotes === -1}
        className={type === "article" ? "article-button" : "comment-button"}
        onClick={() => {
          handleVote(-1);
        }}
      >
        -
      </button>
    </div>
  );
}
