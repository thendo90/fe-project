import React from "react";
import { Link } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <div className="topic__card">
      <h2>
        <Link to={`/topics/${topic.slug}`} className="topic-link">
          {topic.slug}
        </Link>
      </h2>
      <dt>{topic.description}</dt>
    </div>
  );
}
