import React, { useState, useEffect } from "react";
import { FcLike, FcComments, FcExpand } from "react-icons/fc";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import avatar_male from "../assets/avatar_male.png";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <div className="ml-11 px-4 py-8 max-w-3xl my-4">
        <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
          <div className="md:flex-shrink-0">
            <img
              src={post.img}
              className="w-full h-96 rounded-lg rounded-b-none"
              alt="post"
            />
          </div>

          <div className="author flex items-center -ml-3 my-3">
            <div className="user-logo">
              <Link to={`profile/${user.username}`}>
                <img
                  className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                  src={user.profilePicture || avatar_male}
                  alt="avatar"
                />
              </Link>
            </div>
            <h2 className="text-sm text-red-400">
              <Link to={`profile/${user.username}`}>{user.username}</Link>
              <span className="text-gray-400 ml-4">
                {format(post.createdAt)}
              </span>
            </h2>
          </div>

          <div className="px-4 py-2 mt-2">
            <h2 className="font-medium text-lg text-gray-500 tracking-normal">
              {post.desc}{" "}
            </h2>
            <div className="flex items-center justify-between mt-2 mx-6">
              <span className="text-gray-500 text-xs -ml-6">
                <FcExpand />
              </span>
              <div className="flex">
                <span
                  className="flex text-red-400 mr-2.5 cursor-pointer"
                  onClick={likeHandler}
                >
                  <FcLike className="mt-1" />
                  {like}
                </span>
                <span className="flex text-green-400 cursor-pointer">
                  <FcComments className="mt-1" />
                  {post.comment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
