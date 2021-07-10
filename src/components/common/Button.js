import React from "react";

import "../../styles/common/Button.scss";

function Button({ children, style, type, onClick }) {
  return (
    <button className={`btn btn-${style}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
