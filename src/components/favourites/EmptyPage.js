import React from "react";
import { Link } from "react-router-dom";

import "../../styles/favorites/EmptyPage.scss";

function EmptyPage() {
  return (
    <div className="emptyFav">
      <div className="emptyFav__container">
        <h1>Вы еще ничего не добавили в избранное</h1>
        <Link to="/search">Перейти к поиску</Link>
      </div>
    </div>
  );
}

export default EmptyPage;
