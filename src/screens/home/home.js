import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "../favourites/favourites";
import Trending from "../trending/trending";
import Player from "../player/player";
import Feed from "../feed/feed";
import Library from "../library/library";
import './home.css';
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
