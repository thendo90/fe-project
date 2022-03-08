import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import ArticlePage from "./components/Articles/ArticlePage";
import { UserContext } from "./contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import TopicPage from "./components/Topics/TopicPage";
import TopicList from "./components/Topics/TopicList";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("TEST USER");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Nav />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
          <Route path="/topics/:topic" element={<TopicPage />}></Route>
          <Route path="/topics" element={<TopicList />}></Route>
        </Routes>
        <BottomBar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
