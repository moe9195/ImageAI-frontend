import { combineReducers } from "redux";

// Reducers

import imageReducer from "./image";
import returnedImageReducer from "./returnedImage";

const rootReducer = combineReducers({
  image: imageReducer,
  returnedImage: returnedImageReducer,
});

export default rootReducer;
