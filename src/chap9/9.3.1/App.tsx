import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About title={"여우와 늙다리들"} />} />
          <Route path="/members" element={<Members />}></Route>
          <Route path="/songs" element={<SongList />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
