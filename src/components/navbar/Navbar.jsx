import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          TravellerHUB.com
        </span>
        <div className="navItems">
          <button className="navButton">Kayıt Ol</button>
          <button className="navButton">Giriş Yap</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
