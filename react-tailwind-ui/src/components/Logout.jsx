import { AuthContext } from "../context/AuthContext";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  const { user } = useContext(AuthContext);
  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    setLoggedOut(true);
  };

  if (loggedOut) {
    window.location.reload();
    return <Redirect to="/login" push={true} />;
  }

  return (
    <span
      className="text-sm font-medium cursor-pointer text-red-500"
      onClick={logout}
    >
      LogOut
    </span>
  );
}

export default Logout;
