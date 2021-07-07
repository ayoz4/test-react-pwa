import React from "react";

import "../../styles/common/Button.scss";

function Button({ children }) {
  return <button className="submitButton">{children}</button>;
}

export default Button;
