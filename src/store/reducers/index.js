import { combineReducers } from 'redux';
import * as veredicts from './veredicts';

export default combineReducers({
  ...veredicts,
});
