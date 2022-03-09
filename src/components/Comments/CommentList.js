import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCommentsById } from "../api/api";
import Loading from "../Loading";
import CommentCard from "./CommentCard";

export default function CommentList() {
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [commentList, setCommentList] = useState();

  useEffect(() => {
    getCommentsById(article_id).then(({ comments }) => {
      setCommentList(comments);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <article className="comment__list">
        <p className="undefined">Displaying {commentList.length} comments</p>
        <Link to={`/articles/${article_id}`} className="link link_comments">
          Return to article
        </Link>

        {commentList.map((comment) => {
          return <CommentCard comment={comment} />;
        })}

        <Link to={`/articles/${article_id}`} className="link link_comments">
          Return to article
        </Link>
      </article>
    </>
  );
}
