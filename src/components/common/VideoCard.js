import React from "react";

import "../../styles/searchResult/VideoCard.scss";

function VideoCard({ preview, title, channelTitle, viewCount }) {
  return (
    <div className="videoCard">
      <iframe
        width="245"
        height="138"
        src={preview}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="videoCard__title">{title}</p>

      <div className="videoCard__channelBlock">
        <span className="videoCard__channelTitle">{channelTitle}</span>
        <p>{viewCount} просмотров</p>
      </div>
    </div>
  );
}

export default VideoCard;
