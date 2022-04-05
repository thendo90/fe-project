import React, { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import Loading from "../Loading";
import ArticleCard from "./ArticleCard";
import Sorter from "../Utils/Sorter";
import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const { topic } = useParams();

  const [articleList, setArticleList] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [query, setQuery] = useState({ p: page, topic });
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles(query)
      .then(({ articles, total_count }) => {
        setArticleList(articles);
        setLoading(false);
        setTotal(total_count);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [page, query]);

  const handlePageTurn = (turn) => {
    setLoading(true);
    setPage((currentPage) => {
      return currentPage + turn;
    });
  };

  if (loading) return <Loading />;
  if (error) return <ErrorPage message={`Topic ${topic} does not exist`} />;
  return (
    <article className={`ArticleList ${topic}`}>
      {topic ? <h1 className={topic}>{topic}</h1> : ""}
      <Sorter setQuery={setQuery} topic={topic} />
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
          handlePageTurn(-1);
        }}
      >
        previous page
      </button>
      <button
        hidden={page === Math.ceil(total / 10)}
        className="next"
        onClick={() => {
          handlePageTurn(1);
        }}
      >
        next page
      </button>

      <br></br>
    </article>
  );
}
