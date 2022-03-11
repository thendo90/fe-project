import React, { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import Loading from "../Loading";
import ArticleCard from "./ArticleCard";
import Sorter from "../Utils/Sorter";

export default function ArticleList({ topic }) {
  const [articleList, setArticleList] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [query, setQuery] = useState({ p: page, topic });

  useEffect(() => {
    console.log(query);
    getArticles(query).then(({ articles, total_count }) => {
      setArticleList(articles);
      setLoading(false);
      setTotal(total_count);
    });
  }, [page, query]);

  const handlePageTurn = (turn) => {
    setLoading(true);
    setPage((currentPage) => {
      return currentPage + turn;
    });
  };

  if (loading) return <Loading />;
  return (
    <article className={`ArticleList ${topic}`}>
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
