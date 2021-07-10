import {
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from "../consts";

let videosDefaultState = {
  isFetching: false,
  isFetched: false,
  error: null,
  result: {
    query: "",
    pageInfo: {
      totalResults: null,
      resultsPerPage: null,
    },
    items: [],
  },
};

const videos = (state = videosDefaultState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        result: action.data,
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        error: action.data,
      };
    default:
      return state;
  }
};

export default videos;
