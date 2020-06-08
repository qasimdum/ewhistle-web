import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_CLAIMS_AND_STATEMENTS: 0,
  BENEFICIARY_FRAUD: 1,
  BRIBERY: 2,
  OTHER: 3,
});

const names = {
  [enums.FALSE_CLAIMS_AND_STATEMENTS]: 'False claims and statements',
  [enums.BENEFICIARY_FRAUD]: 'Beneficiary fraud',
  [enums.BRIBERY]: 'Bribery',
  [enums.OTHER]: 'Other',
};

export const getSinglePublicSectorFraud = (key) => getById(names, key);
export default namesToArray(names);
