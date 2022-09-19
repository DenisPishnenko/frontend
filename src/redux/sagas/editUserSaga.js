import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserEditedSuccessed, fetchUserEditedFailed } from '../actions/user';
import { USER_EDIT_REQUESTED } from '../../constants';
import api from '../../api';

function* userEditWorker({ id, payload }) {
  try {
    const data = yield call(api.put, `/users/${id}`, { user: payload });
    yield console.log(data);
    yield put(fetchUserEditedSuccessed(data));
  } catch (error) {
    yield put(fetchUserEditedFailed(error.message));
  }
}

function* userEditWatcher() {
  yield takeLatest(USER_EDIT_REQUESTED, userEditWorker);
}

export default userEditWatcher;
