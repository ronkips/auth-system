import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">LOGO</h3>

      <ul className="nav-links">
        <Link to="/">
          <li>Contact</li>
        </Link>
        <Link to="/">
          <li>Skills</li>
          <Link to="/">
            <li>About</li>
          </Link>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
