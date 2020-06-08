import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_IDENTITY_SECURITY_PASS: 0,
  MISUSING_GENERIC_USERNAME: 1,
  OTHER: 2,
});

const names = {
  [enums.FALSE_IDENTITY_SECURITY_PASS]: 'False Identity (Security Pass)',
  [enums.MISUSING_GENERIC_USERNAME]: 'Misusing generic username',
  [enums.OTHER]: 'Other',
};

export const getSingleSecurityFraud = (key) => getById(names, key);
export default namesToArray(names);
