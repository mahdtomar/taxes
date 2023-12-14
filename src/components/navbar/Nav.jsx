import React from "react";
import { Link } from "react-router-dom";
import "./scss/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="grid-12 container">
        <div className="logo">Logo</div>
        <ul>
          <Link to={""}>Home</Link>
          <Link to={""}>Finances</Link>
          <Link to={""}>About Us</Link>
          <Link to={""}>Contacts</Link>
        </ul>
        <div className="login">
          <button className="login-btn">Login</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
