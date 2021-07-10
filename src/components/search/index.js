import React from "react";

import "../../styles/search/SearchPage.scss";
import SearchInput from "../common/SearchInput";
import withSearch from "../common/withSearch";

function SearchPage({ search, history }) {
  return (
    <div className="search">
      <form className="search__form">
        <h1>Поиск видео</h1>

        <SearchInput search={search} history={history} />
      </form>
    </div>
  );
}

export default withSearch(SearchPage);
