import { put, call, takeLatest } from 'redux-saga/effects';

import api from '../../api/index';
import { USER_AUTH_REQUESTED } from '../../constants';
import { login, registerFailed, registerSuccessed } from '../actions/auth';

function* registerWorker({ payload }) {
  try {
    const { data, headers } = yield call(api.post, '/users', { user: payload });
    localStorage.setItem('token', JSON.stringify(headers.Authorization));
    yield put(registerSuccessed(data));
    yield put(login(payload));
  } catch (error) {
    yield put(registerFailed(error.response.statusText));
  }
}

function* registerWatcher() {
  yield takeLatest(USER_AUTH_REQUESTED, registerWorker);
}

export default registerWatcher();
