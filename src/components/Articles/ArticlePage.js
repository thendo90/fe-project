import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/api";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1 className="loading">loading content</h1>;
  return (
    <dl className="article__page">
      <h3 className="article-header-page">{article.title}</h3>
      <h4 className="article-author-page">{article.author}</h4>
      <dt className="article-body-page">{article.body}</dt>

      <dt className="article-comments-page">{article.comment_count}</dt>
      <dt className="article-votes-page">
        Votes: <br />
        {article.votes}
      </dt>
    </dl>
  );
}
