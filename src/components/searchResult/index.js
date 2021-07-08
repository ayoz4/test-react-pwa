import React, { useState } from "react";

import "../../styles/searchResult/SearchResult.scss";
import List from "../common/List";
import Grid from "../common/Grid";
import SearchInput from "../common/SearchInput";
import VideoCard from "../common/VideoCard";

function SearchResult() {
  const [isList, setIsList] = useState(false);

  return (
    <div className="result">
      <div className="result__container">
        <h2>Поиск видео</h2>

        <SearchInput searched />

        <div className="result__filter">
          <div className="result__query">
            <p>
              Видео по запросу <b>«чем кормить кота»</b>
            </p>

            <span>7230</span>
          </div>

          <div className="result__gridType">
            <svg
              className="result__list"
              onClick={() => setIsList(true)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M8 6H21"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12H21"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 18H21"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6H3.01"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 12H3.01"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 18H3.01"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>

            <svg
              className="result__grid"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsList(false)}
            >
              <g opacity="0.3">
                <path
                  d="M10 5H5V10H10V5Z"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 5H14V10H19V5Z"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 14H14V19H19V14Z"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14H5V19H10V14Z"
                  stroke="#272727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>

        {isList ? <List /> : <Grid />}
      </div>
    </div>
  );
}

export default SearchResult;
