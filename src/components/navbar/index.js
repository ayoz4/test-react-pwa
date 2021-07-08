import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar/Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <img className="navbar__logo" src="/sibdev-logo.svg" alt="No." />
      <nav className="navbar__nav">
        <ul className="navbar__container">
          <li className="active">
            <a href="#">
              <Link to="/search">Поиск</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link to="/favorites">Избранное</Link>
            </a>
          </li>
        </ul>
      </nav>
      <a className="navbar__logout" href="#">
        <button>Выйти</button>
      </a>
    </header>
  );
}

export default Navbar;
