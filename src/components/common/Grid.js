import React from "react";
import VideoCard from "./VideoCard";

import "../../styles/searchResult/Grid.scss";

function Grid() {
  return (
    <div className="grid">
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

export default Grid;
