import React from "react";

import "../../styles/searchResult/List.scss";
import VideoCardList from "./VideoCardList";

function List({ data }) {
  return (
    <div className="list">
      {data.map((value) => (
        <VideoCardList
          preview={`https://www.youtube.com/embed/${value.id.videoId}`}
          title={value.snippet.title}
          channelTitle={value.snippet.channelTitle}
        />
      ))}
    </div>
  );
}

export default List;
