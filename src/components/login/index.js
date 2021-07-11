import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

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

    validationSchema: Yup.object().shape({
      login: Yup.string().required("Логин - обязательное поле"),
      password: Yup.string().required("Пароль - обязательное поле"),
    }),

    onSubmit: (values, helpers) => {
      try {
        login(values.login, values.password);

        history.push("/search");
        helpers.resetForm();
      } catch (error) {
        helpers.setErrors({ auth: error.message });
      }
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
          errors={formik.errors.login}
          touched={formik.touched.login}
        />

        <TextFieldGroup
          label="Пароль"
          type="password"
          name="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          errors={formik.errors.password}
          touched={formik.touched.password}
        />

        <div className="login__submit">
          <button className="login__submitBtn" type="submit">
            Войти
          </button>
        </div>
        <span className="login__error">{formik.errors.auth}</span>
      </form>
    </div>
  );
}

export default Login;
