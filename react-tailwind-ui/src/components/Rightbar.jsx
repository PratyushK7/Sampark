import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user ? user.id : null)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + currentUser._id);
        console.log(friendList.data);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightbar = () => {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />

        <div className="min-h-screen flex flex-row bg-gray-100">
          <div className="flex flex-col w-96 bg-white rounded-r-3xl scroll-vertical-always overflow-x-hidden  h-screen">
            <ul className="flex flex-col py-4">
              <li>
                <span className="flex flex-row items-center h-20 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-cake bx-md text-red-400"></i>
                  </span>
                  <span className="text-sm font-medium">
                    <span className="text-red-400">Pola Foster</span> and{" "}
                    <span className="text-red-400">3 others </span>
                    have birthday today
                  </span>
                </span>
              </li>

              <div className="divide-y-2 divide-gray-200 divide-solid">
                <div></div>
                <div></div>
              </div>

              <li>
                <span className="flex flex-row items-center h-20 transform hover:translate-x-2   transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                  <span className="text-sm font-medium">
                    <span className="text-blue-400">Online Friends </span>
                  </span>
                </span>
              </li>

              {friends.map((friend) => (
                <li key={friend._id}>
                  <span className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 mr-2">
                      <img
                        className="rounded-full border border-gray-100 shadow-sm h-8 w-8"
                        src={
                          friend.profilePicture
                            ? friend.profilePicture
                            : friend.gender === 1
                            ? PF + "avatar_male.png"
                            : PF + "avatar_female.png"
                        }
                        alt="user avatar"
                      />
                    </span>
                    <span className="text-sm font-medium">
                      {friend.username}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <HomeRightbar />
    </div>
  );
}

export default Rightbar;
