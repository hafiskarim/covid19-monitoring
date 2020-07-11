import * as actionTypes from "../actions/actionType";
const initialState = {
  casesData: [],
};
const casesReducer = (state = initialState, action) => {
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
