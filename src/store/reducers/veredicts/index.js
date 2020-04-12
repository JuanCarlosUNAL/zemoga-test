import { createReducer } from 'redux-act';
import {
  dataLoaded, voteNegative, votePositive,
} from '../../actions/veredicts';
import {
  getStateDataLoaded,
  getStateDefaultData,
  getStateVoteNegative,
  getStateVotePositive,
} from './helpers';

export default createReducer({
  [dataLoaded]: getStateDataLoaded,
  [votePositive]: getStateVotePositive,
  [voteNegative]: getStateVoteNegative,
}, getStateDefaultData());
