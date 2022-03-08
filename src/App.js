import "./App.css";

function App() {
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
