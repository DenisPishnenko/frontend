import {
  USER_EDIT_REQUESTED,
  USER_EDIT_REQUESTED_FAILED,
  USER_EDIT_REQUESTED_SUCCESSED,
  USER_REQUESTED, USER_REQUESTED_FAILED,
  USER_REQUESTED_SUCCESSED,
  CHECK_USER_REQUESTED,
  CHECK_USER_REQUESTED_FAILED,
  CHECK_USER_REQUESTED_SUCCESSED,
  USER_NEWS_FETCHED_REQUESTED,
  USER_NEWS_FETCHED_SUCCESSED,
  USER_NEWS_FETCHED_FAILED,
} from '../../constants';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  news: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_REQUESTED:
    case USER_EDIT_REQUESTED:
    case CHECK_USER_REQUESTED:
    case USER_NEWS_FETCHED_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER_REQUESTED_SUCCESSED:
    case USER_EDIT_REQUESTED_SUCCESSED:
    case CHECK_USER_REQUESTED_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        error: false,
        user: action.payload,
      };
    case USER_REQUESTED_FAILED:
    case USER_EDIT_REQUESTED_FAILED:
    case CHECK_USER_REQUESTED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        user: null,
      };
    case USER_NEWS_FETCHED_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        error: false,
        news: action.payload,
      };
    case USER_NEWS_FETCHED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        news: [],
      };
    default:
      return state;
  }
};

export default userReducer;
