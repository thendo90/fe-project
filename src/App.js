import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <BottomBar />
    </div>
  );
}

export default App;
