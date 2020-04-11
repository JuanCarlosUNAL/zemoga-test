import { all, spawn } from 'redux-saga/effects';
import initialLoad from './initialLoad';

export default function* rootSagas() {
  yield all([
    spawn(initialLoad),
  ]);
}
