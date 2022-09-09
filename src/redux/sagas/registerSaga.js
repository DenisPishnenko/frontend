import { put, call, takeLatest } from "redux-saga/effects";

import { registerUser } from "../../api/registerApi";
import { USER_AUTH_REQUESTED } from "../../constants";
import { registerFailed, registerSuccessed } from "../actions/auth";

function* registerWorker(payload) {
  try {
    const user = yield call(registerUser(payload));
    yield put(registerSuccessed(user));
  } catch (error) {
    yield put(registerFailed(error.message));
  }
}

export function* registerWatcher() {
  yield takeLatest(USER_AUTH_REQUESTED, registerWorker);
}
