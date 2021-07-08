import React from "react";

import "../../styles/searchResult/VideoCard.scss";

function VideoCard() {
  return (
    <div className="videoCard">
      <iframe
        width="245"
        height="138"
        src="https://www.youtube.com/embed/c7Eu_Vi2QIA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p className="videoCard__title">
        asdasdasdaksdhgajhgdjhasbhdjhasbhd alkjsd kjashdkljah dlkjah dlkjasd
      </p>

      <div className="videoCard__channelBlock">
        <span className="videoCard__channelTitle">
          adksjhajhdhajshdbaasmj dnakj ndkja dnkajsnd kjasdas da da sda sdasdnq
        </span>
        <p>786 тыс. просмотров</p>
      </div>
    </div>
  );
}

export default VideoCard;
