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
      <h1 className="article-header-page">{article.title}</h1>
      <h4 className="article-author-page">by {article.author}</h4>
      <button className="article-button-page">+</button>
      <dt className="article-votes-page">
        votes <br></br>
        {article.votes}
      </dt>
      <button className="article-button-page">-</button>
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
