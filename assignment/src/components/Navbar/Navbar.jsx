import React, { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
const Navbar = ({ hasAuthTrue }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className={Styles.navWrapper}>
      <h1>Analytics Dashboard</h1>
      <div className={Styles.logoutButton}>
        {hasAuthTrue && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
};

export default Navbar;
