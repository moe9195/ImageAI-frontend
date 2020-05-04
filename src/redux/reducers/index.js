import { combineReducers } from "redux";

// Reducers

import imageReducer from "./image";
import returnedImageReducer from "./returnedImage";
import userReducer from "./user";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  image: imageReducer,
  returnedImage: returnedImageReducer,
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
