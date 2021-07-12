import axios from "axios";
import {
  YOUTUBE_API,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from "../consts";

export const search =
  (query, maxResults = 12, order = "relevance") =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_VIDEOS_REQUEST });

      const msg = await axios({
        method: "GET",
        url:
          YOUTUBE_API +
          `search?part=snippet&q=${query}&maxResults=${maxResults}&order=${order}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      });

      await msg.data.items.map(async (value) => {
        const video = await axios({
          method: "GET",
          url:
            YOUTUBE_API +
            `videos?part=statistics&id=${value.id.videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        });

        value.viewCount = await video.data.items[0].statistics.viewCount;

        return value;
      });

      return dispatch({
        type: FETCH_VIDEOS_SUCCESS,
        data: { ...msg.data, query: query },
      });
    } catch (error) {
      console.log(error);
      throw dispatch({ type: FETCH_VIDEOS_FAILURE, data: error.response });
    }
  };

export const test = "test";
