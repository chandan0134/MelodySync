import React, { useEffect, useState } from 'react';
import APIkit from '../../spotify';
import './library.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch user's playlists
    APIkit.get('me/playlists').then(function (response) {
      // Access the items array from response.data
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className='screen-container'>
      <div className='library-body'>
      {playlists?.map((playlist) => (
        <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
        <img src={playlist.images[0].url} className="playlist-image" alt="playlist-Art" />
         <p className="playlist-title">{playlist.name}</p>
         <p className="playlist-subtitle">{playlist.tracks.total}</p>
         <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Library;
