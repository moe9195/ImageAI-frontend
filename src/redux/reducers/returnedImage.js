import { POST_IMAGE } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_IMAGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
