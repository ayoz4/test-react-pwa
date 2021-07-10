import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar/Navbar.scss';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/search">
        <img className="navbar__logo" src="/sibdev-logo.svg" alt="No." />
      </Link>
      <nav className="navbar__nav">
        <ul className="navbar__container">
          <li className="active">
            <Link to="/search">Поиск</Link>
          </li>
          <li>
            <Link to="/favorites">Избранное</Link>
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
