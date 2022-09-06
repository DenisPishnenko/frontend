import { call, put, takeEvery, all } from "redux-saga/effects";

import { getAllNews } from "../../api/newsApi";
import {
  NEWS_FETCHED_FAILED,
  NEWS_FETCHED_PROGRESSED,
  NEWS_FETCHED_REQUESTED,
  NEWS_FETCHED_SUCCESSED,
} from "../../constants";
// import { fetchSuccessed, getError, getLoading } from "../actions/fetchNews";

function* newsWorker() {
  try {
    yield put({ type: NEWS_FETCHED_PROGRESSED });
    const news = yield call(getAllNews);
    yield put({ type: NEWS_FETCHED_SUCCESSED, payload: news });
  } catch (error) {
    yield put({ type: NEWS_FETCHED_FAILED, payload: error });
  }
}

function* newsWatcher() {
  yield takeEvery(NEWS_FETCHED_REQUESTED, newsWorker);
}

function* rootSaga() {
  yield all([newsWatcher()]);
}

export default rootSaga;
