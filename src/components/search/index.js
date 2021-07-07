import React from "react";

import "../../styles/search/SearchPage.scss";

function SearchPage() {
  return (
    <div className="search">
      <form className="search__form">
        <h1>Поиск видео</h1>

        <div className="search__inputArea">
          <input />

          <button>Найти</button>
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
