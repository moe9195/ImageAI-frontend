import { POST_IMAGE, SET_IMAGE, SET_RETURNED_IMAGE } from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const postImage = (imageUrl, method, style) => async (dispatch) => {
  try {
    if (method === "DeepArt") {
      var obj = { img: imageUrl, method: method, style: style };
    } else {
      var obj = { img: imageUrl, method: method };
    }
    const res = await instance.post("/post/", obj);
    const returnedImage = res.data;
    dispatch({
      type: POST_IMAGE,
      payload: returnedImage,
    });
  } catch (error) {
    console.error(error);
  }
};

export const setImage = (image) => {
  return {
    type: SET_IMAGE,
    payload: image,
  };
};

export const setReturnedImage = (image) => {
  return {
    type: SET_RETURNED_IMAGE,
    payload: image,
  };
};
