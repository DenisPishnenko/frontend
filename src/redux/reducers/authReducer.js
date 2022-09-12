import {
  IS_AUTH_MODAL_OPEN,
  TOOGLE_MODAL,
  USER_AUTH_REQUESTED,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESSED,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESSED,
} from "../../constants";

const initialState = {
  open: false,
  user: null,
  isFetching: false,
  isLoggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case IS_AUTH_MODAL_OPEN:
      return { ...state, open: true };
    case TOOGLE_MODAL:
      return { ...state, open: false };
    case USER_AUTH_REQUESTED:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case USER_REGISTER_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        error: null,
        user: action.payload,
        open: false,
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case USER_LOGIN_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        error: null,
        user: action.payload,
        open: false,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
