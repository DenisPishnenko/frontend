import { call, put, takeLatest } from 'redux-saga/effects';
import { signOutUser } from '../../api/signOutUser';
import { USER_LOGOUT } from '../../constants';
import { logoutFailed, logoutSuccessed } from '../actions/auth';

function* logoutWorker() {
  try {
    yield call(signOutUser);
    localStorage.removeItem('token');
    yield put(logoutSuccessed());
  } catch (error) {
    yield put(logoutFailed());
  }
}

function* logoutWatcher() {
  yield takeLatest(USER_LOGOUT, logoutWorker);
}

export default logoutWatcher;
