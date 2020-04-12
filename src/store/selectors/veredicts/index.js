export const oldRulesSelectors = (store) => store.default.listRules.map((rule) => ({
  ...rule,
  likePercentage: rule.positives / (rule.positives + rule.negatives),
}));
