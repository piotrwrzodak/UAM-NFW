import { all } from 'redux-saga/effects';

import { watcher as initWatcher, submitWatcher } from './init.saga';

export function* rootSaga() {
  yield all([initWatcher(), submitWatcher()]);
}
