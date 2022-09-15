import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserSuccessed, fetchUserFailed } from '../actions/user';
import { USER_REQUESTED } from '../../constants';
import getUserWithNews from '../../api/userApi';

function* userWorker({ payload }) {
  try {
    const data = yield call(getUserWithNews, payload);
    yield put(fetchUserSuccessed(data));
  } catch (error) {
    yield put(fetchUserFailed(error.message));
  }
}

function* userWatcher() {
  yield takeLatest(USER_REQUESTED, userWorker);
}

export default userWatcher;
