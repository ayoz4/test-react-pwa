import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import "../../styles/login/Login.scss";
import TextFieldGroup from "../common/TextFieldGroup";
import { login } from "../../redux/actions/userActions";

function Login() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },

    onSubmit: (values) => {
      if (login(values.login, values.password)) history.push("/search");
    },
  });

  return (
    <div className="login">
      <form className="login__form" onSubmit={formik.handleSubmit}>
        <img className="login__logo" src="/sibdev-logo.svg" alt="Sibdev logo" />

        <h3>Вход</h3>

        <TextFieldGroup
          label="Логин"
          name="login"
          value={formik.values.login}
          handleChange={formik.handleChange}
        />

        <TextFieldGroup
          label="Пароль"
          type="password"
          name="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
        />

        <div className="login__submit">
          <button className="login__submitBtn" type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
