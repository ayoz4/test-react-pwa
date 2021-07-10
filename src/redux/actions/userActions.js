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

export const addRequest = async (username, data) => {
  if (!localStorage.getItem(USER_TOKEN)) return;

  const requestDb = JSON.parse(localStorage.getItem(REQUEST_DB));

  console.log(requestDb);

  requestDb.map((value) => {
    if (value.login === username) {
      value.requests = [...value.requests, data];
    }

    return value;
  });

  localStorage.setItem(REQUEST_DB, JSON.stringify(requestDb));
};
