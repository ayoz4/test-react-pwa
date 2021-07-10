import React from "react";

import "../../styles/favorites/Favorites.scss";

function Favorites() {
  return (
    <div className="favorites">
      <div className="favorites__container">
        <h2>Избранное</h2>

        <ul className="favorites__list">
          <li>
            <a>
              <b>фыв фывфыв фыв</b>
            </a>

            <div className="favorites__btnBlock">
              <button className="favorites__editBtn">Изменить</button>
              <button className="favorites__deleteBtn">Удалить</button>
            </div>
          </li>
          <li>
            <a>
              <b>фыв фывфыв фыв</b>
            </a>

            <div className="favorites__btnBlock">
              <button className="favorites__editBtn">Изменить</button>
              <button className="favorites__deleteBtn">Удалить</button>
            </div>
          </li>

          <li>
            <a>
              <b>фыв фывфыв фыв</b>
            </a>

            <div className="favorites__btnBlock">
              <button className="favorites__editBtn">Изменить</button>
              <button className="favorites__deleteBtn">Удалить</button>
            </div>
          </li>

          <li>
            <a>
              <b>фыв фывфыв фыв</b>
            </a>

            <div className="favorites__btnBlock">
              <button className="favorites__editBtn">Изменить</button>
              <button className="favorites__deleteBtn">Удалить</button>
            </div>
          </li>

          <li>
            <a>
              <b>фыв фывфыв фыв</b>
            </a>

            <div className="favorites__btnBlock">
              <button className="favorites__editBtn">Изменить</button>
              <button className="favorites__deleteBtn">Удалить</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
