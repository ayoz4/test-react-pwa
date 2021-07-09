import React from "react";

import "../../styles/common/Button.scss";

function Button({ children, type, onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
