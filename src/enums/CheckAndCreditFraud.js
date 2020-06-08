import {create, namesToArray, getById} from './General';

export const enums = create({
  MISUSE_OF_CHECK: 0,
  MISUSE_OF_CREDIT_CARD: 1,
  OTHER: 2,
});

const names = {
  [enums.MISUSE_OF_CHECK]: 'Misuse of Check',
  [enums.MISUSE_OF_CREDIT_CARD]: 'Misuse of Credit Card',
  [enums.OTHER]: 'Other',
};

export const getSingleCheckAndCreditFraud = (key) => getById(names, key);
export default namesToArray(names);
