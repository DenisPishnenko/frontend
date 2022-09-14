import { put, call, takeLatest } from "redux-saga/effects";

import api from "../../api/index";
import { USER_AUTH_REQUESTED } from "../../constants";
import { login, registerFailed, registerSuccessed } from "../actions/auth";

function* registerWorker({ payload }) {
  try {
    const response = yield call(api.post, "/users", { user: payload });
    localStorage.setItem(
      "token",
      JSON.stringify(response.headers.Authorization)
    );
    yield put(registerSuccessed(response.data));
    yield put(login(payload));
  } catch (error) {
    yield put(registerFailed(error.response.statusText));
  }
}

export function* registerWatcher() {
  yield takeLatest(USER_AUTH_REQUESTED, registerWorker);
}
