import React from "react";
import { useSelector } from "react-redux";

import "../../styles/favorites/Favorites.scss";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.requests);

  return (
    <div className="favorites">
      <div className="favorites__container">
        <h2>Избранное</h2>

        <ul className="favorites__list">
          {favorites.map((value) => (
            <li>
              <a>
                <b>{value.name}</b>
              </a>

              <div className="favorites__btnBlock">
                <button className="favorites__editBtn">Изменить</button>
                <button className="favorites__deleteBtn">Удалить</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
