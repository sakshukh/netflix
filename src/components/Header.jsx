import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="flex">
      <div className="w-full">
        <img
          className="w-44 ml-10 mt-8 absolute z-10 bg-black bg-opacity-80"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div>
          <button onClick={handleSignOut}>Signout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
