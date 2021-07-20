import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar.jsx";
import axios from "axios";
import ProfileCard from "../../components/ProfileCard.jsx";
import { useParams } from "react-router";

function Profile() {
  const [user, setUser] = useState({});

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div>
      <Topbar />
      <ProfileCard user={user} />
    </div>
  );
}

export default Profile;
