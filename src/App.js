import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("test user");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
        </Routes>
        <BottomBar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
