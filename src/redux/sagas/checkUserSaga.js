import { call, put, takeLatest } from 'redux-saga/effects';

import { checkUserSuccessed, checkUserFailed } from '../actions/user';
import { CHECK_USER_REQUESTED } from '../../constants';
import { checkUser } from '../../api/userApi';

function* checkUserWorker() {
  try {
    const data = yield call(checkUser);
    yield put(checkUserSuccessed(data));
  } catch (error) {
    yield put(checkUserFailed(error.message));
  }
}

function* checkUserWatcher() {
  yield takeLatest(CHECK_USER_REQUESTED, checkUserWorker);
}

export default checkUserWatcher;
