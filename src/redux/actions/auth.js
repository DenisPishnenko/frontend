import {
  OPEN_MODAL,
  CLOSE_MODAL,
  USER_AUTH_REQUESTED,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESSED,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESSED,
  USER_LOGOUT,
} from "../../constants";

export const openModal = (payload) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const register = (payload) => ({
  type: USER_AUTH_REQUESTED,
  payload,
});

export const registerSuccessed = (payload) => ({
  type: USER_REGISTER_SUCCESSED,
  payload,
});

export const registerFailed = (error) => ({
  type: USER_REGISTER_FAILED,
  payload: error,
});

export const login = (payload) => ({
  type: USER_LOGIN_REQUESTED,
  payload,
});

export const loginSuccessed = (payload) => ({
  type: USER_LOGIN_SUCCESSED,
  payload,
});

export const loginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error,
});

export const logout = () => ({
  type: USER_LOGOUT,
});
