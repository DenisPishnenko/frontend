import { call, takeLatest } from "redux-saga/effects";
import { signOutUser } from "../../api/registerApi";
import { USER_LOGOUT } from "../../constants";

function* logoutWorker() {
  const response = yield call(signOutUser);
  yield console.log(response);
}

export function* logoutWatcher() {
  yield takeLatest(USER_LOGOUT, logoutWorker);
}