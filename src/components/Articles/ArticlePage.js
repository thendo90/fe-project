import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { getArticleById } from "../api/api";
import Loading from "../Loading";
import Voter from "../Utils/Voter";

export default function ArticlePage() {
  const { loggedInUser } = useContext(UserContext);

  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setVotes(article.votes);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <dl className="article__page">
      <h1 className="article-header-page">{article.title}</h1>
      <div hidden={loggedInUser !== article.author}>
        <button>edit</button>
        <button>delete</button>
        <h4 className="article-author-page">your article</h4>
      </div>
      <div hidden={loggedInUser === article.author}>
        <h4 className="article-author-page">by {article.author}</h4>
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
