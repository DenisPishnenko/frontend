import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserEditedSuccessed, fetchUserEditedFailed } from '../actions/user';
import { USER_EDIT_REQUESTED } from '../../constants';
import api from '../../api';

function* userEditWorker({ payload }) {
  try {
    const { id, values, image } = payload;
    const formData = new FormData();
    formData.set('name', values.name);
    formData.set('image', image);
    const { data } = yield call(api.patch, `/users/${id}`, formData);
    yield put(fetchUserEditedSuccessed(data));
  } catch (error) {
    yield put(fetchUserEditedFailed(error.message));
  }
}

function* userEditWatcher() {
  yield takeLatest(USER_EDIT_REQUESTED, userEditWorker);
}

export default userEditWatcher;
