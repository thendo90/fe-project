import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ArticlePage from "./components/Articles/ArticlePage";
import { UserContext } from "./contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import TopicList from "./components/Topics/TopicList";
import "./App.css";
import CommentList from "./components/Comments/CommentList";
import ErrorPage from "./components/ErrorPage";
import ArticleList from "./components/Articles/ArticleList";
import UserList from "./components/Users/UserList";
import UserPage from "./components/Users/UserPage";
import Account from "./components/Users/Account";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle",
    username: "tickle122",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
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
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:username" element={<UserPage />} />
          <Route path="/myacc" element={<Account />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Nav />
      </div>
    </UserContext.Provider>
  );
}

export default App;
