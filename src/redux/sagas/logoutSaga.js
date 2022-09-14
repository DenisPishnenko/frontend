import { call, takeLatest } from "redux-saga/effects";
import { signOutUser } from "../../api/registerApi";
import { USER_LOGOUT } from "../../constants";

function* logoutWorker() {
  yield call(signOutUser);
  localStorage.removeItem("token");
}

export function* logoutWatcher() {
  yield takeLatest(USER_LOGOUT, logoutWorker);
}
