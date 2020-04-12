import { createReducer } from 'redux-act';
import {
  dataLoaded, setStoredData, voteNegative, votePositive,
} from '../../actions/veredicts';
import {
  getStateDataLoaded,
  getStateDefaultData,
  getStateSetStoreData,
  getStateVoteNegative,
  getStateVotePositive,
} from './helpers';

export default createReducer({
  [dataLoaded]: getStateDataLoaded,
  [setStoredData]: getStateSetStoreData,
  [voteNegative]: getStateVoteNegative,
  [votePositive]: getStateVotePositive,
}, getStateDefaultData());
