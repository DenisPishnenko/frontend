import { all } from "redux-saga/effects";

import { newsWatcher } from "./newsSaga";
import { registerWatcher } from "./registerSaga";

function* rootSaga() {
  yield all([newsWatcher(), registerWatcher()]);
}

export default rootSaga;
