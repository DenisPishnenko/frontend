import { put, call, takeEvery } from "redux-saga/effects";

import api from "../../api";
import { signOutUser } from "../../api/registerApi";
import { USER_LOGIN_REQUESTED, USER_LOGOUT } from "../../constants";
import { loginFailed, loginSuccessed } from "../actions/auth";

function* loginWorker({ payload }) {
  try {
    const response = yield call(api.post, "/users/sign_in", {
      user: payload,
    });
    console.log(response);
    localStorage.setItem(
      "token",
      JSON.stringify(response.headers.Authorization)
    );
    yield put(loginSuccessed(response.data));
  } catch (error) {
    yield put(loginFailed(error.message));
  }
}

function* logoutWorker() {
  const response = yield call(signOutUser);
  yield console.log(response);
}

export function* loginWatcher() {
  yield takeEvery(USER_LOGIN_REQUESTED, loginWorker);
  yield takeEvery(USER_LOGOUT, logoutWorker);
}
