import React from "react";

import "../../styles/common/SearchInput.scss";
import Button from "./Button";

function SearchInput() {
  return (
    <div className="searchInput">
      <input className="searchInput__input" />

      <Button className="searchInput__button">Найти</Button>
    </div>
  );
}

export default SearchInput;
