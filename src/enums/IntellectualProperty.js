import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_CLAIM_OF_COPYRIGHT: 0,
  MISUSE_OF_IP: 1,
  SELLING_IP: 2,
  OTHER: 3,
});

const names = {
  [enums.FALSE_CLAIM_OF_COPYRIGHT]: 'False claim of copyright',
  [enums.MISUSE_OF_IP]: 'Misuse/Sharing of IP',
  [enums.SELLING_IP]: 'Selling IP to 3rd party',
  [enums.OTHER]: 'Other',
};

export const getSingleIntellectualProperty = (key) => getById(names, key);
export default namesToArray(names);
