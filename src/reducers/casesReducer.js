import * as actionTypes from "../actions/actionType";
const initialState = {
  casesData: [], // casesData dengan bentuk array untuk menyimpan data json dari API
};
const casesReducer = (state = initialState, action) => {
  // casesReducers Reducer
  switch (action.type) {
    case actionTypes.GET_CASES:
      console.log("action: ", action);
      return {
        ...state,
        casesData: action.payload.data,
      };
    default:
      return state;
  }
};

export default casesReducer;
