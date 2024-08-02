import React from "react";
import { useNavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, toggleUser } = useNavbarContext();
  return (
    <div className="user-container">
      <p>{!user ? `Howdy, stranger` : `Welcome, ${user.name.toUpperCase()}`}</p>
      <button className="btn" onClick={toggleUser}>
        {!user ? "login" : "logout"}
      </button>
    </div>
  );
};

export default UserContainer;
