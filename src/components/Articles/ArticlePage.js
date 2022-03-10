import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById, patchArticleVote } from "../api/api";
import Loading from "../Loading";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  const handleVote = (vote) => {
    setVotes((current) => {
      return current + vote;
    });
    patchArticleVote(article_id, vote);
  };

  if (loading) return <Loading />;
  return (
    <dl className="article__page">
      <h1 className="article-header-page">{article.title}</h1>
      <h4 className="article-author-page">by {article.author}</h4>
      <button
        disabled={votes === 1}
        className="article-button-page"
        onClick={() => {
          handleVote(1);
        }}
      >
        +
      </button>
      <dt className="article-votes-page">{article.votes + votes}</dt>
      <button
        disabled={votes === -1}
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
      <Link
        to={`/articles/${article_id}/comments`}
        className="link article-link"
      >
        view comments
      </Link>
    </dl>
  );
}
