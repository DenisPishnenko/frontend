import { put, call, takeEvery } from "redux-saga/effects";

import api from "../../api/index";
import { USER_AUTH_REQUESTED } from "../../constants";
import { registerFailed, registerSuccessed } from "../actions/auth";

function* registerWorker({ payload }) {
  try {
    const data = yield call(api.post, "/users", { user: payload });
    console.log("user", data);
    yield put(registerSuccessed(data));
  } catch (error) {
    console.log("error", error);
    yield put(registerFailed(error.message));
  }
}

export function* registerWatcher() {
  yield takeEvery(USER_AUTH_REQUESTED, registerWorker);
}
