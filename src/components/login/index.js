import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <h3>Вход</h3>

        <TextFieldGroup label="Логин" />

        <TextFieldGroup
          label="Пароль
        "
        />
      </form>
    </div>
  );
}

export default Login;
