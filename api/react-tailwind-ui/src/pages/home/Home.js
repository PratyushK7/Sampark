import React from "react";
import Feed from "../../components/Feed.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import Topbar from "../../components/Topbar.jsx";
import Rightbar from "../../components/Rightbar.jsx";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
