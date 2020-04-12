import mock from './mocks.json';

export function getStateDefaultData() {
  return {
    listRules: mock,
    dataLoaded: false,
  };
}

export function getStateDataLoaded(state) {
  return {
    ...state,
    dataLoaded: true,
  };
}

export function getStateVotePositive(state, id) {
  const listRules = state.listRules.map((rule) => (rule.id !== id ? rule : {
    ...rule,
    positives: rule.positives + 1,
  }));
  return {
    ...state,
    listRules,
  };
}

export function getStateVoteNegative(state, id) {
  const listRules = state.listRules.map((rule) => (rule.id !== id ? rule : {
    ...rule,
    negatives: rule.negatives + 1,
  }));
  return {
    ...state,
    listRules,
  };
}

export function getStateSetStoreData(state, { listRules }) {
  return {
    listRules,
  };
}
