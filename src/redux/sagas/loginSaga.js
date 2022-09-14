import { put, call, takeLatest } from 'redux-saga/effects';

import api from '../../api';
import { USER_LOGIN_REQUESTED } from '../../constants';
import { loginFailed, loginSuccessed } from '../actions/auth';

function* loginWorker({ payload }) {
  try {
    const { data, headers } = yield call(api.post, '/users/sign_in', {
      user: payload,
    });
    localStorage.setItem('token', headers.authorization);
    yield put(loginSuccessed(data));
  } catch (error) {
    yield put(loginFailed(error.response.statusText));
  }
}

function* loginWatcher() {
  yield takeLatest(USER_LOGIN_REQUESTED, loginWorker);
}

export default loginWatcher;
