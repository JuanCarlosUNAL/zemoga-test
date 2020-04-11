import { createReducer } from 'redux-act';
import {
  ADD,
  REMOVE,
} from '../../actions/veredicts';
import {
  addOne,
  getInitialState,
  removeOne,
} from './helpers';

export default createReducer({
  [ADD]: addOne,
  [REMOVE]: removeOne,
}, getInitialState());
