import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { getArticleById } from "../api/api";
import ErrorPage from "../ErrorPage";
import Loading from "../Loading";
import Voter from "../Utils/Voter";

export default function ArticlePage() {
  const { loggedInUser } = useContext(UserContext);

  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVotes(article.votes);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error)
    return <ErrorPage message={`Article ${article_id} does not exist`} />;
  return (
    <dl className="article__page">
      <h1 className="article-header-page">{article.title}</h1>
      <div hidden={loggedInUser !== article.author}>
        <button>edit</button>
        <button>delete</button>
        <h4 className="article-author-page">your article</h4>
      </div>
      <h4
        hidden={loggedInUser === article.author}
        className="article-author-page"
      >
        by {article.author}
      </h4>
      <div hidden={loggedInUser === article.author}>
        <Voter type="article" id={article_id} apiVotes={votes} />
      </div>
      <div hidden={loggedInUser !== article.author}>
        <dt>{article.votes} upvotes</dt>
      </div>
      {/* <dt className="article-topic-page">{article.topic}</dt> */}
      <dt className="article-body-page">{article.body}</dt>

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
