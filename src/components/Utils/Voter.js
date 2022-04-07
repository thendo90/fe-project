import styles from "./Voter.module.css";
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
    <div className={styles[`Voter${voterVotes}`]}>
      <button
        aria-label="upvote article"
        disabled={voterVotes === 1}
        className={styles.Voter__upvote}
        onClick={() => {
          handleVote(1);
        }}
      ></button>

      {apiVotes + voterVotes}

      <button
        aria-label="downvote article"
        disabled={voterVotes === -1}
        className={styles.Voter__downvote}
        onClick={() => {
          handleVote(-1);
        }}
      ></button>
    </div>
  );
}
