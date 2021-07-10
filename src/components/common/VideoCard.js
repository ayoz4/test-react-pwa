import React from "react";

import "../../styles/searchResult/VideoCard.scss";

function VideoCard({ preview, title, channelTitle }) {
  return (
    <div className="videoCard">
      <iframe
        width="245"
        height="138"
        src={preview}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p className="videoCard__title">{title}</p>

      <div className="videoCard__channelBlock">
        <span className="videoCard__channelTitle">{channelTitle}</span>
        <p>786 тыс. просмотров</p>
      </div>
    </div>
  );
}

export default VideoCard;
