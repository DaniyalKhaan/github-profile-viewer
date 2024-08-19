import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="logo-nav">
          Git Explorer
        </Link>
        <div className="link-cont">
          <a href="##">Repos</a>
          <Link to="/users">Users</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
