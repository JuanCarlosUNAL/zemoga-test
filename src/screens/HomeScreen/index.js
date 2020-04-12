import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { oldRulesSelectors } from '../../store/selectors/veredicts';
import { voteNegative, votePositive } from '../../store/actions/veredicts';
import View from './view';

export default () => {
  const oldRules = useSelector(oldRulesSelectors);
  const dispatch = useDispatch();

  const votePositiveAction = (id) => {
    dispatch(votePositive(id));
  };
  const voteNegativeAction = (id) => {
    dispatch(voteNegative(id));
  };

  return (
    <View
      oldRules={oldRules}
      votePositive={votePositiveAction}
      voteNegative={voteNegativeAction}
    />
  );
};
