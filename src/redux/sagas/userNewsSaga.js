import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api';
import { fetchUserNewsSuccessed, fetchUserNewsError } from '../actions/news';
import { USER_NEWS_FETCHED_REQUESTED } from '../../constants';

function* userNewsWorker({ payload }) {
  try {
    const { id, values, image } = payload;
    const formData = new FormData();
    formData.set('title', values.title);
    formData.set('content', values.content);
    formData.set('tag', values.tag);
    formData.set('image', image);
    const news = yield call(api.post, `/users/${id}/news`, formData);
    console.log(news);
    yield put(fetchUserNewsSuccessed(news));
  } catch (error) {
    yield put(fetchUserNewsError(error.message));
  }
}

function* userNewsWatcher() {
  yield takeLatest(USER_NEWS_FETCHED_REQUESTED, userNewsWorker);
}

export default userNewsWatcher;
