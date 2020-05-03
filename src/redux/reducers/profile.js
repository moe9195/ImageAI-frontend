import { SET_CURRENT_PROFILE } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
