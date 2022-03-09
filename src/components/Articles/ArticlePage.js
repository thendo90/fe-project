import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchArticleVote } from "../api/api";
import Loading from "../Loading";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [currVote, setCurrVote] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    // following logic needed to "unpatch" the api when unvoting
    let patchVotes = votes;
    if (currVote === -1 && votes === 0) {
      // occurs on decrement after an increment
      patchVotes = -1;
    }
    if (currVote === 1 && votes === 0) {
      // occurs on increment after a decrement
      patchVotes = 1;
    }

    patchArticleVote(article_id, patchVotes);
  }, [votes]);

  const handleVote = (vote) => {
    setCurrVote(vote);
    setVotes((current) => {
      if (current === 1 && vote === 1) return current;
      if (current === -1 && vote === -1) return current;

      return current + vote;
    });
  };

  if (loading) return <Loading />;
  return (
    <dl className="article__page">
      <h1 className="article-header-page">{article.title}</h1>
      <h4 className="article-author-page">by {article.author}</h4>
      <button
        className="article-button-page"
        onClick={() => {
          handleVote(1);
        }}
      >
        +
      </button>
      <dt className="article-votes-page">{article.votes + votes}</dt>
      <button
        className="article-button-page"
        onClick={() => {
          handleVote(-1);
        }}
      >
        -
      </button>
      {/* <dt className="article-topic-page">{article.topic}</dt> */}
      <dt className="article-body-page">{article.body}</dt>
      <form>
        <legend>comment</legend>
        <input type="text"></input>
        <button>submit</button>
      </form>
      <dt className="article-comments-page">
        {article.comment_count} comments
      </dt>
      <button>view comments</button>
    </dl>
  );
}
