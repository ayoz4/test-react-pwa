import axios from "axios";
import {
  YOUTUBE_API,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from "../consts";

export const search = (query) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_VIDEOS_REQUEST });

    const msg = await axios({
      method: "GET",
      url:
        YOUTUBE_API +
        `?part=snippet&q=${query}&maxResults=12&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    });

    return dispatch({
      type: FETCH_VIDEOS_SUCCESS,
      data: { ...msg.data, query: query },
    });
  } catch (error) {
    throw dispatch({ type: FETCH_VIDEOS_FAILURE, data: error.response });
  }
};

export const test = "test";
