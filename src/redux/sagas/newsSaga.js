import { call, put, takeEvery } from "redux-saga/effects";

import { getAllNews } from "../../api/newsApi";
import { fetchSuccessed, getError } from "../actions/news";
import { NEWS_FETCHED_REQUESTED } from "../../constants";

function* newsWorker() {
  try {
    const news = yield call(getAllNews);
    yield put(fetchSuccessed(news));
  } catch (error) {
    yield put(getError(error.message));
  }
}

export function* newsWatcher() {
  yield takeEvery(NEWS_FETCHED_REQUESTED, newsWorker);
}
