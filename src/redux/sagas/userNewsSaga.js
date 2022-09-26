import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api';
import { fetchUserNewsSuccessed, fetchUserNewsError } from '../actions/news';
import { fetchUser } from '../actions/user';
import { USER_NEWS_FETCHED_REQUESTED } from '../../constants';

function* userNewsWorker({ payload }) {
  try {
    const { id, values, image } = payload;
    const formData = new FormData();
    ['title', 'content', 'tag'].forEach((key) => formData.append(key, values[key]));
    formData.set('image', image);
    const news = yield call(api.post, `/users/${id}/news`, formData);
    yield put(fetchUserNewsSuccessed(news));
    yield put(fetchUser(id));
  } catch (error) {
    yield put(fetchUserNewsError(error.message));
  }
}

function* userNewsWatcher() {
  yield takeLatest(USER_NEWS_FETCHED_REQUESTED, userNewsWorker);
}

export default userNewsWatcher;
