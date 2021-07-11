import React from "react";
import classnames from "classnames";

import "../../styles/common/SelectInput.scss";

function SelectInput({
  label,
  options = [],
  errors,
  touched,
  name,
  value,
  handleChange,
  disabled,
}) {
  return (
    <div className="select">
      {label && (
        <label className={classnames({ "label-disabled": disabled })}>
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        <option value="">Выберите...</option>
        {options.map((value, index) => (
          <option value={value.value} key={index}>
            {value.key}
          </option>
        ))}
      </select>

      {errors && touched && <span>{errors}</span>}
    </div>
  );
}

export default SelectInput;
