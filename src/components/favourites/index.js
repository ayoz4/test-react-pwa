import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import jwt from "jsonwebtoken";
import { message } from "antd";

import "../../styles/favorites/Favorites.scss";
import FavoritesModal from "../searchResult/FavoritesModal";
import { deleteRequest } from "../../redux/actions/userActions";
import {
  GET_REQUESTS_SUCCESS,
  REQUEST_DB,
  USER_TOKEN,
} from "../../redux/consts";
import { search } from "../../redux/actions/youtubeActions";
import { Link } from "react-router-dom";
import EmptyPage from "./EmptyPage";

function Favorites({ search }) {
  const favorites = useSelector((state) => state.favorites.requests);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(
    jwt.verify(localStorage.getItem(USER_TOKEN), "secretkey")
  );
  const [requestDb, setRequestDb] = useState(
    JSON.parse(localStorage.getItem(REQUEST_DB))
  );

  useEffect(() => {
    if (!requestDb) {
      localStorage.setItem(REQUEST_DB, JSON.stringify([]));
      setRequestDb(JSON.parse(localStorage.getItem(REQUEST_DB)));
    }

    if (requestDb) {
      const matches = requestDb.filter(
        (value) => value.login === userData.login
      );

      if (matches.length === 0) {
        requestDb.push({ login: userData.login, requests: [] });

        localStorage.setItem(REQUEST_DB, JSON.stringify(requestDb));
      }

      dispatch({
        type: GET_REQUESTS_SUCCESS,
        data: JSON.parse(localStorage.getItem(REQUEST_DB)).filter(
          (value) => value.login === userData.login
        )[0],
      });
    }
  }, []);

  if (favorites.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div className="favorites">
      <div className="favorites__container">
        <h2>Избранное</h2>

        <ul className="favorites__list">
          {favorites.map((value) => (
            <li>
              <Link
                to="/result"
                onClick={() =>
                  search(value.query, value.videoQuantity, value.sortType)
                }
              >
                <b>{value.name}</b>
              </Link>

              <div className="favorites__btnBlock">
                <FavoritesModal data={value} edit>
                  <button className="favorites__editBtn">Изменить</button>
                </FavoritesModal>
                <button
                  className="favorites__deleteBtn"
                  onClick={() => {
                    try {
                      deleteRequest(userData.login, value.name);
                      dispatch({
                        type: GET_REQUESTS_SUCCESS,
                        data: JSON.parse(
                          localStorage.getItem(REQUEST_DB)
                        ).filter((value) => value.login === userData.login)[0],
                      });
                      message.success("Запрос был успешно удален");
                    } catch (error) {
                      message.error(error.message);
                    }
                  }}
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default connect(null, { search })(Favorites);
