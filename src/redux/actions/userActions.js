import jwt from "jsonwebtoken";

import users from "../../users.json";
import { REQUEST_DB, USER_TOKEN } from "../consts";

export const login = (username, password) => {
  const user = users.find((value) => value.login === username);

  if (user && user.password === password) {
    const token = jwt.sign(user, "secretkey");

    localStorage.setItem(USER_TOKEN, token);

    return true;
  }

  return false;
};

export const addRequest = (username, data) => {
  try {
    if (!localStorage.getItem(USER_TOKEN))
      throw new Error("Пользователь не авторизирован");

    const requestDb = JSON.parse(localStorage.getItem(REQUEST_DB));

    requestDb.map((value) => {
      if (value.login === username) {
        if (value.requests.some((element) => element.name === data.name)) {
          throw new Error("Такой запрос уже был добавлен");
        }

        value.requests = [...value.requests, data];
      }

      return value;
    });

    localStorage.setItem(REQUEST_DB, JSON.stringify(requestDb));
  } catch (error) {
    throw error;
  }
};
