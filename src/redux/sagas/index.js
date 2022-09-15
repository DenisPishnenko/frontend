import { all } from 'redux-saga/effects';

import loginWatcher from './loginSaga';
import logoutWatcher from './logoutSaga';
import newsWatcher from './newsSaga';
import registerWatcher from './registerSaga';
import userWatcher from './userSaga';

function* rootSaga() {
  yield all([
    newsWatcher(),
    registerWatcher(),
    loginWatcher(),
    logoutWatcher(),
    userWatcher(),
  ]);
}

export default rootSaga;
