import { all } from 'redux-saga/effects';

import loginWatcher from './loginSaga';
import logoutWatcher from './logoutSaga';
import newsWatcher from './newsSaga';
import registerWatcher from './registerSaga';
import userWatcher from './userSaga';
import userEditWatcher from './editUserSaga';

function* rootSaga() {
  yield all([
    newsWatcher(),
    registerWatcher(),
    loginWatcher(),
    logoutWatcher(),
    userWatcher(),
    userEditWatcher(),
  ]);
}

export default rootSaga;
