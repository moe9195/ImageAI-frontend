import { POST_IMAGE, SET_IMAGE, SET_RETURNED_IMAGE } from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const postImage = (imageUrl, method, style) => async (dispatch) => {
  var obj = {};
  try {
    if (method === "deep-art") {
      obj = {
        img: imageUrl,
        "ImageAI-api-key": "KMKJiUH3.CtOFKE58mNymOgYpzDHxrX23TQIEZFz2",
        style: style,
        format: "JPEG",
      };
    } else {
      obj = {
        img: imageUrl,
        "ImageAI-api-key": "KMKJiUH3.CtOFKE58mNymOgYpzDHxrX23TQIEZFz2",
        format: "JPEG",
      };
    }
    const res = await instance.post(`/${method}/`, obj);
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
