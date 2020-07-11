import Axios from "axios";
import * as actionTypes from "./actionType";

const apiEndPoint = "https://api.covid19api.com/summary"; // end point API

export const getCases = () => (dispatch) => {
  // getCases Action
  Axios.get(`${apiEndPoint}`).then((response) => {
    dispatch({
      type: actionTypes.GET_CASES,
      payload: response,
    });
  });
};
