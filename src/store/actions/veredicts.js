import { createAction } from 'redux-act';

export const setStoredData = createAction('Set stored data');
export const dataLoaded = createAction('Data loaded');
export const saveCurrentData = createAction('Save current data');
export const votePositive = createAction('Vote positive');
export const voteNegative = createAction('Vote negative');
