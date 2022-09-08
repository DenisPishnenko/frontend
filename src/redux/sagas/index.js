import { all } from "redux-saga/effects";

import { newsWatcher } from "./newsSaga";

function* rootSaga() {
  yield all([newsWatcher()]);
}

export default rootSaga;
