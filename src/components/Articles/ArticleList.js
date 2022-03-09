import React, { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import Loading from "../Loading";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ topic }) {
  const [loading, setLoading] = useState(true);
  const [articleList, setArticleList] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();

  useEffect(() => {
    let query = { p: page };

    if (topic) {
      query.topic = topic;
    }

    getArticles(query).then(({ articles, total_count }) => {
      setArticleList(articles);
      setLoading(false);
      setTotal(total_count);
    });
  }, [page]);

  const handleNext = () => {
    setLoading(true);
    setPage((currentPage) => {
      return currentPage + 1;
    });
  };

  const handlePrev = () => {
    setLoading(true);
    setPage((currentPage) => {
      return currentPage - 1;
    });
  };

  if (loading) return <Loading />;
  return (
    <article className={`ArticleList ${topic}`}>
      <p className={`articles ${topic}`}>
        Displaying {articleList.length} articles
      </p>
      <p className={`articles ${topic}`}>
        Page {page} of {Math.ceil(total / 10)}
      </p>
      {articleList.map((article) => {
        return <ArticleCard article={article} />;
      })}

      <button
        hidden={page === 1}
        className="prev"
        onClick={() => {
          handlePrev();
        }}
      >
        previous page
      </button>
      <button
        hidden={page === Math.ceil(total / 10)}
        className="next"
        onClick={() => {
          handleNext();
        }}
      >
        next page
      </button>

      <br></br>
    </article>
  );
}
