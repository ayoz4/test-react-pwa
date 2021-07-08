import React from "react";

import "../../styles/searchResult/List.scss";
import VideoCardList from "./VideoCardList";

function List() {
  return (
    <div className="list">
      <VideoCardList />
      <VideoCardList />
      <VideoCardList />
      <VideoCardList />
    </div>
  );
}

export default List;
