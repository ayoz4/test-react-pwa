import React from "react";
import { Link, useHistory } from "react-router-dom";

import "../../styles/navbar/Navbar.scss";
import { USER_TOKEN } from "../../redux/consts";

function Navbar() {
  const history = useHistory();

  const logout = () => {
    if (localStorage.getItem(USER_TOKEN)) {
      localStorage.removeItem(USER_TOKEN);
      history.push("/");
    }
  };

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
        <button onClick={() => logout()}>Выйти</button>
      </a>
    </header>
  );
}

export default Navbar;
