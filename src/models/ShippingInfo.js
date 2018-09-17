// /* eslint-disable no-param-reassign */
// // MobX-State-Tree uses reassignment to self. Disable that rule for model files
import { types } from 'mobx-state-tree';

const BillingInfo = types
  .model({
    name: types.optional(types.string,''),
    first_name: types.optional(types.string,''),
    last_name: types.optional(types.string,''),
    street_1: types.optional(types.string,''),
    street_2: types.optional(types.string,''),
    city: types.optional(types.string,''),
    state: types.optional(types.string,''),
    zip: types.optional(types.string,''),
    country: types.optional(types.string,''),
    phone: types.optional(types.string,''),
    email: types.optional(types.string,''),
  });


export default BillingInfo;