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
  USER_LOGOUT_SUCCESSED,
  USER_LOGOUT_FAILED,
  CHECK_USER_REQUESTED_SUCCESSED,
} from '../../constants';

const initialState = {
  isOpenModal: false,
  modalType: '',
  user: null,
  isFetching: false,
  isLoggedIn: Boolean(localStorage.getItem('token')),
  error: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        modalType: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false,
      };
    case USER_AUTH_REQUESTED:
    case USER_LOGIN_REQUESTED:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case USER_REGISTER_SUCCESSED:
    case USER_LOGIN_SUCCESSED:
    case CHECK_USER_REQUESTED_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        error: null,
        user: action.payload,
        isOpenModal: false,
      };
    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: false,
      };
    case USER_LOGOUT_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: null,
        user: null,
        isOpenModal: false,
      };
    case USER_LOGOUT_FAILED:
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
