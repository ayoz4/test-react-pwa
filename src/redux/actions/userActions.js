import jwt from "jsonwebtoken";

import users from "../../users.json";
import { USER_TOKEN } from "../consts";

export const login = (username, password) => {
  const user = users.find((value) => value.login === username);

  if (user && user.password === password) {
    const token = jwt.sign(user, "secretkey");

    localStorage.setItem(USER_TOKEN, token);

    return true;
  }

  return false;
};
