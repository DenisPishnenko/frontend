import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
  USER_NEWS_FETCHED_FAILED,
  USER_NEWS_FETCHED_REQUESTED,
  USER_NEWS_FETCHED_SUCCESSED,
} from '../../constants';

const initialState = {
  news: [],
  error: null,
  isLoading: false,
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEWS_FETCHED_REQUESTED:
    case USER_NEWS_FETCHED_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case NEWS_FETCHED_SUCCESSED:
    case USER_NEWS_FETCHED_SUCCESSED:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
        error: null,
      };
    case NEWS_FETCHED_FAILED:
    case USER_NEWS_FETCHED_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
