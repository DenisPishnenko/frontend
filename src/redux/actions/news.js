import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
  USER_NEWS_FETCHED_REQUESTED,
  USER_NEWS_FETCHED_SUCCESSED,
  USER_NEWS_FETCHED_FAILED,
  SEARCHED_NEWS_REQUESTED,
  SET_FILTER_TYPE,
} from '../../constants';

export const fetchNews = () => ({
  type: NEWS_FETCHED_REQUESTED,
});
export const getError = (error) => ({
  type: NEWS_FETCHED_FAILED,
  payload: error,
});
export const fetchSuccessed = (payload) => ({
  type: NEWS_FETCHED_SUCCESSED,
  payload,
});

export const fetchUserNews = (payload) => ({
  type: USER_NEWS_FETCHED_REQUESTED,
  payload,
});
export const fetchUserNewsError = (error) => ({
  type: USER_NEWS_FETCHED_FAILED,
  payload: error,
});
export const fetchUserNewsSuccessed = (payload) => ({
  type: USER_NEWS_FETCHED_SUCCESSED,
  payload,
});
export const putFilterType = (payload) => ({
  type: SET_FILTER_TYPE,
  payload,
});
export const searchNews = (payload) => ({
  type: SEARCHED_NEWS_REQUESTED,
  payload,
});
