import {
  put,
} from 'redux-saga/effects';
import {
  dataLoaded,
  setStoredData,
} from '../../actions/veredicts';

export default function* () {
  const store = localStorage.getItem('store');
  if (store) yield put(setStoredData(store));
  yield put(dataLoaded());
}
