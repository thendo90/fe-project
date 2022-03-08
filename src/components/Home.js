import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ArticleList from "./Articles/ArticleList";

export default function Home() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="Home">
      <h3>Here's the news for today {loggedInUser}</h3>
      <ArticleList />
    </div>
  );
}
