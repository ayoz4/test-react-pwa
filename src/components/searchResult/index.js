import React from "react";

import "../../styles/searchResult/SearchResult.scss";
import List from "../common/List";
import SearchInput from "../common/SearchInput";
import VideoCard from "../common/VideoCard";

function SearchResult() {
  return (
    <div className="result">
      <div className="result__container">
        <h2>Поиск видео</h2>

        <SearchInput />

        <div className="result__filter">
          <div className="result__query">
            <p>
              Видео по запросу <b>«чем кормить кота»</b>
            </p>

            <span>7230</span>
          </div>

          <div className="result__gridType">
            <img src="/list.svg" alt="list" />
            <img src="/grid.svg" alt="grid" />
          </div>
        </div>

        <List />
      </div>
    </div>
  );
}

export default SearchResult;
