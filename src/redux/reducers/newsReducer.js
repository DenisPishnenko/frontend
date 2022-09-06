import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_PROGRESSED,
  NEWS_FETCHED_SUCCESSED,
} from "../../constants";

const initialState = {
  news: [],
  error: null,
  isLoading: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCHED_PROGRESSED:
      return { ...state, isLoading: true };
    case NEWS_FETCHED_SUCCESSED:
      return { ...state, news: action.payload, isLoading: false };
    case NEWS_FETCHED_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default newsReducer;
