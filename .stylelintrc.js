const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
  },
};
