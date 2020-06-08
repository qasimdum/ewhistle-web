import {create, namesToArray, getById} from './General';

export const enums = create({
  INITIAL: 0,
  IN_REVIEW: 1,
  RESOLVED: 2
});

const names = {
  [enums.INITIAL]: 'Initial',
  [enums.IN_REVIEW]: 'In Review',
  [enums.RESOLVED]: 'Resolved',
};

export const getSingleAllegationStatus = (key) => getById(names, key);
export default namesToArray(names);




