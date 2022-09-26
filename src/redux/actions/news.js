import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
  USER_NEWS_FETCHED_REQUESTED,
  USER_NEWS_FETCHED_SUCCESSED,
  USER_NEWS_FETCHED_FAILED,
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
