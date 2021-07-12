import React, { useState } from "react";

import "../../styles/search/SearchPage.scss";
import SearchInput from "../common/SearchInput";
import withSearch from "../common/withSearch";

function SearchPage({ search, history }) {
  const [error, setError] = useState("");

  return (
    <div className="search">
      <form className="search__form">
        <h1>Поиск видео</h1>

        <SearchInput search={search} history={history} setError={setError} />

        {error && <span className="search__error">{error}</span>}
      </form>
    </div>
  );
}

export default withSearch(SearchPage);
