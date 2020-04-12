import {
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  dataLoaded,
  saveCurrentData,
  setStoredData,
  voteNegative,
  votePositive,
} from '../../actions/veredicts';

function* saveLatestData() {
  const store = yield select(({
    default: {
      listRules,
    },
  }) => ({ listRules }));

  localStorage.setItem('store', JSON.stringify(store));
}

function* saveNewState() {
  yield put(saveCurrentData());
}

export default function* () {
  const store = localStorage.getItem('store');
  const data = JSON.parse(store);

  const validStore = !!data && !!data.listRules;
  if (validStore) yield put(setStoredData(data));

  yield takeEvery([
    votePositive,
    voteNegative,
  ], saveNewState);
  yield takeLatest(saveCurrentData, saveLatestData);
  yield put(dataLoaded());
}
