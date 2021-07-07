import React from "react";

import "../../styles/login/Login.scss";

function TextFieldGroup({
  handleChange,
  handleBlur,
  value,
  name,
  placeholder,
  errors,
  touched,
  label,
  type,
}) {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      ></input>
      {errors && touched ? (
        <span className="input__error">{errors}</span>
      ) : null}
    </div>
  );
}

export default TextFieldGroup;
