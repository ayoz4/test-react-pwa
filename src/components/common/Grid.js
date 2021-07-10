import React from "react";
import VideoCard from "./VideoCard";

import "../../styles/searchResult/Grid.scss";

function Grid({ data }) {
  return (
    <div className="grid">
      {data.map((value) => (
        <VideoCard
          preview={`https://www.youtube.com/embed/${value.id.videoId}`}
          title={value.snippet.title}
          channelTitle={value.snippet.channelTitle}
        />
      ))}
    </div>
  );
}

export default Grid;
