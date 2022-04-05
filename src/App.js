import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import ArticlePage from "./components/Articles/ArticlePage";
import { UserContext } from "./contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import TopicList from "./components/Topics/TopicList";
import "./App.css";
import CommentList from "./components/Comments/CommentList";
import ErrorPage from "./components/ErrorPage";
import ArticleList from "./components/Articles/ArticleList";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("grumpy19");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Nav />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route
            path="/articles/:article_id/comments"
            element={<CommentList />}
          />
          <Route path="/topics/:topic" element={<ArticleList />} />
          <Route path="/topics" element={<TopicList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <BottomBar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
