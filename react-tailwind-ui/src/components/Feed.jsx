import React from "react";
import Share from "./Share";
import Post from "./Post";

function Feed() {
  return (
    <div className="flex-auto">
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
