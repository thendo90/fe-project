import React, { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [loading, setLoading] = useState(true);
  const [articleList, setArticleList] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();

  useEffect(() => {
    getArticles().then(({ articles, total_count }) => {
      setArticleList(articles);
      setLoading(false);
      setTotal(total_count);
    });
  }, []);

  useEffect(() => {
    getArticles({ p: page }).then(({ articles }) => {
      setArticleList(articles);
      setLoading(false);
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

  if (loading) return <h1 className="loading">loading content</h1>;
  return (
    <div className="ArticleList">
      <p>Displaying {articleList.length} articles</p>
      <p>
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
    </div>
  );
}
