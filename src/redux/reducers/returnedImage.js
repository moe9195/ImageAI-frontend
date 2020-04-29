import { POST_IMAGE, SET_RETURNED_IMAGE } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_IMAGE:
      return action.payload;
    case SET_RETURNED_IMAGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
