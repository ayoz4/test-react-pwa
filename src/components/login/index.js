import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";

import "../../styles/login/Login.scss";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <img className="login__logo" src="/sibdev-logo.svg" alt="Sibdev logo" />

        <h3>Вход</h3>

        <TextFieldGroup label="Логин" />

        <TextFieldGroup label="Пароль" type="password" />

        <div className="login__submit">
          <button className="login__submitBtn">Войти</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
