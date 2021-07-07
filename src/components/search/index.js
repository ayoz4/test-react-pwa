import React from "react";

import "../../styles/search/SearchPage.scss";
import SearchInput from "../common/SearchInput";

function SearchPage() {
  return (
    <div className="search">
      <form className="search__form">
        <h1>Поиск видео</h1>

        <SearchInput />
      </form>
    </div>
  );
}

export default SearchPage;
