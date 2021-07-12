import React from "react";

import "../../styles/searchResult/List.scss";
import VideoCardList from "./VideoCardList";

function List({ data }) {
  return (
    <div className="list">
      {data.map((value, index) => (
        <VideoCardList
          key={index}
          preview={`https://www.youtube.com/embed/${value.id.videoId}`}
          title={value.snippet.title}
          channelTitle={value.snippet.channelTitle}
          viewCount={value.viewCount}
        />
      ))}
    </div>
  );
}

export default List;
