import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_PROGRESSED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
} from "../../constants";

export const fetchNews = () => ({
  type: NEWS_FETCHED_REQUESTED,
});
export const getError = (error) => ({
  type: NEWS_FETCHED_FAILED,
  error,
});
export const getLoading = () => ({
  type: NEWS_FETCHED_PROGRESSED,
});
export const fetchSuccessed = () => ({
  type: NEWS_FETCHED_SUCCESSED,
});
