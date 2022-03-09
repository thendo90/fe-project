import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { title, topic, author, created_at, votes, comment_count, article_id } =
    article;

  const date = new Date(Date.parse(created_at));

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
        {/* written: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`} */}
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
