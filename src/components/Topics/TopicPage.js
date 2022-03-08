import React from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../Articles/ArticleList";

export default function TopicPage() {
  const { topic } = useParams();

  return (
    <>
      <h1>{topic}</h1>
      <ArticleList topic={topic} />
    </>
  );
}
