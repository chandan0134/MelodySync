import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";  
import { MdSpaceDashboard } from "react-icons/md";
import { useEffect,useState } from "react";
import apiClient from '../../spotify';

function Sidebar() {

  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
    //   setImage(response.data.images[0].url);
    console.log(response);
     });
   
  }, []);

 
  return (
    <div className="sidebar-container">
      <img
        src={image}
        className="profile-image"
        alt=""
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icons={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icons={<FaGripfire />} />
        <SidebarButton title="Library" to="/library" icons={<IoLibrary />} />
        <SidebarButton title="Favourites" to="/favourites" icons={<MdFavorite />} />
        <SidebarButton title="Player" to="/player" icons={<FaPlay />} />
      </div>
      <SidebarButton title="SignOut" to="/signout" icons={<FaSignOutAlt />} />
    </div>
  );
}

export default Sidebar;
