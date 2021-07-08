import React from "react";
import VideoCard from "./VideoCard";

import "../../styles/searchResult/List.scss";

function List() {
  return (
    <div className="list">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default List;
