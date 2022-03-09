import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";

export default function ArticleCard({ article }) {
  const { title, topic, author, created_at, votes, comment_count, article_id } =
    article;

  return (
    <div className={`article__card ${topic}`}>
      <h4 className="article-header">
        <Link to={`/articles/${article_id}`} className="article-link">
          {title}
        </Link>
      </h4>
      <p className={`article-author`}>
        {/* Author: <br /> */}
        {author}
      </p>
      <p className="article-topic">
        {/* Topic: <br />
        {topic} */}
      </p>
      <p className="article-date">
        <Date date={article.created_at} />
      </p>
      <p className="article-comments">
        {/* Comments: <br />
        {comment_count} */}
      </p>
      <p className="article-votes">
        {/* Votes: <br />
        {votes} */}
      </p>
    </div>
  );
}
