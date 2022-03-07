import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./api";

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
    <div className="article__page">
      <h4 className="article-header">{article.title}</h4>
      <p className="article-author">
        Author: <br />
        {article.author}
      </p>
      <p className="article-topic">
        Topic: <br />
        {article.topic}
      </p>
      <p className="article-comments">
        Comments: <br />
        {article.comment_count}
      </p>
      <p className="article-votes">
        Votes: <br />
        {article.votes}
      </p>
    </div>
  );
}
