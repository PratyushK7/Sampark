import React, { useEffect, useState } from "react";
import Share from "./Share";
import Post from "./Post";
import axios from "axios";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/profile" + username)
        : await axios.get("posts/timeline/60e35dfcc71f21394c144f70");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="flex-auto">
      <Share />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}

export default Feed;
