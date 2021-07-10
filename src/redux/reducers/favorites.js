import { GET_REQUESTS_SUCCESS } from "../consts";

let requestDefaultState = {
  login: "",
  requests: [],
};

const favorites = (state = requestDefaultState, action) => {
  switch (action.type) {
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        login: action.data.login,
        requests: action.data.requests,
      };
    default:
      return state;
  }
};

export default favorites;
