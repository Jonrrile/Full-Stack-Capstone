import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        BetOnIt!
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/teams" className="nav-link">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;