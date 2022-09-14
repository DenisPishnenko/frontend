import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
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
