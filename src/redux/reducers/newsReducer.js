import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
  SEARCHED_NEWS_REQUESTED,
  SET_FILTER_TYPE,
} from '../../constants';

const initialState = {
  news: [],
  error: null,
  isLoading: false,
  searchText: '',
  filterType: '',
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEWS_FETCHED_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case NEWS_FETCHED_SUCCESSED:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
        error: null,
      };
    case NEWS_FETCHED_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SEARCHED_NEWS_REQUESTED:
      return {
        ...state,
        isLoading: false,
        error: null,
        searchText: action.payload,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        isLoading: false,
        error: null,
        filterType: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
