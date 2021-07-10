import React from "react";

import "../../styles/searchResult/VideoCardList.scss";

function VideoCardList() {
  return (
    <div className="videoCardList">
      <iframe
        width="157"
        height="88"
        src="https://www.youtube.com/embed/c7Eu_Vi2QIA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="videoCardList__info">
        <p className="videoCardList__title">
          asdasdasdaksdhgajhgdjhasbhdjhasbhd alkjsd kjashdkljah dlkjah dlkjasd
        </p>

        <div className="videoCardList__channelBlock">
          <span className="videoCardList__channelTitle">
            adksjhajhdhajshdbaasmj dnakj ndkja dnkajsnd kjasdas
          </span>
          <p>786 тыс. просмотров</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCardList;
