import { GET_REQUESTS_SUCCESS } from "../consts";

export const getFavorites = (data) => (dispatch) =>
  dispatch({ type: GET_REQUESTS_SUCCESS, data: data });
