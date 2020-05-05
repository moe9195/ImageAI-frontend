import {
  SET_CURRENT_USER,
  SET_ERRORS,
  SET_CURRENT_PROFILE,
} from "./actionTypes";
import decode from "jwt-decode";
import instance from "./instance";

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    localStorage.removeItem("token");
  }
};

export const setCurrentUser = (token) => async (dispatch) => {
  setAuthToken(token);
  let user = null;
  let profile = null;
  if (token) {
    const decodedToken = decode(token);
    const user_id = decodedToken.user_id;
    const res = await instance.get(`/user/${user_id}/detail/`);
    const res2 = await instance.get(`/profile/${user_id}/detail/`);
    profile = res2.data;
    user = res.data;
  }
  dispatch({
    type: SET_CURRENT_PROFILE,
    payload: profile,
  });
  return dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
};

export const login = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/login/", userData);
    const token = res.data.access;
    dispatch(setCurrentUser(token));
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    await instance.post("/register/", userData);
    dispatch(login(userData));
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    if (1000 * user.exp >= Date.now()) {
      return setCurrentUser(token);
    }
  }
  return setCurrentUser();
};

export const fetchProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  let profile = null;
  if (token) {
    const decodedToken = decode(token);
    const id = decodedToken.user_id;
    const res2 = await instance.get(`/profile/${id}/detail/`);
    profile = res2.data;
  }
  return dispatch({
    type: SET_CURRENT_PROFILE,
    payload: profile,
  });
};
