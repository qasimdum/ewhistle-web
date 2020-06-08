import {create, namesToArray, getById} from './General';

export const enums = create({
  BOGUS_CUSTOMER: 0,
  BOGUS_BANK: 1,
  SELF_AUTHORIZING_PAYMENT: 2,
  OTHER: 3,
});

const names = {
  [enums.BOGUS_CUSTOMER]: 'Bogus customer/vendor',
  [enums.BOGUS_BANK]: 'Bogus bank account',
  [enums.SELF_AUTHORIZING_PAYMENT]: 'Self authorizing payments',
  [enums.OTHER]: 'Other',
};

export const getSinglePaymentFraud = (key) => getById(names, key);
export default namesToArray(names);
