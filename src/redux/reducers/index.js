import { combineReducers } from "redux";

// Reducers

import imageReducer from "./image";
import returnedImageReducer from "./returnedImage";
// You can combine these reducers into images.js
// no need to split
const rootReducer = combineReducers({
  image: imageReducer,
  returnedImage: returnedImageReducer,
});

export default rootReducer;
