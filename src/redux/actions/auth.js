import {
  IS_AUTH_MODAL_OPEN,
  TOOGLE_MODAL,
  USER_AUTH_REQUESTED,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESSED,
} from "../../constants";

export const openModal = () => ({
  type: IS_AUTH_MODAL_OPEN,
});

export const toogleModal = () => ({
  type: TOOGLE_MODAL,
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
