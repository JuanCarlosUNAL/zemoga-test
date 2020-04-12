import { all, spawn } from 'redux-saga/effects';
import storage from './storage';

export default function* rootSagas() {
  yield all([
    spawn(storage),
  ]);
}
