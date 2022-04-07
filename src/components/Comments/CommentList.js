import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCommentsById } from "../api/api";
import Loading from "../Loading";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function CommentList() {
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [commentList, setCommentList] = useState();

  useEffect(() => {
    setLoading(true);
    getCommentsById(article_id).then(({ comments }) => {
      setCommentList(comments);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) return <Loading />;
  return (
    <>
      <article className="comment__list">
        <Link to={`/articles/${article_id}`} className="link link_comments">
          Return to article
        </Link>
        <p className="undefined">Displaying {commentList.length} comments</p>
        <CommentForm id={article_id} setCommentList={setCommentList} />

        {commentList.map((comment) => {
          return (
            <CommentCard comment={comment} setCommentList={setCommentList} />
          );
        })}

        <Link to={`/articles/${article_id}`} className="link link_comments">
          Return to article
        </Link>
      </article>
    </>
  );
}
