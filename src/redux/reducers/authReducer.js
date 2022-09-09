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
  user: {},
  isFetching: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH_MODAL_OPEN:
      return { ...state, open: true };
    case TOOGLE_MODAL:
      return { ...state, open: false };
    case USER_AUTH_REQUESTED:
      return { ...state, isFetching: true, error: null, user: {} };
    case USER_REGISTER_SUCCESSED:
      return { ...state, isFetching: false, error: null, user: action.payload };
    case USER_REGISTER_FAILED:
      return { ...state, isFetching: false, error: action.payload, user: {} };
    case USER_LOGIN_SUCCESSED:
      return { ...state, isFetching: false, error: null, user: action.payload };
    case USER_LOGIN_FAILED:
      return { ...state, isFetching: false, error: action.payload, user: {} };
    default:
      return state;
  }
};

export default authReducer;
