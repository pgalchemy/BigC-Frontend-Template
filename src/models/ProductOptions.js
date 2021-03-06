// // MobX-State-Tree uses reassignment to self. Disable that rule for model files
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { types } from 'mobx-state-tree';
import OptionValues from './OptionValues';

const ProductOptions = types
  .model({
    id: types.number,
    option_id: types.number,
    name: types.optional(types.string, ''),
    values: types.optional(types.array(OptionValues), []),
  });

export default ProductOptions;
