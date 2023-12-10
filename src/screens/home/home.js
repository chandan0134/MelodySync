import React from "react";
import { setClientToken } from "../../spotify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "../favourites/favourites";
import Trending from "../trending/trending";
import Player from "../player/player";
import Feed from "../feed/feed";
import Library from "../library/library";
import './home.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../auth/login";
import { useEffect,useState } from "react";

function Home() {

  const[token,setToken]=useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  
  return !token ? (
    <Login /> 
  ):(
    <Router>
      <div className="main-body">
        
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
