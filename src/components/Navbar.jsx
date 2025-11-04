import React from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Users trying to logout ");
    logOut().then(() => {
      alert("You are logged Out")
    }).catch((error) => {
      console.log(error);
    });
  }
  const { user, logOut } = use(AuthContext)
  return (
    <div className="flex justify-between items-center">
      <div className=""> {user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImg} alt="" />
        {user ? <button onClick={handleLogout} className="btn btn-primary px-10 ">LogOut</button> : <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
