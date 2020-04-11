import {
  put,
} from 'redux-saga/effects';
import { ADD } from '../../actions/veredicts';

export default function* () {
  yield put(ADD());
}
